var express=require("express")
var app=express()
const path = require("path")
const port =3000


const Timing = (req, res, next) => {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    if (day > 6 || hour > 17 || hour < 9) {
        res.sendFile(path.join(__dirname, "rawa7.html"))
    } else {
        next();
    }
};

app.use(Timing, express.static(path.join(__dirname, 'pages')));

app.listen(3000, (err) => {
    if (err) {
        throw err
    }
    else {
        console.log("all good")
    }
})
