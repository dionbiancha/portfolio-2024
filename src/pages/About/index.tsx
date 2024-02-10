import Card from "../../components/Card";
import "../../App.css";
import SocialButton from "../../components/SocialButton";
import { SlSocialGithub } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { PiBehanceLogoLight } from "react-icons/pi";
import { PiMediumLogo } from "react-icons/pi";
import { usePreview } from "../../context/DataContext";

const SOCIAL = [
  {
    icon: <SlSocialGithub />,
    link: "https://github.com/dionbiancha",
  },
  {
    icon: <CiLinkedin />,
    link: "https://github.com/dionbiancha",
  },
  {
    icon: <PiMediumLogo />,
    link: "https://github.com/dionbiancha",
  },
  {
    icon: <PiBehanceLogoLight />,
    link: "https://github.com/dionbiancha",
  },
];

function About() {
  const { onFocus, isSmallScreen } = usePreview();

  return (
    <div
      style={{
        opacity: onFocus === "about" ? 1 : 0.1,
      }}
    >
      <Card title="`${sobre}`" id="about">
        <div
          className={`flex ${
            isSmallScreen ? "flex-col" : "flex-row"
          } justify-between`}
        >
          <img
            style={{
              height: isSmallScreen ? "150px" : "200px",
              width: isSmallScreen ? "150px" : "200px",
              borderRadius: "5px",
              marginRight: "20px",
              filter: "grayscale(100%)",
            }}
            src="me.jpg"
          />
          <div>
            <h2
              style={{
                fontWeight: 600,
                fontSize: "15px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              Dionei Bianchati
            </h2>
            <h3
              style={{
                color: "#899bff",
                fontWeight: 600,
                fontSize: "10px",
                marginBottom: "15px",
              }}
            >
              Frontend Developer & UI Designer
            </h3>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "10px",
              }}
            >
              Com mais de 3 anos de experiência em desenvolvimento web (ReactJS
              | NextJS) atuei em aplicações internacionais que impactaram uma
              carteira exponencial com mais de 6 milhões de clientes.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              {SOCIAL.map((value) => (
                <SocialButton icon={value.icon} link={value.link} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default About;
