const express = require("express")
const app = express()
const PORT = 5000

app.listen(PORT, () => console.log("サーバーが起動しました"))

app.get("/",(req, res) => {
    res.send("講座を受講中")
})

const customers = [
    {title: "田中", id: 1},
    {title: "佐藤", id: 2},
    {title: "佐々木", id: 3},
    {title: "桜井", id: 4},
    {title: "佐伯", id: 5},
]

app.get("/api/customers", (req, res) => {
    res.send(customers)
})