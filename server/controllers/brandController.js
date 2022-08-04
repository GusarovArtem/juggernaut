const {Brand} = require('../models/models')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res) {
        try {
            const {id} = req.params;

            await Brand.findOne({where:{id}})
                .then( async data => {
                    if(data) {
                        await Brand.destroy({where:{id}}).then(() => {
                            return res.json("Brand deleted");
                        })
                    } else {
                        return res.json("This brand doesn't exist");
                    }
                })
        } catch (e) {
            return res.json(e);
        }
    }

}

module.exports = new BrandController()