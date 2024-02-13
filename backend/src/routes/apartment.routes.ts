const router = require('express-promise-router')();
const ApartmentController = require('../controllers/apartment.controller');


router.post("/apartment/add", ApartmentController.addApartment);
router.get("/apartment/all", ApartmentController.allApartments);
router.get("/apartment/:id", ApartmentController.apartmentDetails);

export default router;