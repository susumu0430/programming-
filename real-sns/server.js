const express = require("express")
const app = express()
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const PORT = 3000;
const mongoose = require("mongoose")
require("dotenv").config();

//データベース接続
mongoose.connect(process.env.MONGOURL
    // "mongodb+srv://susumu04301125:dj33s0ix68OE6ZGq@cluster0.0iuqew0.mongodb.net/realsns?retryWrites=true&w=majority"
).then(() => {
    console.log("DBと接続中・・・")
    
})
 .catch((err) => {
    console.log(err)
})

//ミドルウェア
app.use(express.json())
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)



app.get("/", (req, res) => {
    res.send("hello express")
})

app.listen(PORT, () => console.log("サーバーが起動しました"))