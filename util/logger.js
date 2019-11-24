const debug = global.debug
exports.logger = (message) => { if (!debug) { return } console.log(message) }