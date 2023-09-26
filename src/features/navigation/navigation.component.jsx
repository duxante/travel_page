import "./navigation.style.css";
import Button from "../../common/button/button.component";
import travel_logo from "../../assets/travel_logo.png";

const Navigation = () => {
    return(
        <div className="navigationHolder">
            <div className="navigation">
                <img src={travel_logo} alt="travel logo" />
        <div className="contactHolder">
            <p>Home</p>
            <p>About</p>
            <p>App</p>
            <Button
                buttonText="Sign Up for Free"
            />
        </div>
            </div>
        </div>
    )
}

export default Navigation;