const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.use(express.static('public'))
// app.use(logger)
// app.get("/", logger, (req, res) => {
//     // console.log("Here")
//     res.render("index", { text: "World" })
// })

const userRouter = require("./routes/users")
app.use("/users", userRouter)

function logger(req, res, next) {
    console.log("hi");
    next()
}
app.listen(3000)