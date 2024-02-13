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
    link: "https://www.linkedin.com/in/dionbiancha/",
  },
  {
    icon: <PiMediumLogo />,
    link: "https://medium.com/@dion.biancha",
  },
  {
    icon: <PiBehanceLogoLight />,
    link: "https://www.behance.net/dioneibianchati",
  },
];

function About() {
  const { onFocus, isSmallScreen } = usePreview();

  return (
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        opacity: onFocus === "about" ? 1 : 0.1,
      }}
    >
      <Card title="`${sobre}`" id="about">
        <div
          className={`flex ${
            isSmallScreen ? "flex-col items-center text-center" : "flex-row"
          } justify-between`}
        >
          <img
            alt="foto de perfil"
            style={{
              height: isSmallScreen ? "150px" : "200px",
              width: isSmallScreen ? "150px" : "200px",

              borderRadius: "5px",
              marginRight: isSmallScreen ? "" : "20px",
              filter: "grayscale(100%)",
            }}
            src="me.png"
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
                justifyContent: isSmallScreen ? "center" : "",
                marginTop: "20px",
              }}
            >
              {SOCIAL.map((value, key) => (
                <SocialButton key={key} icon={value.icon} link={value.link} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default About;
