"use  client"
import { createContext, useContext, useEffect, useRef, useState } from "react";

const Context = createContext({} as { inView: boolean })

export function HeroIntersectionContextProvider({ children }: {
    children: React.ReactNode
})  {
    const [inView, setInView] = useState(true)
    useEffect(() => {
        const callback = (e:Event) => {
    if(window.scrollY > 150) {

        setInView(false)
        
    }   else {
     setInView(true)       
    }         
        }
        window.addEventListener("scroll", callback)
        return () => {
            removeEventListener("scroll", callback)
        }
    }, [])
    return (
        <Context.Provider value={{ inView }}>
            {children}
        </Context.Provider>
    )
}

export  function useHeroIntersectionContext() {
    return useContext(Context)
}