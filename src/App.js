import Navigation from './features/navigation/navigation.component';
import HomeSection from './features/homeSection/homeSection.component';
import CentralBookingSection from './features/centralBookingSection/centralBookingSection.component';
import './App.css';
import TravelAppSection from './features/travelAppSection/travelAppSection.component';
import FooterSection from './features/footerSection/footerSection.component';

function App() {
  return (
    <>
      <Navigation/>
      <HomeSection/>
      <CentralBookingSection/>
      <TravelAppSection />
      <FooterSection />
    </>
  );
}

export default App;
