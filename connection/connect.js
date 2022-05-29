const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(
    "mongodb+srv://Murali:murali@cluster0.8cbbp.mongodb.net/instaclone-4143?retryWrites=true&w=majority", () => {
    console.log("mongoose connected")
    });
}

module.exports = main;
