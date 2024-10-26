const express = require("express");
const router = express.Router({mergeParams:true});
const {reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

const validateReview = (req,res,next)=>{
    let{error} = reviewSchema.validate(req.body);
    if(error){
      throw new ExpressError(404,error);
    }else{
      next();
    }
  
  }
  
     //reviews route
  
     router.post("/",validateReview, wrapAsync(async(req,res)=>{
      let listing = await Listing.findById(req.params.id);
      let newReview = new Review(req.body.review);
      listing.reviews.push(newReview);
    
      await newReview.save();
      await listing .save();
      res.redirect(`/listings/${listing._id}`);
  
      
  
    }));
  
    //Delete reviews route
    router.delete("/:reviewId", wrapAsync(async(req,res)=>{
      let {id ,reviewId} = req.params;
  
      await Listing.findByIdAndUpdate();
      await Review.findByIdAndDelete(reviewId);
      res.redirect(`/listings/${id}`);
    }))

    module.exports = router;