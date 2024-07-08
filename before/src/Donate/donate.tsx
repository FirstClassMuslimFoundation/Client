import { useEffect } from "react"
import { Below } from "../Page/Below/below"
import { Footer } from "../Page/Footer/footer"
import { Navbar } from "../Page/Navbar/navbar"
import { DetailsDonate } from "./details"
import { DonateHero } from "./hero"
import { KindDonate } from "./kind"

export const DonatePage = () => {
    useEffect(() => {
        document.title = "First Class Muslim Foundation || Donate"
    })
    return (
        <div>
            <Navbar />
            <DonateHero />
            <KindDonate />
            <DetailsDonate />
            <Below />
            <Footer />
        </div>
    )
}