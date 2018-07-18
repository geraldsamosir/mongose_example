const mongoose =  require("mongoose")
const joi  = require("joi")
const leaderModel = require("../model/leaderModel")
const base  =  require("./baseController")

let costum_id =  "leadership_id"

let validationcreated = joi.object().keys({
    leadership_name : joi.string().required(),
    created_date :  joi.string().isoDate(),
    is_active :  joi.boolean().required(),
})

let validationupdated = joi.object().keys({
    leadership_name : joi.string(),
    created_date :  joi.string().isoDate(),
    is_active :  joi.boolean(),
})

module.exports = new  class leaderController extends base{
    constructor(){
        super(leaderModel,validationcreated,validationupdated,costum_id)
    }
}