import { useEffect } from "react";
import { Blank } from "../blank.tsx";
import { About } from "./About/about.tsx";
import { Below } from "./Below/below";
import { EventGallery } from "./Event/event";
import { Footer } from "./Footer/footer";
import { Hero } from "./Hero/hero";
import { Impact } from "./Impact/impact";
import { Management } from "./Management/management";
import { Mission } from "./Mission/mission";
import { Navbar } from "./Navbar/navbar";
import { Newsletter } from "./Newsletter/newsletter";
import { Raise } from "./Youths/raise.tsx";
import { EventsForFCMF } from "./Events/events.tsx";


export const Home = () => {
    useEffect(() => {
        document.title = "First Class Muslim Foundation || Home"
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <Raise />
            <Blank />
            <About />
            <Blank />
            <Mission />
            <Blank />
            <Management />
            <Blank />
            <EventGallery />
            <EventsForFCMF />
            <Blank />
            <Impact />
            <Blank />
            <Newsletter />
            <Below />
            <Footer />
        </div>
    )
}