const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.send("User New Form")
})
router.post('/', (req, res) => {
    res.send('Create User')
})

router.route('/:id')
    .get((req, res) => {
        res.send('Hello user number ' + req.userNumber)
    })
    .post((req, res) => {
        res.send('Hello user number ' + req.userNumber)
    }).put((req, res) => {
        res.send('Hello user number ' + req.userNumber)
    }).delete((req, res) => {
        res.send('Hello user number ' + req.userNumber)
    })
router.param("id", (req, res, next, id) => {
    console.log(id);
    req.userNumber = "01"
    next()
})



module.exports = router