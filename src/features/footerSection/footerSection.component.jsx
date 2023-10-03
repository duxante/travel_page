import travel_logo from '../../assets/travel_logo.png';
import footer_image from '../../assets/footer_image.jpg';
import facebook from '../../assets/facebook.png';
import youtube from '../../assets/youtube.png';
import pinterest from '../../assets/pinterest.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import './footerSection.style.css';

const FooterSection = () => {
  return (
    <div className="footerSectionHolder">
      <div className="leftAndRight">
        <div className="leftSide">
          <img className="logo" src={travel_logo} alt="logo" />
          <img className="footer" src={footer_image} alt="footer" />
        </div>
        <div className="rightSide">
          <div className="oneColumn">
            <p>PRODUCTS:</p>
            <ul>
              <li>Download the app</li>
              <li>Travel Buddy</li>
              <li>Travel Buddy Pro</li>
              <li>Travel Buddy for teams</li>
              <li>Help center</li>
            </ul>
          </div>
          <div className="oneColumn">
            <p>NEWS & RESOURCES:</p>
            <ul>
              <li>Blog</li>
              <li>Press</li>
              <li>Jobs</li>
              <li>User Agreements</li>
              <li>Privacy policy</li>
              <li>Security</li>
              <li>Cookie preferences</li>
            </ul>
          </div>
          <div className="oneColumn">
            <p>PARTNERS:</p>
            <ul>
              <li>Developer API</li>
              <li>Supported booking sites</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="socialNetworkIcons">
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={twitter} alt="twitter logo" />
        <img src={youtube} alt="youtube logo" />
        <img src={pinterest} alt="pinterest logo" />
      </div>
      <p>©2023 Spomenko. All rights reserved.</p>
    </div>
  );
};

export default FooterSection;
