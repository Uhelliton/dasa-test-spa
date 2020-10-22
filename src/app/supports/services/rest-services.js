import HttpServices from './http-services'

export default class RestServices {
  endpoint = ''
  fieldId = 'id'

  /**
   * @param {Object} record
   * @returns {Promise}
   */
  create (record) {
    return HttpServices.post(`${this.endpoint}`, record)
  }

  /**
   * @param {Object} record
   * @returns {Promise}
   */
  update (record) {
    return HttpServices.put(`${this.endpoint}/${this.__getId(record)}`, record)
  }

  /**
   * @param {String|Object} record
   * @returns {Promise}
   */
  show (record) {
    return HttpServices.get(`${this.endpoint}/${this.__getId(record)}`)
  }

  /**
   * @param {Object} record
   * @returns {Promise}
   */
  destroy (record) {
    return HttpServices.delete(`${this.endpoint}/${this.__getId(record)}`)
  }

  /**
   * @param {String|Object} record
   * @returns {string}
   */
  __getId (record) {
    if (typeof record === 'object') {
      return record[this.fieldId]
    }
    return String(record)
  }

  /**
   * @param {Object} params
   * @returns {Promise}
   */
  search (params = {}) {
    return HttpServices.get(`${this.endpoint}`, params)
  }
}
