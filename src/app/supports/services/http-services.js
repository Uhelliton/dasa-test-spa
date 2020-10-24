import http from './../http/config.js'

const HttpServices = {
  /*!
   * Responsavel para gerar nova request para o servidor do tipo get
   * @param uriPath
   */
  get: (uriPath, params = {}) => {
    return http.get(uriPath, { params: params })
      .then(response => response)
  },

  /*!
   * Responsavel para gerar nova request para o servidor do tipo post
   * @param {string} uriPath
   * @param {array} $data
   * @return {Promise}
   */
  post: (uriPath, data, headers) => {
    return http.post(uriPath, data, headers)
      .then(response => response)
  },

  /*!
   * Responsavel para gerar nova request para o servidor do tipo put
   * @param {string} uriPath
   * @param {array} $data
   * @return {Promise}
   */
  put: (uriPath, data) => {
    return http.put(uriPath, data)
      .then(response => response)
  },

  /*!
   * Responsavel para gerar nova request para o servidor do tipo delete
   * @param {string} uriPath
   * param {array} data
   * @return {Promise}
   */
  delete: (uriPath, data) => {
    return http.delete(uriPath, { data: data })
      .then(response => response)
  }

}

export default HttpServices
