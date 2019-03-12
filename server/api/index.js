const router = require('express').Router()
module.exports = router

// router.use('/users', require('./users'))
router.use('/excel-json', require('./excel-json.js'));

router.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
  })
