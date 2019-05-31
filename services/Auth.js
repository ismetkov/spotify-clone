import bcrypt from 'bcrypt-nodejs'
import md5 from 'md5'

import db from '../db'

class Auth {
  async getExistingUser({ email }) {
    return db('users')
      .select('*')
      .where('email', email || null)
      .first()
  }

  async createAccount({ username, email, password }) {
    return db('users').insert({
      username,
      email,
      avatar: `http://gravatar.com/avatar/${md5(email)}?d=identicon`,
      password: bcrypt.hashSync(password)
    })
  }

  async setUserToken({ email }, expiryTime, promiseifiedBytes) {
    return db('users')
      .where('email', email)
      .update({
        reset_token: promiseifiedBytes.toString('hex'),
        reset_token_expiry: Date.now() + expiryTime
      })
  }

  async userValidityToken(token, expiryTime) {
    return db('users')
      .where('reset_token', token)
      .andWhere('reset_token_expiry', '>', Date.now() - expiryTime)
      .select('id')
      .first()
  }

  async updateAccountPassword(user, newPassword) {
    return db('users')
      .where('id', user.id)
      .update({
        password: newPassword,
        reset_token: null,
        reset_token_expiry: null
      })
      .select('*')
  }
}

export default new Auth()