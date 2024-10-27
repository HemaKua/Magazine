import React from 'react'
// import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Magazines() {
  const[magazine,setMagazine]=useState([])
  useEffect(() =>{
    const getMagazine=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/magazine");
        console.log(res.data);
        setMagazine(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMagazine();
  },[]);
  return (
    <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Make your business shine online with a custom clothing website
            designed just for you by a professional designer. Need ideas? We’ve
            collected some amazing examples of clothes and clothing websites
            from our global community of designers. Get inspired and start
            planning the perfect clothing web design today.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
          </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {magazine.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Magazines