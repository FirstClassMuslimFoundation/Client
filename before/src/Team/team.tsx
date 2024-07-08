import { NextDonate } from "../Events/next"
import { Below } from "../Page/Below/below"
import { Footer } from "../Page/Footer/footer"
import { Navbar } from "../Page/Navbar/navbar"
import { TeamHero } from "./hero"
import { TeamLayout } from "./layout"

export const TeamsPage = () => {
    return (
        <div>
            <Navbar />
            <TeamHero />
            <TeamLayout />
            <NextDonate />
            <Below />
            <Footer />
        </div>
    )
}