const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError");
const {listingSchema,reviewSchema} = require("./schema.js");
const Review = require("./models/reviews.js");


const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate); 
app.use(express.static(path.join(__dirname, "public")));

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Hi, I am root");
  });


app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);


app.all("*",(req,res,next)=>{
  next(new ExpressError(404,"page not found!"));
});

app.use((err,req,res,next)=>{
 let{statuscode=500,message='Somthing went wrong'} = err;
 res.status(statuscode).send(message)
})
  app.listen(8080, () => {
    console.log("server is listening to port 8080");
  });