import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Auth from "./pages/Auth";
import AdvocateRegister from "./pages/AdvocateRegister";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";

import Dashboard from "./pages/Dashboard";
import AdvocateSearch from "./pages/AdvocateSearch";
import CaseStatus from "./pages/CaseStatus";
import FIRStatus from "./pages/FIRStatus";
import BareActs from "./pages/BareActs";
import Citations from "./pages/Citations";

import PetitionFormats from "./pages/PetitionFormats";

import AIAssistant from "./pages/AIAssistant";
import CaseManagement from "./pages/CaseManagement";
import InterimOrder from "./pages/InteriamOrderAndDecreed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/advocate-register" element={<AdvocateRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/advocate" element={<AdvocateSearch />} />
        <Route path="/case-status" element={<CaseStatus />} />
        <Route path="/fir-status" element={<FIRStatus />} />
        <Route path="/bare-acts" element={<BareActs />} />
        <Route path="/citations" element={<Citations />} />
        
        <Route path="/petition-formats" element={<PetitionFormats />} />
        
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/case-management" element={<CaseManagement />} />
        <Route path="/interim-order-and-decreed" element={<InterimOrder />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;