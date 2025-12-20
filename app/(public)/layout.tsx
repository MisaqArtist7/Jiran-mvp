import { Metadata } from "next"
import HeaderComponent from "@/src/components/shared/Header/Header"
export const metadata : Metadata = {
    title: 'Home | Jiran'
}
export default function HomePageLayout({ children } : { children: React.ReactNode }){
    return (
        <main>
            <HeaderComponent />
            {children}
        </main>
    )
}