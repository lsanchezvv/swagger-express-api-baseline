'use strict'

/**
 *
 * @param {function} req
 * @param {function} res
 * @param {function} next
 */
async function helloWorld (req, res, next) {
  try {
    res.status(200).json({ message: 'Hello world!' })
  } catch (error) {
    if (error.status === 404) {
      res.sendStatus(404)
    }

    next()
  }
}

module.exports = {
  helloWorld
}
