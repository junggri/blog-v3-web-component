import express from 'express'
import path from "path"

const app = express();

app.use('/build', express.static(path.join(__dirname, '/../build')));
app.use('/styles', express.static(path.join(__dirname, '/styles')));
app.use('/images', express.static(path.join(__dirname, '/../public/images')));

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/index.html"))
})


app.listen(5000, () => {
  console.log("5000")
})
