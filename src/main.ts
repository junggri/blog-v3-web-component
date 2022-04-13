import express from 'express'
import path from "path"
import livereload from 'livereload';
import livereloadMiddleware from 'connect-livereload';

const app = express();

const liveServer = livereload.createServer({
  exts: ['html', 'css', 'ejs'],
  debug: true
});

liveServer.watch("./");

app.use('/build', express.static(path.join(__dirname, '/../build')));
app.use('/styles', express.static(path.join(__dirname, '/styles')));
app.use('/images', express.static(path.join(__dirname, '/../public/images')));
app.use(livereloadMiddleware());

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/index.html"))
})


app.listen(5000, () => {
  console.log("4000")
})
