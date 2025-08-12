
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  city: string;
  street: string;
  zipcode: string;
  geo: Geo;
};

type Membre = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};

function DetailFamille() {
    let { userId}=useParams();
    const [membre,useMembre]=useState <Membre>()
    const getFamille=async ()=>{ 
        const res= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data=await res.json();
        useMembre(data)  
     }
     useEffect(()=>{getFamille()} ,[])

  return (
    <section>
         <div>DetailFamille</div>
   {/* component*/} 
<div className="flex min-h-screen items-center justify-center">
  <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
      <img
    
        src={`https://i.pravatar.cc/150?img=${userId}`} 
        alt="image"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-6">
      <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
        Membre de la famille
      </h6>
      <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        { membre?.name}
      </h4>
      <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        Like so many organizations these days, Autodesk is a company in
        transition. It was until recently a traditional boxed software company
        selling licenses. Yet its own business model disruption is only part of
        the story
      </p>
      <p>
        <span className='text-blue-600  font-bold'>Address</span> :
        <span>{membre?.address.city}</span>
      </p>
      <a className="inline-block" href={`mailto:${membre?.email}`}>
        <button
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          { membre?.email}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </a>
    </div>
  </div>
  {/* stylesheet*/}  
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
  />
</div>
<div className="flex items-center justify-center">
    <div className="text-sm text-gray-700 py-1">
        Made with <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
    </div>
</div>
    </section>
   
  )
}

export default DetailFamille