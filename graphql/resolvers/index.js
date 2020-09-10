const playgroundResolver = require('./playground')
const userResolver = require('./user.js')

 const root = {
    ...playgroundResolver,
    ...userResolver
}
module.exports = root