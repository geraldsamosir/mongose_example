const mongoose =  require("mongoose")
const joi  = require("joi")
const promotionModel = require("../model/promotionsModel")
const base  =  require("./baseController")

let costum_id =  "promotions_id"

let validationcreated = joi.object().keys({
    promotions_name : joi.string().required(),
    created_date :  joi.string().isoDate(),
    is_active :  joi.boolean().required(),
})

let validationupdated = joi.object().keys({
    promotions_name : joi.string(),
    created_date :  joi.string().isoDate(),
    is_active :  joi.boolean(),
})

module.exports = new  class promotionController extends base{
    constructor(){
        super(promotionModel,validationcreated,validationupdated,costum_id)
    }
}