import Card from "./Card";
import {
  faEnvelope,
  faMapMarkerAlt,
  faMobileAndroidAlt,
} from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
  return (
    <div className="container">
      <div className="intro">
        <h1>Call us or visit place</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="card-sections">
        <Card
          icon={faMobileAndroidAlt}
          title={"Phone:"}
          content={
            <>
              + 44 123 456 78 90 <br />+ 844 123 444 77 88
            </>
          }
        />
        <Card
          icon={faMapMarkerAlt}
          title={"Address:"}
          content={
            "box 565, Pinney's Beach, Charlestown, Nevis, West Indies, Caribbean"
          }
        />
        <Card
          icon={faEnvelope}
          title={"Email:"}
          content={
            <>
              contact@example.com <br /> info@example.com
            </>
          }
        />
      </div>
    </div>
  );
}

export default ContactInfo;
