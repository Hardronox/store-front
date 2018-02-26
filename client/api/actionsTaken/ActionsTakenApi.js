import Api from '../Api'
import pick from 'lodash/pick'
const _api = new WeakMap

/**
 * this is ActionsTakenApi fro working with action taking.
 */
export default class ActionsTakenApi extends Api {

  /**
   * this is method for sending action.
   * @param {Object} params
   * @property {string} params.social - twitter / instagram required
   * @property {string} params.type - type of action (tweet, retweet, like ...) required
   * @property {string} params.screenName - influencer screenName
   * @property {string} params.statusId - tweet ID
   * @property {string} params.username - influencer username
   * @property {string} params.text - action text
   * @token {Object} token
   * @returns {Promise}
   */
  send(params) {
    this.setEndpoint(`/actions/${params.social}/${params.type}`)
    this.setBody(pick(params, ['screenName', 'statusId', 'username', 'text']))
    this.setAuthToken(this.authApi.getToken())
    return this.post()
  }
}
