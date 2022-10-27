import * as sinon from 'sinon'
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

const password = 'secret_user'
const email = 'user@user.com';

describe('Testa autenticador de credenciais', () => {
  describe('Caso não seja informado senha ou email', () => {
    it('Body sem email retorna 400', async() => {
      const response = await chai.
      request(app)
      .post('/login')
      .send({ password })

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({"message": "All fields must be filled"})
    })
    it('Body sem senha', async() => {
      const response = await chai.
      request(app)
      .post('/login')
      .send({ email })

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({"message": "All fields must be filled"})
    })
    it('Email inválido', async()=>{
      const response = await chai
      .request(app)
      .post('/login')
      .send({ email: 'usergmail.com', password })
      expect(response.status).to.equal(401);
      expect(response.body).to.deep.equal({"message": "Incorrect email or password"})
    });
    it('Senha inválido', async()=>{
      const response = await chai
      .request(app)
      .post('/login')
      .send({ email, password: '123' })
      expect(response.status).to.equal(401);
      expect(response.body).to.deep.equal({"message": "Incorrect email or password"})
    });
  });
});