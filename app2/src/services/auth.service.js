import axios from 'axios'

const AuthService = {
  login () {
    return axios.get(`${process.env.VUE_APP_API}/api/login`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
  },
  retriveAccessToken (code) {
    const fd = new FormData()
    fd.append('grant_type', 'authorization_code')
    fd.append('client_id', '9385d2a0-3454-416b-88d8-a17c9edc3495')
    fd.append('client_secret', 'CkwvKxUS1v9c4CIoRXF9qQymBQybil20z4NpHdk1')
    fd.append('redirect_uri', 'http://localhost:8080/callback')
    fd.append('code', code)
    return axios.post(`${process.env.VUE_APP_API}/oauth/token`, fd)
  }
}

export default AuthService
