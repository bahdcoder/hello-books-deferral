const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../server/index");

chai.use(chaiHttp);
const { expect } = chai;

describe("APP HOST /", () => {
  it("should return Hello Books Deferral", async () => {
    const res = await chai.request(server).get("/");
    expect(res).to.have.status(200);
    expect(res.body).to.have.property("status");
    expect(res.body.status).to.include("success");
    expect(res.body).to.have.property("data");
    expect(res.body.data).to.be.an("object");
    expect(res.body.data).to.have.property("message");
    expect(res.body.data.message).to.include("Hello Books Deferral");
  });
});
describe('APP HOST /', () => {
  it('should return Hello Books Deferral', async () => {
    const res = await chai.request(server).get('/');
    expect(res).to.have.status(200);
    expect(res.body).to.have.property('status');
    expect(res.body.status).to.include('success');
    expect(res.body).to.have.property('data');
    expect(res.body.data).to.be.an('object');
    expect(res.body.data).to.have.property('message');
    expect(res.body.data.message).to.include('Hello Books Deferral');
  });
});
