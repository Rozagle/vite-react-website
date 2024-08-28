

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { Navbar, Hero, RequirementExpertise, Client, ContactUs, Footer, OurExpertise, About, Teams, ChangingNeed, ScrollUpBtn } from './components/Imports';
// import PrivacyPolicy from './Pages/PolicyPrivacy';




function App() {
  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => { console.log(data) })
  //     .catch((error) => console.error('Error:', error));
  // }, []);

  return (
    <>
      <ScrollUpBtn />
      <Navbar/>
      <Hero/>
      <ChangingNeed />
      <RequirementExpertise/>
      <OurExpertise/>
      <About/>
      <Client/>
      <Teams/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
