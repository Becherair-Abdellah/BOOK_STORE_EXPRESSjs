'use client'
import { useEffect } from 'react'
const authToken = localStorage.getItem("authToken");
if(!authToken){
  window.location.href = '/signin';
}
// import { useRouter } from 'next/router';
export default function Home() {
  

  return (
    <>
    main page
    </>
  )
}

