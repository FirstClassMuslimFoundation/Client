import { Below } from "../Page/Below/below"
import { Footer } from "../Page/Footer/footer"
import { Navbar } from "../Page/Navbar/navbar"
import { DetailsDonate } from "./details"
import { DonateHero } from "./hero"
import { KindDonate } from "./kind"

export const DonatePage = () => {
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