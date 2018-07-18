const mongoose = require('mongoose');
const schema =  require("../schema/leaderSchema")

module.exports  = class leaderhModel  extends mongoose.model("leadership",schema,"leadership"){
    /**
     * here the class for costum some function if need it
     */
}
