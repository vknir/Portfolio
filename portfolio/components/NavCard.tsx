'use client'
import { ToggleContext} from '@/components/NavListToggle'
import { useContext } from "react"
export default function NavCard(){
    const {toggle, setToggle }=useContext(ToggleContext)
    console.log(toggle)
    if( toggle){
        return <div className='w-screen h-screen bg-white'></div>
    }
    else
        return <div className='w-screen h-screen bg-red-500'></div>
}