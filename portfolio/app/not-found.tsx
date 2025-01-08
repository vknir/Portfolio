'use client'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/"><span className='text-2xl text-white hover:cursor-pointer'>Home</span></Link>
    </div>
  )
}