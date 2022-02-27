import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/AboutSection";
import {infoObjectOne} from "../components/AboutSection/Data";
import Services from "../components/Reservations";
import Footer from "../components/Footer";
import AwardsSection from "../components/AwardsSection";
import ContactSection from "../components/ContactSection";
import ScrollToTop from "../components/ScrollToTopButton";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...infoObjectOne}/>
            <Services/>
            <AwardsSection/>
            <ContactSection/>
            <Footer/>
            <ScrollToTop/>
        </>
    )
}

export default Home;