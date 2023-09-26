import './homeSection.style.css';
import travel_home_section_image from '../../assets/travel_home_section_image.jpg';

const HomeSection = () => {
  return (
    <div className="homeSectionHolder">
      <div className="homeSectionDescription">
        <h2>An easier trip, every time!</h2>
        <p>
          Embark on a journey like never before with our brand-new booking and
          travel website! Discover amazing destinations, find unbeatable deals,
          and plan your dream getaway all in one place. Sign up for free today
          and let your adventure begin!
        </p>
        <img src={travel_home_section_image} alt="table travel planing" />
      </div>
    </div>
  );
};

export default HomeSection;
