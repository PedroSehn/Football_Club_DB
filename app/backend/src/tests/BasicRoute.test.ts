import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Teste basico de rotas', () => {
  it('Retorna status 200', async() => {
    const response = await chai.request(app).get('/')
    expect(response.status).to.equal(200);
  });

  it('Retorna um objeto com um objeto', async() => {
    const response = await chai.request(app).get('/')
    expect(response.body.ok).to.exist;
  });
});