const path = require("path")

const express = require("express")
const bodyParser = require("body-parser")

const connectDb = require("./utils/db")

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use("/", (req, res, next) => {
  return res.render("index")
})

try {
  connectDb()
  app.listen(3000)
} catch (error) {
  console.log(error)
}
