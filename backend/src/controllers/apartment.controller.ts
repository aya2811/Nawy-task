import { Request, Response, query } from "express";
import Apartment from "../models/apartment.model";

const allApartments = async(req: Request, res: Response) => {
  const apartments = await Apartment.find({});
  if(!apartments){
    res.status(400);
  }
  res.status(200).json(apartments);
};

const apartmentDetails = async (req: Request, res: Response) => {
    const apartmentId = req.params.id;
    const apartment = await Apartment.findById(apartmentId, "number floor block street district city");

    if (!apartment) {
      res.status(400);
    }

    res.status(200).json(apartment);

};

const addApartment = async (req: Request, res: Response) => {
    const {number,floor,block,street,district,city} = req.body;
    
    const apartment = await Apartment.create({
        number,
        floor,
        block,
        street,
        district,
        city
      });
    
      if (apartment) {
        res.status(201).json({
          id: apartment._id,
          number: apartment.number,
          floor: apartment.floor,
          block: apartment.block,
          street: apartment.street,
          district: apartment.district,
          city: apartment.city
        });
      } else {
        res.status(400).json({ message: "An error occurred in creating the apartment" });
      }
};

export { allApartments, apartmentDetails, addApartment};
