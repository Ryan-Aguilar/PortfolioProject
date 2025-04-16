import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import BioComponent from "./components/BioComponent";
import Experience from "./components/Experience";
import GreetingCard from "./components/GreetingCard";
import MyProjects from "./components/MyProjects";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import CopyEmailButton from './components/CopyEmailButton'; // ✅
import FooterPart from "./components/FooterPart";

function App() {
  return (
    <div>
      <Navbar />
      <GreetingCard />
      <Experience />
      <MyProjects />
      <Hobbies/>
      <BioComponent/>
      <Hero />
      <Contact/>
      <CopyEmailButton/>
      <FooterPart/>
    </div>
  );
}

export default App;
