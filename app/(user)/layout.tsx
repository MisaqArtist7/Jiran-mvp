import React from "react";
import Header from "@/src/components/shared/Header/Header";
export default function UserLayout({ children } : { children : React.ReactNode }){
    return(
        <main>
            <Header /> 
            {children}
        </main>
    ) 
}