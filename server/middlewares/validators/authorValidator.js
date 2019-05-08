const { validateAll } = require("indicative");
const { sanitize } = require("indicative");

const addAuthor = (req, res, next) => {
  const rules = {
    name: "required|string"
  };
  let data = req.body;
  data = sanitize(data, { name: "trim" });
  const messages = {
    required: "{{ field }} is required to create an author"
  };

  validateAll(data, rules, messages)
    .then(() => {
      next();
    })
    .catch(errors => {
      res.status(422).jerror("ValidationFailed", errors);
    });
};

const updateAuthor = (req, res, next) => {
  const rules = {
    name: "required|string",
    id: "required|number"
  };
  const messages = {
    required: "{{ field }} is required to update an author",
    number: "{{ field }} must be an integer"
  };
  let data = req.body;
  data = sanitize(data, { name: "trim" });
  data.id = req.params.id;

  validateAll(data, rules, messages)
    .then(() => {
      next();
    })
    .catch(errors => {
      res.status(422).jerror("ValidationFailed", errors);
    });
};

const deleteAuthor = (req, res, next) => {
  const rules = {
    id: "required|number"
  };
  const messages = {
    required: "{{ field }} is required to delete an author",
    number: "{{ field }} must be an integer"
  };
  const data = req.params;

  validateAll(data, rules, messages)
    .then(() => {
      next();
    })
    .catch(errors => {
      res.status(422).jerror("ValidationFailed", errors);
    });
};

module.exports = { addAuthor, updateAuthor, deleteAuthor };
