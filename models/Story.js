const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema({
title: {
    type: String,
    trim: true,
    required: 'Please title your work, this can be edited later'
},
author: {
    type: String,
    trim: true
},
originalChapters: {
    type: Map,
    of: String
},
contributedChapters: {
    type: Map,
    of: String
},
allowContributions: {
    type: Boolean,
    required: 'Would you like other authors to contribute to your work?'
},
requireContributionReview: {
    type: Boolean
},
contributors: {
    type: Map,
    of: String
},
themes: {
    type: Map,
    of: String
},
storyCreated: {
    type: Date,
    default: Date.now
}
})

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;