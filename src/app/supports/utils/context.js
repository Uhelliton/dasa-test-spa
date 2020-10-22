/**
 * @see https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
 * @type {{INTERNAL_SERVER_ERROR: number, CREATED: number, UNAUTHORIZED: number, BAD_REQUEST: number, NOT_FOUND: number, OK: number, BAD_GATEWAY: number}}
 */
export const HTTP_RESPONSE = {
  OK: 200,
  CREATED: 2001,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502
}
