import Button from "../../common/button/button.component";
import booking from "../../assets/booking.jpg";
import reminder from "../../assets/reminder.jpg";
import travel_app from "../../assets/travel_app.png";
import "./centralBookingSection.style.css";

const CentralBookingSection = () => {
    return(
    <div className="centralBookingSectionHolder">
        <div className="oneSection">
            <div className="textAndButton">
                <h2>You handle the booking, We'll take it from there</h2>
                <p>At our travel agency, we believe in seamless travel experiences. With our 'You handle the booking, We'll take it from there' approach, we put your travel worries to rest. Once you've made your booking, our dedicated team of experts will step in to ensure every detail of your journey is perfectly orchestrated, from accommodations to activities, leaving you free to relax and savor every moment of your adventure. Let us turn your plans into unforgettable memories.</p>
                <Button buttonText="Learn how it works!" />
            </div>
                <img src={booking} alt="person booking the travel" />
        </div>
            <hr />    
        <div className="oneSection">
                <img src={reminder} alt="person reading travel reminder on phone" />
            <div className="textAndButton">
                <h2>Helpful reminders/alerts so you never miss a beat</h2>
                <p>At our travel agency, we understand that the key to a stress-free journey is staying organized. That's why we offer helpful reminders and alerts to ensure you never miss a beat. From flight updates to packing lists and itinerary changes, we've got you covered. With our proactive approach, you can focus on making memories, while we handle the details, keeping you informed every step of the way.</p>
                <Button buttonText="More about Pro" />
            </div>
        </div>
            <hr />
        <div className="oneSection">
            <div className="textAndButton">
                <h2>Always know where to be and when</h2>
                <p>With our travel agency, you'll always know where to be and when, ensuring your trip is smooth and hassle-free. Our comprehensive itinerary management keeps you informed of every detail, from departure times to activity schedules. We provide real-time updates and reminders, so you can relax and enjoy your adventure with confidence. Leave the logistics to us, and never miss a moment of your travel experience.</p>
                <Button buttonText="Download the App" />
            </div>
                <img src={travel_app} alt="traveling application" />
        </div>
            <hr />
    </div>
    )
};

export default CentralBookingSection;