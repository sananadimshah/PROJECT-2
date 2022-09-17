const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require("mongoose")
const route = require("./routes/route")


app.use(bodyParser.json())

mongoose.connect(
    "mongodb+srv://Parshant_rao:C4fIOvHGi74DVINv@newcluster.squkrr6.mongodb.net/InternGroup43",
    {
        useNewUrlParser:true
    }
).then(()=>console.log("MongoDB is connected"))
    .catch((err)=>console.log(err))

app.use("/",route)

app.listen(process.env.PORT || 3000, function() {
	console.log("Express app running on port " + (process.env.PORT || 3000));
});