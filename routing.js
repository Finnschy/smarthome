const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname})
})

router.get("/contact", (req, res) => {
    res.sendFile("./views/contact.html", {root: __dirname})
})

router.get("/blog", (req, res) => {
    res.sendFile("./views/blog.html", {root: __dirname})
})

module.exports = router 