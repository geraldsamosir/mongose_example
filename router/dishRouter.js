/**
   * @swagger
   * tags:
   *   name: Dishes
   *   description: Dishes rest api
*/
const express = require("express")
const router =  express.Router() 
const dishesController =  require("../controller/dishController")


/**
   * @swagger
   * /dishes/{id}:
   *   get:
   *     description: Returns the homepage
   *     tags: [Dishes]
   *     consumes:
   *     - application/json 
   *     produces:
   *     - application/json 
   *     parameters:
   *     - in: path
   *       name: id
   *       type: string
   *     responses:
   *       200:
   *         description: success
   *         schema:
   *          type: object
   *          properties:
   *            statuscode:
   *               type: integer
   *            result:
   *               schema:
   *               type: array
   *               items:
   *                   properties:
   *                     dishes_id:
   *                      type: string
   *                     dishes_name:
   *                      type: string
   *                     created_date:
   *                      type: string
   *                     is_active:
   *                       type: string
   *       404:
   *         description: notfound
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string
   *       400:
   *         description: bad request or validation error
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string 
   *            validationdata:
   *             type: object
   *             properties:
   *               mongovalidation: 
   *                type:object 
   *       500:
   *         description: server error
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string                         
   */
  router.get("/:id",dishesController.get)    


  /**
   * @swagger
   * /dishes:
   *   post:
   *     tags: [Dishes]
   *     description: Returns the homepage
   *     consumes:
   *     - application/x-www-form-urlencoded 
   *     produces:
   *     - application/json 
   *     parameters:
   *     - in: formData
   *       name: dishes_name
   *       type: string
   *       required: true
   *     - in: formData
   *       name: created_date
   *       description: change format example be like this 2017-07-21 17:32:28 for testing in this sendbox, if empty default server time 
   *       format: date-time
   *       default: 2017-07-21 17:32:28
   *       type: string
   *     - in: formData
   *       name: is_active
   *       type: boolean
   *       required: true  
   *     responses:
   *       201:
   *         description: success
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string
   *       400:
   *         description: bad request or validation error
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string 
   *            validationdata:
   *             type: object
   *             properties:
   *               mongovalidation: 
   *                type:object      
   *       500:
   *         description: server error
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string
   *            validationdetail:
   *              type: object             
   */
  router.post("/",dishesController.create)
  

  /**
   * @swagger
   * /dishes/{id}:
   *   put:
   *     description: Returns the homepage
   *     tags: [Dishes]
   *     consumes:
   *     - application/x-www-form-urlencoded 
   *     produces:
   *     - application/json 
   *     parameters:
   *     - in: path
   *       name: id
   *       type: string
   *       required: true
   *     - in: formData
   *       name: dishes_name
   *       type: string
   *     - in: formData
   *       name: created_date
   *       description: change format example be like this 2017-07-21 17:32:28 for testing in this sendbox, if empty default server time 
   *       format: date-time
   *       default: 2017-07-21 17:32:28
   *       type: string
   *     - in: formData
   *       name: is_active
   *       type: boolean  
   *     responses:
   *       201:
   *         description: success
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string
   *       400:
   *         description: bad request or validation error
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string 
   *            validationdata:
   *             type: object
   *             properties:
   *               mongovalidation: 
   *                type:object      
   *       500:
   *         description: server error
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string
   *            validationdetail:
   *              type: object             
   */
  router.put("/:id",dishesController.update)
  
  
  /**
   * @swagger
   * /dishes/{id}:
   *   delete:
   *     description: delete disihes
   *     tags: [Dishes]
   *     consumes:
   *     - application/json 
   *     produces:
   *     - application/json 
   *     parameters:
   *     - in: path
   *       name: id
   *       type: string
   *     responses:
   *       200:
   *         description: success
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string 
   *       404:
   *         description: notfound
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string
   *       400:
   *         description: bad request or validation error
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string 
   *            validationdata:
   *             type: object
   *             properties:
   *               mongovalidation: 
   *                type:object  
   *       500:
   *         description: server error
   *         schema:
   *           type: object
   *           properties:
   *            statuscode:
   *             type: integer
   *            message:
   *             type: string                         
   */  
  router.delete("/:id",dishesController.delete)


  module.exports =  router