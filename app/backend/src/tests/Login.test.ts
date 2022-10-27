import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testa rota /login', () => {
  it('Retorna status 200', async() => {
    const response = await chai.request(app).post('/login')
    expect(response.status).to.equal(200);
  });

  it('Retorna um objeto com um token', async() => {
    const response = await chai.request(app).post('/login')
    expect(response.body.token).to.exist;
  });
});