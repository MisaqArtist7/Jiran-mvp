import React from "react";
import { Metadata } from "next";
export const metadata : Metadata = {
    title: '',
    description: ''
}
export default function HomeFeedLayout( {children} : {children : React.ReactNode} ){
    return(
        <main>
            {children}
        </main>
    )
}