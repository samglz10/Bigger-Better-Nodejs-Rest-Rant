const mongoose = require('mongoose')
const {Schema} = mongoose

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min:[1673, 'Surely not that old!'],
    max: [new Date().getFullYear(), 'Hey, this is in the future!']
    },
    comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function () {
        return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.` 
}

const Place = mongoose.model('Place',placeSchema)
module.exports = Place