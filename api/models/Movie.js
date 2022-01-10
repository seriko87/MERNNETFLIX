const mongoose = require('mongoose');

const MovieScema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    ageRating: { type: String },
    genre: { type: String },
    isHD: { type: Boolean, default: true },
    isSeries: { type: Boolean, default: false },
    match: { type: Boolean, default: true },
    duration: { type: Number },
    totalSeason: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', MovieScema);
