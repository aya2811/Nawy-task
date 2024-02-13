'use client';
import axios from "axios";
import { useState, useEffect } from "react";

export default function viewDetails({params} :any) {
    const[apartment,setApartment] = useState<any>([]);
    const { id } = params;
    
    useEffect(() => {
        fetchApartmentById(id);
    },[]);

    const fetchApartmentById = (id :string) => {
        axios.get(`http://localhost:8000/apartment/${id}`)
            .then((response) => {
                setApartment(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            {apartment && 
            <>
                <div
                key={apartment._id}
                className="p-4 border border-slate-300 my-3 mx-40 items-center"
                >
                <div>
                    <h2 className="font-bold text-2xl">Apartment Details</h2>
                    <div>Number: {apartment.number}</div>
                    <div>Floor: {apartment.floor}</div>
                    <div>Block: {apartment.block}</div>
                    <div>Street: {apartment.street}</div>
                    <div>District: {apartment.district}</div>
                    <div>City: {apartment.city}</div>
                </div>
                </div>
            
            </>}
     
        </>
    )
}