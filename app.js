const path = require("path")

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use("/", (req, res, next) => {
  return res.render("index")
})

app.listen(3000)