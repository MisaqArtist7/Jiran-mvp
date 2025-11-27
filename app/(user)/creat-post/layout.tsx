import { Metadata } from "next"
export const metadata : Metadata = {
    title: 'creat post : Jiran',
    description: ''
}
export default function CreatPostLayout( {children} : {children : React.ReactNode} ){
    return(
        <main>
            {children}
        </main>
    )
}