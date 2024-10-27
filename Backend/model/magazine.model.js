import mongoose from "mongoose";

// define schema
const magazineSchema = mongoose.Schema({
    // passing the fields
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
})
// create a model schema
const Magazine = mongoose.model("Magazine", magazineSchema);

export default Magazine;