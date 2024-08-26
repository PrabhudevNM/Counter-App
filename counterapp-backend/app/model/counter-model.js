const mongoose= require('mongoose')
const { Schema, model}= mongoose

const counterSchema= new Schema({
    value: Number
})

const Counter=model('Counter',counterSchema)

module.exports= Counter