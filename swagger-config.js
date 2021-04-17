'use strict'

const express = require('express')
const swaggerNodeRunner = require('swagger-node-runner')

/**
 * Swagger express middleware
 * @param {{appRoot: __dirname}} config 
 * @returns 
 */
function _createSwaggerExpress (config) {
  return new Promise((resolve, reject) => {
    swaggerNodeRunner.create(config, (error, runner) => {
      if (error) { return reject(error) }
      resolve(runner.expressMiddleware())
    })
  })
}

/**
 * Initialize swagger-node runner.
 * @returns 
 */
async function initSwagger () {
  console.log('initSwagger(): Initializing swagger-node')

  // __dirname should be at the root of the project.
  const config = {
    appRoot: __dirname
  }

  const app = express()
  app.disable('x-powered-by')

  let swaggerExpress
  try {
    swaggerExpress = await _createSwaggerExpress(config)
    console.log('initSwagger(): created swagger express')
  } catch (error) {
    console.log(`ooops, an error has ocurred ${error.stack}`)
    throw error
  }

  swaggerExpress.register(app)
  console.log('initSwagger(): returning app')
  return app
}

module.exports = {
  _createSwaggerExpress,
  initSwagger
}
