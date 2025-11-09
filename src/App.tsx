import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import EventDetails from "./components/EventDetails";

function App() {
  const [hashRoute, setHashRoute] = useState<string>(
    window.location.hash || ""
  );

  useEffect(() => {
    const onHash = () => setHashRoute(window.location.hash || "");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const isEventDetail = hashRoute.startsWith("#/events/");

  if (isEventDetail) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <EventDetails />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Team />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
