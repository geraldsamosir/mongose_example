const mongoose = require('mongoose');
const schema =  require("../schema/dishSchema")

module.exports  = class dishModel  extends mongoose.model("Dishs",schema,"dishs"){
    /**
     * here the class for costum some function if need it
     */
}
