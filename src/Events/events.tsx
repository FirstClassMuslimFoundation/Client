import { useEffect } from "react"
import { Below } from "../Page/Below/below"
import { Footer } from "../Page/Footer/footer"
import { Navbar } from "../Page/Navbar/navbar"
import { EventsHero } from "./hero"
import { EventLayout } from "./layout"
import { NextDonate } from "./next"

export const EventsPage = () => {
    useEffect(() => {
        document.title = "First Class Muslim Foundation || Events"
    })
    return (
        <div>
            <Navbar />
            <EventsHero />
            <EventLayout />
            <NextDonate />
            <Below />
            <Footer />
        </div>
    )
}