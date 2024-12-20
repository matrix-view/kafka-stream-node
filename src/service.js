const configuration = require('./configuration')
const kafkaService = require('./service/kafka')
const mapper = require('./service/mapper')

module.exports = {
    configuration,
    mapper,
    kafkaService,
}