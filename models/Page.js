const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
    images: {
        type: Map,
        of: String
    },
    soundFiles: {
        type: Map,
        of: String
    },
    wordCount: {
        type: Number
    },
    chapterId: {
        type: Number
    }
})

const Page = mongoose.model("Page", PageSchema);

module.exports = Page;