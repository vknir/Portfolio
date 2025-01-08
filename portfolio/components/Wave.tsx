'use client'
import Image from "next/image";
import wave from '../assets/wavesOpacity.svg'
export default function Wave() {
  
    return (
        <div className="rotate-90">
        <Image  src={wave} alt={''}/>
        </div>
    );
 
}
