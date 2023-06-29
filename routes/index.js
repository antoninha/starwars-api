import express from "express";
import Films from "../models/filmsModel.js"
import People from "../models/peopleModel.js"
import Planet from "../models/planetModel.js"
import Species from "../models/speciesModel.js"
import Starships from "../models/starshipsModel.js"
import Vehicles from "../models/vehiclesModel.js"

// FONCTION POUR TROUVER LE MODELE DE L'URL
function findModel(collection){

  const collections = {
    'films' : Films,
    'people' : People,
    'planet' : Planet,
    'species' : Species,
    'starships' : Starships,
    'vehicles' : Vehicles
  }

  for (const [key, value] of Object.entries(collections)) {
    if(key == collection){
      return value
    }
  }
}

const router = express.Router();

// READ ALL
router.get('/:collection', async (req, res) => {
  try {
    const collection = await findModel(req.params.collection).find()
    res.send(collection)
  } catch {
    res.status(404)
    res.send({ error: req.params.collection + " doesn't exist!" })
  }
})

// READ ONE
router.get('/:collection/:id', async (req, res) => {
  try {
    const collection = await findModel(req.params.collection).findOne({pk: req.params.id})
    res.send(collection)
  } catch {
    res.status(404)
    res.send({ error: "This " + req.params.collection + " doesn't exist!" })
  }
})

//CREATE
router.post('/:collection', async (req, res) => {
  console.log(req.body)
  const entity = new findModel(req.params.collection)({
    fields: {...req.body},
    model : 'ressource.' + req.params.collection,
    pk : (new Date).getTime()
  })
  await entity.save()
  res.send(entity)
})


//UPDATE
router.patch('/:collection/:id', async (req, res) => {
  try {
		const entity = await findModel(req.params.collection).findOne({ pk: req.params.id })

		if (req.body) {
			entity.fields = {...req.body}
		}

		await entity.save()
		res.send(entity)
	} catch {
		res.status(404)
		res.send({ error: "This " + req.params.collection + " doesn't exist!" })
	}
})

//DELETE
router.delete('/:collection/:id', async (req, res) => {
	try {
		await findModel(req.params.collection).deleteOne({pk: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "This " + req.params.collection + " doesn't exist!" })
	}
})
  export default router
