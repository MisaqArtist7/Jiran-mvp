import { Metadata } from "next";
export const metadata : Metadata = {
    title: 'Dashboard | Jiran',
    description: ''
}
export default function DashboardLayout( { children } : { children : React.ReactNode } ){
    return(
        <main>
            {children}
        </main>
    )
}