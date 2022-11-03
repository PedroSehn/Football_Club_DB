import * as sinon from 'sinon'
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testa rota /leaderboard/home', () => {
  it('Deve retornar 200 e um array', async() => {
    const response = await chai.request(app)
    .get('/leaderboard/home')
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  })
});