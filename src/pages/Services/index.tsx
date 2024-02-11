import Card from "../../components/Card";
import "../../App.css";
import { FaFigma } from "react-icons/fa";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { RiCodeView } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
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
  const { setFilter, onFocus, isSmallScreen, setDisabledPageScrool } =
    usePreview();

  return (
    <div
      title={`Clique para ver projetos ${title}`}
      onClick={() => setFilter(filters)}
      onMouseEnter={() => {
        setDisabledPageScrool(true);
        onFocus === "services" && setIsHovered(true);
      }}
      onMouseLeave={() => {
        setDisabledPageScrool(false);
        onFocus === "services" && setIsHovered(false);
      }}
      className={`border rounded-md  duration-300 ${
        isHovered ? "shadow-neon-blue" : "border-[#111111]"
      }`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isSmallScreen ? "center" : "",
        justifyContent: "space-between",
        width: isSmallScreen ? "70%" : "90%",
        height: isSmallScreen ? "280px" : "200px",
        backgroundColor: "#111111",
        padding: "20px",
        cursor: onFocus === "services" ? "pointer" : "",
        margin: "8px",
      }}
    >
      <div
        style={
          isSmallScreen
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }
            : {}
        }
      >
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
      <p
        style={{
          color: "#9ca3af",
          fontSize: "10px",
          textAlign: isSmallScreen ? "center" : "left",
        }}
      >
        {text}
      </p>
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
  const nullRef = useRef<AliceCarousel>(null);
  const { onFocus, disabledPageScrool } = usePreview();

  useEffect(() => {
    if (disabledPageScrool) {
      const handleScroll = (e: WheelEvent) => {
        if (e.deltaY > 0) {
          // Scroll down, move to the next slide
          carouselRef.current?.slideNext();
        } else {
          // Scroll up, move to the previous slide
          carouselRef.current?.slidePrev();
        }
      };

      document.addEventListener("wheel", handleScroll);

      return () => {
        document.removeEventListener("wheel", handleScroll);
      };
    }
  }, [disabledPageScrool]);

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
          keyboardNavigation
          infinite
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={SERVICES.map((value) => (
            <Area
              key={value.title}
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
