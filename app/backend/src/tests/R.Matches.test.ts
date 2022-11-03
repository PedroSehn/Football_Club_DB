import * as sinon from 'sinon'
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testa rotas de Matches', () => {
  describe('Testa rota /', () => {
    it('Retorna status 200 e um array', async () => {
      const response = await chai.
      request(app)
      .get('/matches')

      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
    });
  })
  describe('Teta rota /matches/41/finish', () => {
    it('Retorna 200 e um message', async () => {
      const response = await chai.
      request(app)
      .patch('/matches/41/finish')

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ "message": "Finished" });
    });
  })
});

