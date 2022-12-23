import Url from 'url-parse'

function formatUrl(url = location.href, queryParser = true) {
  return new Url(url, queryParser)
}

export {
  formatUrl,
}
