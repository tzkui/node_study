const app = require("express")();
app.get("/", (req, res) => {
  res.sendFile("./pages/index.html", { root: __dirname })
})
app.get("/chats",(req,res)=>{
  res.sendFile("./pages/chats.html", { root: __dirname })
})
app.listen(1234)