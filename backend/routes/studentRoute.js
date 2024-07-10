let express = require('express')
let router = express.Router()

let studentController = require('../controller/studentController.js')

router.post('/studentSave',studentController.studentSave)

router.get('/getStudent',studentController.getStudent)

router.delete('/deleteStudent/:id',studentController.deleteStudent)

router.put('/updateStudent/:id',studentController.updateStudent)

router.get('/getStudentById/:id', studentController.getStudentById)

router.get('/searchStudent/:inp', studentController.searchStudent)

 

module.exports = router 