const connectToMongo = require("./db")
const express = require('express')
const cors = require('cors')
connectToMongo()
const app = express()
app.use(cors())
const port = 5000
app.use(express.json())
// Avaialable Routes
app.use("/api/cocktail" , require("./routes/coctail"))

app.listen(port, () => {
  console.log(`Coctail app listening at http://localhost:${port}`)
})