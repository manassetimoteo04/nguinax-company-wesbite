import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./ui/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import AppContexts from "./contexts/AppContexts";

function App() {
  return (
    <AppContexts>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/testimonials" element={<Testimonials />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContexts>
  );
}

export default App;
