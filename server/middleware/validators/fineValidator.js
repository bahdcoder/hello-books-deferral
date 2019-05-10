import { validateAll } from 'indicative';
import consola from 'consola';

const addFine = (req, res, next) => {
    const rules = {
        type: 'required|string',
        description: 'required|string',
        amount: 'required|number',
        userId: 'required|number|itExists:users,id'
    };

    const data = req.body;
    data.userId = req.params.userId;
    const messages = {
        required: '{{ field }} is required to create a fine',
        number: '{{ field }} is expected to be a an integer',
        itExists: "User's Id does not exist"
    };

    validateAll(data, rules, messages)
        .then(() => {
            next();
        })
        .catch(errors => {
            res.status(422).jerror('ValidationFailed', errors);
        });
};

const checkId = (req, res, next) => {
    const rules = {
        fineId: 'required|string|itExists:fines,id'
    };

    const data = req.params;
    const messages = {
        required: '{{ field }} is required to access a fine',
        number: '{{ field }} is expected to be a an integer',
        itExists: 'Fine Id does not exist'
    };

    validateAll(data, rules, messages)
        .then(() => {
            next();
        })
        .catch(errors => {
            res.status(422).jerror('ValidationFailed', errors);
        });
};

export default { addFine, checkId };
