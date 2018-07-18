const mongoose =  require("mongoose")
const joi  = require("joi")

module.exports =    class baseController {
    constructor(_model,_validationcreated,_validationupdated,_costum_id){
        this._model =  _model
        this.validationcreated =  _validationcreated
        this.validationupdated =  _validationupdated
        this.costum_id  =  _costum_id
        this.get = this.get.bind(this)
        this.create =  this.create.bind(this)
        this.update =  this.update.bind(this)
        this.delete =  this.delete.bind(this)

    }
    async get(req,res){
        let validationMongoseId = mongoose.Types.ObjectId.isValid(req.params.id)
        if(validationMongoseId){
            let _id = req.params.id
            
            let result =  {}
            try {
                
                result = await this._model.find({_id:_id})
            } catch (error) {
                res.status(500)
                res.json({
                    statuscode:500,
                    message : error.name+","+error.message
                })
                res.end()
            }
            res.status((result.length >0 ? 200:404))
            res.json(
                (result.length >0 )?
                    {
                        statuscode:200,
                        result: result
                    }:
                    {
                        statuscode:404,
                        message:"data not found"
                    }
            )
            res.end()
        }
        else{
            res.status(400)
            res.json({
                statuscode : 400,
                message: "Object id invalid",
                validationdata :{
                    mongovalidation : validationMongoseId,
                    validationdata : {}
                }
            })
            res.end()
        }   
    }

    async create(req,res){
        let data =  req.body
        let validationschema = this.validationcreated
        let validationdata  = joi.validate(data,validationschema)
        if(validationdata.error == null){
            data = Object.assign(data,{_id:mongoose.Types.ObjectId()})
            data[String(this.costum_id)] =  data._id
            data =  new this._model(data)
            let result ={}
            try {
                result   = await data.save()    
            } catch (error) {
                res.status(500)
                res.json({
                    statuscode:500,
                    message : error.name+","+error.message
                })
                res.end()
            }
            
            res.status(201)
            res.json({
                statuscode:201,
                message :"data created"
            })
            res.end()
        
        }
        else{
            res.status(400)
            res.json({
                statuscode:400,
                message : "validation false",
                validationdata :{
                    mongovalidation : {},
                    validationdata : validationdata
                }
            })
            res.end()
        }
        
    }

    async update (req,res){
        let id  =  req.params.id
        let data = req.body
        let validationMongoseId = mongoose.Types.ObjectId.isValid(id)
        let validationschema = this.validationupdated
        let validationdata  = joi.validate(data,validationschema) 
        if(validationMongoseId && validationdata.error == null){
            let result = {}
            try {
                result =  await this._model.findByIdAndUpdate(id,{$set:data},{ new: true }).exec()
            } catch (error) {
                res.status(500)
                res.json({
                    statuscode:500,
                    message : error.name+","+error.message
                })
                res.end()           
            }
            res.status((result != null)?200:400)
            res.json((result != null)?
            {
                statuscode:200,
                message :"data updated"
            }:
            {
                statuscode:400,
                message :"cannot update data , id not found",
                validationdata :{
                    mongovalidation : validationMongoseId,
                    validationdata : validationdata
                }
            })
            res.end()
        }
        
        else{
            res.status(400)
            res.json({
                statuscode :400,
                message :"validation false",
                validationdetail:{
                    mongovalidation : validationMongoseId,
                    validationdata : validationdata
                }
            })
        }

    }

    async delete (req,res){
        let validationMongoseId = mongoose.Types.ObjectId.isValid(req.params.id)
        if(validationMongoseId){
            let _id = req.params.id
            let result =  {}
            try {
                result = await this._model.findByIdAndRemove(_id,{}).exec()
            } catch (error) {
                console.log(error)
                res.status(500)
                res.json({
                    statuscode:500,
                    message : error.name+","+error.message
                })
                res.end()
            }
            res.status((result != null)?200:400)
            res.json((result != null)?
            {
                statuscode:200,
                message :"data deleted"
            }:{
                statuscode:400,
                message :"cannot delete data , id not found",
                validationdata :{
                    mongovalidation : validationMongoseId,
                    validationdata : {}
                }
            })
            res.end()
        }
        else{
            res.status(400)
            res.json({
                statuscode : 400,
                message: "Object id invalid",
                validationdata :{
                    mongovalidation : validationMongoseId,
                    validationdata : {}
                }
            })
            res.end()
        }
    }
}