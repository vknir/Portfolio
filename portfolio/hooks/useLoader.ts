'use client'
import { useState, useEffect } from "react"

export default function useLoader(duration : number){
    const [time, setTime]=useState(true)
    
    useEffect(()=>{
        const timer= setTimeout(()=>setTime(false), duration * 1000)
        return ()=>clearTimeout(timer)
    },[duration])
    
    return time
}