'use client';
import Link from "next/link";
import { BiSolidShow } from "react-icons/bi";
import axios from "axios";
import { useState, useEffect } from "react";


export default function ApartmentList () {
    const[apartments,setApartments] = useState([]);
    
    useEffect(() => {
        fetchApartments();
    },[]);

    const fetchApartments = () => {
        axios.get('http://localhost:8000/apartment/all')
            .then((response) => {
                setApartments(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            {apartments && 
            <>
                {apartments.map((a :any,index) => (
                <div
                key={a._id}
                className="p-4 border border-slate-300 my-3 mx-40 flex justify-between gap-5 items-center"
                >
                <div>
                    <h2 className="font-bold text-2xl">Apartment No. {index+1}</h2>
                    <div>Floor: {a.floor}</div>
                    <div>Block: {a.block}</div>
                </div>

                <div>
                    <Link href={`/Details/${a._id}`}>
                    <BiSolidShow  size={24} />
                    </Link>
                </div>
                </div>
            ))}
            </>}
        </>
    )
}