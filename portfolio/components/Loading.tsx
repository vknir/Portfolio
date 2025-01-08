'use client'
import Image from "next/image";
import load from '../assets/svg/motion-blur-2.svg'
export default function Loading(){
    return <Image src={load} alt='Loading..'></Image>
}