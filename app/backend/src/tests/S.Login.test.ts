import UserService from '../database/services/User.service';
import * as sinon from 'sinon'
import * as chai from 'chai';
import IUser from '../database/Entities/User';


describe('Testa funcoes USER SERVICE', () => {
  const service = new UserService();
  
  describe('Find by ID', () => {
    const user = {
      "id": 2,
      "username": "User",
      "role": "user",
      "email": "user@user.com",
      "password": "$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO"
    }
    before(() => sinon.stub(service, 'getByEmail').resolves(user as IUser))
    before(() => sinon.restore())

  })
});