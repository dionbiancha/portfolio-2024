import Card from "../../components/Card";
import "../../App.css";
import { FaFigma } from "react-icons/fa";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { RiCodeView } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { FaArrowRight } from "react-icons/fa6";
import { ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

const SERVICES = [
  {
    icon: (
      <FaFigma style={{ width: "40px", height: "40px", color: "#899bff" }} />
    ),
    title: "UI Design",
    text: "Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
  },
  {
    icon: (
      <RiCodeView style={{ width: "40px", height: "40px", color: "#899bff" }} />
    ),
    title: "Web",
    text: "Desenvolvo sites profissionais, portfólios e landing pages",
  },
  {
    icon: (
      <TbDeviceMobileMessage
        style={{ width: "40px", height: "40px", color: "#899bff" }}
      />
    ),
    title: "Mobile",
    text: "Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
  },
];

interface AreaProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Area({ icon, title, text }: AreaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`border rounded-md  ${
        isHovered ? "shadow-neon-blue" : "border-[#111111]"
      }`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "90%",
        height: "200px",
        backgroundColor: "#111111",
        padding: "20px",
        cursor: "pointer",
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
        onClick={() => {
          // const { zoomToElement } = transformComponentRef.current;
        }}
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

interface Props {
  onFocus: string;
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

function Services({ onFocus }: Props) {
  const carouselRef = useRef<AliceCarousel>(null);
  const nullRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event: any) => {
      const deltaY = event.deltaY;
      if (deltaY > 0) {
        carouselRef.current?.slideNext();
      } else if (deltaY < 0) {
        carouselRef.current?.slidePrev();
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <div
      style={{ marginTop: "50px", opacity: onFocus === "services" ? 1 : 0.1 }}
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
            <Area icon={value.icon} title={value.title} text={value.text} />
          ))}
        />
      </Card>
    </div>
  );
}

export default Services;
