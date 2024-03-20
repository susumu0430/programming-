const express = require("express")
const app = express()
const PORT = 5000
app.use(express.json())

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

app.post("/api/customers", (req, res) => {
    const customer = {
        title: req.body.title,
        id: customers.length + 1
    }
    customers.push(customer)
    res.send(customer)
})
//お客様情報の更新
app.put("/api/customers/:id",(req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id))
    // customer.title = req.body.title

    const index = customers.indexOf(customer)
    customers.splice(index, 1)

    res.send(customer)
})