import Button from "../../common/button/button.component";
import travel_app_section_image from "../../assets/travel_app_section_image.jpg";
import "./travelAppSection.style.css";

const TravelAppSection = () => {
    return(
        <div className="travelAppSectionHolder">
            <div className="travelAppSection">
                <div className="travelAppSectionDescription">
                <h2>Try the travel App that keeps up with you!</h2>
                <p>Discover the ultimate travel companion with our travel app. Designed to keep up with your wanderlust, it offers seamless navigation, real-time updates, and personalized recommendations. Whether you're exploring a new city or embarking on a cross-country adventure, our app is your trusted guide.</p>
                <Button buttonText="Sign up For Free" />
            </div>    
            <img src={travel_app_section_image} alt="travel agency application" />
            </div>
        </div>
    )
}

export default TravelAppSection;