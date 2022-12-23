function log(...args) {
  // debug 模式 || 非正式服 => log 信息
  const debugMode = location.search.includes('debug=1')
  const noProd = import.meta.env.MODE !== 'prod'

  if (debugMode || noProd) {
    // eslint-disable-next-line no-console
    console.log(...args)
  }
}

export {
  log,
}
