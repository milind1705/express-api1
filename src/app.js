const express = require ("express");
require("./db/conn");
const Student = require("./models/student");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json)

app.post("/students", (req, res) => {
    console.log(req.body)
    const user = new Student(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((e)=> {
        res.send(e);
    })

    res.send("hello from other side.");
})

app.listen(port, () => {
    console.log(`connection is set up at ${port}`)
})