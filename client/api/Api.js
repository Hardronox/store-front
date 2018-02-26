import 'whatwg-fetch'
import omit from 'lodash/omit'

const _config = new WeakMap()
const _endpoint = new WeakMap()
const _returnedData = new WeakMap()

/**
 * this is Api base API calss
 * @access public
 */
export default class Api {

  constructor() {
    const config = {}
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    config.headers = headers
    _config.set(this, config)
  }

  /**
   * this is method for setting request type.
   * @private
   * @param {string} method should be POST, GET, PUT
   */
  _setMethod(method) {
    const config = _config.get(this)
    config.method = method
    _config.set(this, config)
  }


  /**
   * this is method for setting auth token for all requests.
   * @param {string} token auth0 token
   */
  setAuthToken(token) {
    const config = _config.get(this)
    config.headers.append('Authorization', `Bearer ${token}`)
    _config.set(this, config)
  }


  /**
   * this is method for setting endpoint
   * @param {string} endpoint - request  endpoint
   * @example '/userinfo/<userID>'
   */
  setEndpoint(endpoint) {
    _endpoint.set(this, endpoint)
  }

  /**
   * this is method for geting endpoint
   * @retunr {string} endpoint - request  endpoint
   */
  getEndpoint() {
    return _endpoint.get(this)
  }

  /**
   * this is method for seting request body
   * @param {Object} body - request  body
   */
  setBody(body) {
    let config = _config.get(this)
    if (!body) {
      config = omit(config, ['body'])
    } else {
      config.body = body ? JSON.stringify(body) : null
    }
    _config.set(this, config)
  }

  /**
   * this is method for getting request config
   * @return {Object} current config
   * @property {Object} body body of request
   * @property {Object} headers request headers
   * @property {String} method request method (POST, GET, PUT ...)
   */
  getConfig() {
    return _config.get(this)
  }

  /**
   * this is method for seting response data
   * @param {Object} data - response body
   */
  setReturnedData(data) {
    _returnedData.set(this, data)
  }

  /**
   * this is method for getting response data
   * @return {Object} response body
   */
  getReturnedData() {
    return _returnedData.get(this)
  }

  /**
   * this is method for GET request
   * @return {Promise} get response
   */
  get() {
    this._setMethod('GET')
    this.setBody(null)
    return new Promise((resolve, reject) => {
      fetch(this.getEndpoint(), this.getConfig())
        .then(response => {
          if (response.status === 200) {
            resolve(response.json())
          } else {
            if (response.status === 400) {
              response.json().then((error) => {
                reject(error)
              }).catch((e) => {
                reject(e)
              })
            } else {
              reject(response)
            }
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  _validateResponse(response) {
    if (response.status === 200) {
      return response.json()
    } else {
      return response
    }
  }


  /**
   * this is method for POST request
   * @return {Promise} POST response
   */
  post() {
    this._setMethod('POST')
    return new Promise((resolve, reject) => {
      fetch(this.getEndpoint(), this.getConfig())
        .then(response => {
          if (response.status === 200 || response.status === 201) {
            if (this.getReturnedData()) {
              resolve(this.getReturnedData())
            } else {
              resolve(this._validateResponse(response))
            }
          } else {
            if (response.status === 400) {
              response.json().then(error => reject(error))
            } else {
              reject(response)
            }
          }

        })
        .catch(err => {
          reject(err)
        })
    })
  }


  /**
   * this is method for PUT request
   * @return {Promise} put response
   */
  put() {
    this._setMethod('PUT')

    return new Promise((resolve, reject) => {
      fetch(this.getEndpoint(), this.getConfig())
        .then(response => {
          if (response.status === 200 || response.status === 201 || response.status === 204) {
            if (this.getReturnedData()) {
              resolve(this.getReturnedData())
            } else {
              resolve(response)
            }
          } else {
            reject(response)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  /**
   * this is method for delete request
   * @return {Promise} delete response
   */
  delete() {
    this._setMethod('DELETE')

    return new Promise((resolve, reject) => {
      fetch(this.getEndpoint(), this.getConfig())
        .then(response => {
          if (response.status === 200 || response.status === 201 || response.status === 204) {
            resolve(response)
          } else {
            reject(response)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
