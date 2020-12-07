import {spawn} from 'child_process';
import express from 'express';
import path from 'path';

const app = express();
const router = express.Router();
const port = 8080;

router.use('/', function (req,res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
router.use('/download', function (req, res) {
  let info = req.params.url;
  spawn("echo", [`export default{url: ${info}}`, ">", "./youtube-url.js"]);
  spawn("npx", ["babel-node", "./frontend.js"])
});

app.use('/', router);
app.listen(process.env.port || port);