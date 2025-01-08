import dynamic from 'next/dynamic'
const Aboutme =dynamic(()=>import('../../components/Aboutme'))

export default function Page(){
  return <Aboutme/>
}