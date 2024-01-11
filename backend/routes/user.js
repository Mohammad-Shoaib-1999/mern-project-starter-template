const express = require('express')
const router = express.Router()
const {
    getAllUser,
    getUser,
    addUser,
    editUser,
    deleteUser,
  } = require("../controller/user");

router.get('/',getAllUser)
router.get('/:id',getUser)
router.post('/',addUser)
router.put('/:id',editUser)
router.patch('/:id',editUser)
router.delete('/:id',deleteUser)

module.exports = router