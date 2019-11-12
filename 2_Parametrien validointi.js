const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/Menus.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/menus', function (req, res) {
    let today = req.query.today;
    let tomorrow = req.query.tomorrow;
    if (today == "12.11.2019" & tomorrow == "13.11.2019") {
        console.log("Statuscode: 200");
    } else {
        console.log("Statuscode: 400")
    }
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');