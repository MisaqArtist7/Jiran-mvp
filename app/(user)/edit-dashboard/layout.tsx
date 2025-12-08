import { Metadata } from "next"
export const metadata : Metadata = {
    title: 'Edit dashboard | Jiran',
    description: ''
}
export default function EditDashboardLayout({ children } : { children : React.ReactNode }) {
    return (
        <main>
            {children}
        </main>
    )
}