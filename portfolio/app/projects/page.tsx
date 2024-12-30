'use client'
import ProjectCard from "@/components/ProjectCard"
import useScreenSize from "@/hooks/useScreenSize"
export default function Projects(){
    const screen = useScreenSize('(min-width:1024px)')
    
    if(screen){
       
    }
    else{
        return<div className="h-full w-full p-14 flex flex-col items-center "> <ProjectCard projectNo={1} github="aoao" live="aaa" description="aaa" img="aaaa" stack="aaaj"/></div>
    }
}