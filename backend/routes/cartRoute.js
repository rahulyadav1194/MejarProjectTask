const express = require('express')
const router = express.Router()

let cartController = require('../controller/cartController')

router.post('/cartSave',cartController.cartSave)

router.get('/getCart',cartController.getCart )

router.delete('/deleteCart/:id',cartController.deleteCart)

module.exports =router