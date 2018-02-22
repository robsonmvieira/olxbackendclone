const express = require('express')
const router = require('express-promise-router')()

const ad = require('../../controllers/ad/ad')

router.route('/')
  .get(ad.index)
  .post(ad.create)

module.exports = router

