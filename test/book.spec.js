process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const { server, databaseConnection } = require("../server/index");
const mockData = require("./mockData");

chai.use(chaiHttp);

const { expect } = chai;

const booksRoute = "/api/v1/books";
const { fineBoys } = mockData;

const knexfile = require("./../knexfile")[process.env.NODE_ENV];
const knex = require("knex")(knexfile);

describe("BOOKS API ENDPOINTS", () => {
  beforeEach(done => {
    knex.migrate.rollback().then(() => {
      knex.migrate.latest().then(() => {
        done();
      });
    });
  });

  afterEach(done => {
    knex.migrate.rollback().then(() => {
      done();
    });
  });

  it("should be able to add a book", async () => {
    const res = await chai
      .request(server)
      .post(`${booksRoute}/add`)
      .send(fineBoys)
      .set("Accept", "/application/json");
    expect(res).to.have.status(201);
    expect(res.body).to.have.property("status");
    expect(res.body.status).to.include("success");
    expect(res.body).to.have.property("data");
    expect(res.body).to.be.an("object");
    expect(res.body.data.title).to.include(`${fineBoys.title}`);
    expect(res.body.data.message).to.include(
      "Book has been added to the library"
    );
  });
});
