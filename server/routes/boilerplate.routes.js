const BoilerPlateController = require("../controllers/boilerplate.controller");


module.exports = app =>{
    app.get("/api/students", BoilerPlateController.findAllBoilerPlates)
    app.post("/api/students/create", BoilerPlateController.createBoilerPlate)
    app.get("/api/students/:id", BoilerPlateController.findOneBoilerPlate)
    app.put("/api/students/update/:id", BoilerPlateController.updateOneBoilerPlate)
    app.delete("/api/students/delete/:id", BoilerPlateController.deleteBoilerPlate)
}
