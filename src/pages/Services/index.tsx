import Card from "../../components/Card";
import "../../App.css";
import { FaFigma } from "react-icons/fa";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { RiCodeView } from "react-icons/ri";
import { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { FaArrowRight } from "react-icons/fa6";
import { usePreview } from "../../context/DataContext";

const SERVICES = [
  {
    icon: (
      <FaFigma style={{ width: "40px", height: "40px", color: "#899bff" }} />
    ),
    title: "UI Design",
    text: "Criação de designs visuais atraentes e funcionais que proporcionam uma experiência de usuário excepcional em produtos ou serviços digitais, tornando a usabilidade intuitiva e mantendo a identidade de marca consistente.",
    filters: [],
  },
  {
    icon: (
      <RiCodeView style={{ width: "40px", height: "40px", color: "#899bff" }} />
    ),
    title: "Web",
    text: "Foco no desenvolvimento de alto desempenho e escalabilidade, entregando soluções web personalizadas para sua empresa.",
    filters: ["Web"],
  },
  {
    icon: (
      <TbDeviceMobileMessage
        style={{ width: "40px", height: "40px", color: "#899bff" }}
      />
    ),
    title: "Mobile",
    text: "Soluções inovadoras e personalizadas em aplicativos móveis, desde a ideia até a publicação na loja de aplicativos, garantindo uma experiência de usuário intuitiva e atraente.",
    filters: [],
  },
];

interface AreaProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  filters: string[];
}

function Area({ icon, title, text, filters }: AreaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { setFilter, onFocus, isSmallScreen } = usePreview();

  return (
    <div
      onMouseEnter={() => onFocus === "services" && setIsHovered(true)}
      onMouseLeave={() => onFocus === "services" && setIsHovered(false)}
      className={`border rounded-md  ${
        isHovered ? "shadow-neon-blue" : "border-[#111111]"
      }`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: isSmallScreen ? "70%" : "90%",
        height: isSmallScreen ? "280px" : "200px",
        backgroundColor: "#111111",
        padding: "20px",
        cursor: onFocus === "services" ? "pointer" : "",
        margin: "8px",
      }}
    >
      <div>
        {icon}
        <h2
          style={{
            marginBottom: "5px",
            marginTop: "15px",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          {title}
        </h2>
      </div>
      <p style={{ color: "#9ca3af", fontSize: "10px" }}>{text}</p>
      <div
        onClick={() => setFilter(filters)}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "#899bff",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "10px",
        }}
      >
        <p>Projetos</p>
        <FaArrowRight />
      </div>
    </div>
  );
}

const responsive = {
  0: {
    items: 1,
  },
  568: {
    items: 1,
  },
  1024: {
    items: 2,
  },
};

function Services() {
  const carouselRef = useRef<AliceCarousel>(null);
  const nullRef = useRef(null);
  const { onFocus } = usePreview();

  return (
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        marginTop: "50px",
        opacity: onFocus === "services" ? 1 : 0.1,
      }}
    >
      <Card title="`${serviços}`" id="services">
        <AliceCarousel
          ref={onFocus === "services" ? carouselRef : nullRef}
          responsive={responsive}
          infinite
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={SERVICES.map((value) => (
            <Area
              icon={value.icon}
              title={value.title}
              text={value.text}
              filters={value.filters}
            />
          ))}
        />
      </Card>
    </div>
  );
}

export default Services;
