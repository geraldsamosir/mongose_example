const mongoose = require('mongoose');
const schema =  require("../schema/promotionsSchema")

module.exports  = class promotionhModel  extends mongoose.model("promotions",schema,"promotions"){
    /**
     * here the class for costum some function if need it
     */
}
