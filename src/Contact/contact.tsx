import { useEffect } from "react"
import { Below } from "../Page/Below/below"
import { Footer } from "../Page/Footer/footer"
import { Navbar } from "../Page/Navbar/navbar"
import { ContactHero } from "./hero"
import { ContactLayout } from "./layout"
import { ContactMap } from "./map"

export const ContactsPage = () => {
    useEffect(() => {
        document.title = "First Class Muslim Foundation || Contact Us"
    })
    return (
        <div>
            <Navbar />
            <ContactHero />
            <ContactLayout />
            <ContactMap />
            <Below />
            <Footer />
        </div>
    )
}