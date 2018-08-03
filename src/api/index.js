const BASE_URL = 'https://api.scryfall.com'

// Start - Utility
class HttpError extends Error {
  constructor(response) {
    const errorText = response.statusText || response.status
    super(`${errorText} for ${response.url}`)
    this.name = 'HttpError'
    this.response = response
  }
}

export function buildQueryString(params) {
  const queryString = new URLSearchParams()
  Object.keys(params).forEach((key) => queryString.append(key, params[key]))

  return queryString
}

export async function executeFetch(url, options = {}) {
  if (options.credentials == null) {
    options.credentials = 'same-origin'
  }
  if (options.headers == null) {
    options.headers = {}
  }
  if (options.headers.Accept == null) {
    options.headers.Accept = 'application/json'
  }

  const response = await fetch(url, options)
  if (!response.ok) {
    throw new HttpError(response)
  }

  return response.json()
}
// End - Utility

/**
 * Get all sets.
 *
 * @return {Object} Returns an Object containing all sets.
 */
async function getAllSets() {
  return await executeFetch(`${BASE_URL}/sets`)
}

/**
 * Get information on a single set.
 *
 * @param  {String} set The set to get information about. This valu should be the set code.
 * @return {Object}     Returns an Object with the information for the specified set.
 */
async function getSet(set) {
  return await executeFetch(`${BASE_URL}/sets/${set}`)
}

/**
 * Get all cards in the specified set.
 *
 * @param  {String} set The set to get cards for
 * @return {Object}     Returns an Object with the cards in the specified set.
 */
async function getCardsInSet(set) {
  const params = {
    order: 'set',
    q: `e:${set}`,
    unique: 'prints'
  }

 return await executeFetch(`${BASE_URL}/cards/search?${buildQueryString(params)}`)
}

export default {
  getAllSets,
  getSet,
  getCardsInSet
}
