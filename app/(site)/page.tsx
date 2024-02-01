'use client'
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Hero from "@/components/Hero/Hero";



export default function Home() {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <>
    <Navbar/>
    <Hero/>
    
    </>
  );
}
