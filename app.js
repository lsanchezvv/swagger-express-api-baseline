'use strict'

const fs = require('fs')
const yaml = require('js-yaml')
const swaggerUi = require('swagger-ui-express')
const { initSwagger } = require('./swagger-config')

// uses the port defined on the .env file. Default is port 10014.
const PORT = process.env.PORT || 10014

/**
 * Initializes the app.
 */
async function InitApp () {
  console.log('InitApp(): initialize app')

  // reads swagger.yaml api docs.
  const swaggerDocument = yaml.load(fs.readFileSync('./api/swagger/swagger.yaml', 'utf8'))

  const app = await initSwagger()

  // serves the swagger api documentation on the url. Only works locally.
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  app.listen(PORT)

  console.log(`Listening on port ${PORT}`)
  console.log(`Docs available @ http://localhost:${PORT}/api-docs`)
}

InitApp().catch(err => {
  console.error('An error has ocurred initalizing the app: ', err.stack)
  process.exit(1)
})
