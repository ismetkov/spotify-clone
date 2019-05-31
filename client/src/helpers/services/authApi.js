import http from './httpService'
import { endpoint } from '../config'

class AuthService {
  signup(data) {
    return http.post(`${endpoint}/api/auth/signup`, data)
  }

  signin(data) {
    return http.post(`${endpoint}/api/auth/signin`, data)
  }

  requestResetPassword(data) {
    return http.post(`${endpoint}/api/account/request_reset`, data)
  }

  resetPassword({ password, confirmPassword, resetPasswordToken }) {
    return http.post(`${endpoint}/api/account/reset/${resetPasswordToken}`, {
      password,
      confirmPassword,
    })
  }
}

export default new AuthService()
