require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const {data : initData} = require("./data.js");
const Listing = require("../models/listing.js");
const geocoder = require("../utils/geocoder"); //node-geocoder file

const MONGO_URL = process.env.MONGO_URL;

main()
    .then(() => console.log("connected to DB"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});

    for (let listing of initData) {

        const geoData = await geocoder.geocode(
        `${listing.location}, ${listing.country}`
        );

        // check if geocoder returns data
        if (geoData.length > 0) {
            listing.geometry = {
                type: "Point",
                coordinates: [
                geoData[0].longitude,
                geoData[0].latitude
                ]
            };
        }

        // listing.owner = new mongoose.Types.ObjectId("69a3bb98b7b984d430534a4e");
        listing.owner = new mongoose.Types.ObjectId("69ad05b0332742b44c0d14e6");


        // add delay (VERY IMPORTANT)
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    await Listing.insertMany(initData);
    console.log("Data was initialized");
}

initDB();