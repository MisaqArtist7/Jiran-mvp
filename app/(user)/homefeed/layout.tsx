import { Metadata } from "next"

export const metadata : Metadata = {
    title: 'Home feed | Jiran',
    description: ''
}
export default function HomeFeedLayout({children} : {children : React.ReactNode}){
    return(
        <main>
            {children}
        </main>
    )
}