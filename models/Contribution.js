const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContributionSchema = new Schema({
    sourceChoice: {
        type: String
    },
    chapterTitle: {
        type: String,
        required: 'This chapter needs a title'
    },
    body: {
        type: String
    },
    pages: {
        type: Number
    },
    wordCount: {
        type: Number
    },
    rating: {
        type: String,
        required: 'Please enter a rating for this chapter'
    },
    author: {
        type: String
    },
    readerChoices: {
        type: Map,
        of: String
    },
    storyId: {
        type: Number
    }
})

const Contribution = mongoose.model("Contribution", ContributionSchema);

module.exports = Contribution;