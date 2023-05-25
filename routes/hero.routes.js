module.exports = rs => {
    const router = require("express").Router();
    const controller = require("../controller/hero.controller")


    router.post('/addHero', controller.create); // ADD HERO

    router.get('/', controller.getAll); // GET ALL HERO

    router.get('/:id', controller.getOne); // GET  1 HERO

    router.delete('/', controller.deleteAll); // DELETE ALL HERO

    router.put('/:id', controller.update)// UPDATE 1 HERO

    router.delete('/:id', controller.deleteOne); // DELETE 1 HERO

    rs.use('/v1/heros',router)  // ROOT END POINT
}