import * as sinon from 'sinon'
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testa rotas teams', () => {
  describe('Testa /teams', () => {
    it('Retorna status 200 com um array de objetos', async () => {
      const response = await chai
      .request(app)
      .get('/teams');
      expect(response.status).to.equal(200);
      expect(response.body).to.have.an('array');
    });
  });
  describe('Testa /teams/id', () => {
    it('Retorna 200 com um objeto', async () => {
      const response = await chai
      .request(app)
      .get('/teams/5');

      expect(response.status).to.equal(200)
      expect(response.body).to.deep.equal({ "id": 5, "teamName": "Cruzeiro" })
    });
  })
});