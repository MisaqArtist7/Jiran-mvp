import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Jiran | sign up',
    description: ''
}

export default function RegisterLayout({ children } : { children: React.ReactNode }){
    return (
        <main>
            {children}
        </main>
    )
}