/**
   * @swagger
   * tags:
   *   name: Promotion
   *   description: Promotion rest api
*/
const express = require("express")
const router =  express.Router() 
const promotionController =  require("../controller/promotionController")



/**
   * @swagger
   * /promotions/{id}:
   *   get:
   *     description: Returns the homepage
   *     tags: [Promotion]
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
   *                properties:
   *                  promotions_id:
   *                    type: integer
   *                  promotions_name:
   *                    type: string
   *                  created_date:
   *                   type: string
   *                  is_active:
   *                   type: string
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
   router.get("/:id",promotionController.get)
   
   /**
   * @swagger
   * /promotions:
   *   post:
   *     description: Returns the homepage
   *     tags: [Promotion]
   *     consumes:
   *     - application/x-www-form-urlencoded 
   *     produces:
   *     - application/json 
   *     parameters:
   *     - in: formData
   *       name: promotions_name
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
  router.post("/",promotionController.create)
  
  /**
   * @swagger
   * /promotions/{id}:
   *   put:
   *     description: Returns the homepage
   *     tags: [Promotion]
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
   *       name: promotions_name
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
  router.put("/:id",promotionController.update)
  
  /**
   * @swagger
   * /promotions/{id}:
   *   delete:
   *     description: delete disihes
   *     tags: [Promotion]
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
  router.delete("/:id",promotionController.delete)

  module.exports = router