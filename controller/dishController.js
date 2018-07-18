const mongoose =  require("mongoose")
const joi  = require("joi")
const dishModel = require("../model/dishModel")
const base  =  require("./baseController")

let costum_id =  "dishes_id"

let validationcreated = joi.object().keys({
    dishes_name : joi.string().required(),
    created_date :  joi.string().isoDate(),
    is_active :  joi.boolean().required(),
})

let validationupdated = joi.object().keys({
    dishes_name : joi.string(),
    created_date :  joi.string().isoDate(),
    is_active :  joi.boolean(),
})

module.exports = new  class dishController extends base{
    constructor(){
        super(dishModel,validationcreated,validationupdated,costum_id)
    }
}