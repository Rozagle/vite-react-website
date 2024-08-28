import {Route,Routes} from 'react-router-dom';
import { Navbar, Hero, RequirementExpertise, Client, ContactUs, Footer, OurExpertise, About, Teams, ChangingNeed, ScrollUpBtn } from './Components/Imports';
import PrivacyPolicy from './Pages/PolicyPrivacy';
function App() {

  return (
<>
      <ScrollUpBtn />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <ChangingNeed />
            <RequirementExpertise />
            <About />
            <OurExpertise />
            <Client />
            <Teams />
            <ContactUs />
            <Footer />
          </>
        } />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} /> 
        <Route path="*" element={<PrivacyPolicy />} /> 
      </Routes>
    </>
  );
}

export default App;
