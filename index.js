const express = require("express")
const app = express();
const wsInstance = require('express-ws')(app);

app.ws("/", ws => {
  ws.on("message", data => {
    wsInstance.getWss().clients.forEach(server => {
      if (server !== ws) {
        server.send(data)
      }
    })
  })
})
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
app.get("/", (req, res) => {
  res.sendFile("./pages/index.html", { root: __dirname })
})
app.get("/chats", (req, res) => {
  res.sendFile("./pages/chats.html", { root: __dirname })
})
app.listen(1234)
app.use(express.static("public"))