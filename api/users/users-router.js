const express = require('express')
const userModal = require('./users-modal')

const router = express.Router()

const restricted = (req, res, next) => {
    if (req.session && req.session.user) {
      next()
    } else {
      res.status(401).json('unauthorized')
    }
  }
  
router.get("/", restricted, async (req, res) => {
    try {
        const users = await userModal.getAll()
        res.status(200).json(users)
    } catch (error) {
        res.json(error)
    }
})



module.exports = router