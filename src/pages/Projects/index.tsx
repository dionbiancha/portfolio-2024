import Card from "../../components/Card";
import "../../App.css";
import { MdDevices } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { MdOutlineTour } from "react-icons/md";
import { LuTicket } from "react-icons/lu";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const PROJECTS = [
  {
    icon: (
      <MdOutlineTour
        style={{ width: "40px", height: "40px", color: "#899bff" }}
      />
    ),
    title: "Adaptour",
    text: "Projeto ajuda a solucionar a dor de um grupo de turistas aonde se precisam de acessbilidade.",
    skills: ["Next", "Typescript", "Chakra UI"],
  },
  {
    icon: (
      <LuTicket style={{ width: "40px", height: "40px", color: "#899bff" }} />
    ),
    title: "I Love Voucher",
    text: "Facilitando a vida de operadores de turismos padronizando a emissão de vouchers.",
    skills: ["Next", "Typescript", "Chakra UI"],
  },
  {
    icon: (
      <MdDevices style={{ width: "40px", height: "40px", color: "#899bff" }} />
    ),
    title: "Portfolio 2023",
    text: "Website turilizado como portfólio no ano de 2023",
    skills: ["Next", "Typescript", "Chakra UI"],
  },
];

interface AreaProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  skills: string[];
}

function Area({ icon, title, text, skills }: AreaProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`border rounded-md duration-300 ${
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

        <p style={{ color: "#9ca3af", fontSize: "10px" }}>{text}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {skills.map((value) => (
          <div
            style={{
              display: "flex",
              padding: "3px 6px 3px 6px",
              marginRight: "10px",
              borderRadius: "5px",
              border: "1px solid #9ca3af",
              color: "#9ca3af",
              fontSize: "10px",
              fontWeight: 600,
            }}
          >
            {value}
          </div>
        ))}
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

function Projects({ onFocus }: Props) {
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
      style={{ marginRight: "50px", opacity: onFocus === "projects" ? 1 : 0.1 }}
    >
      <Card title="`${projetos}`" id="projects">
        <AliceCarousel
          ref={onFocus === "projects" ? carouselRef : nullRef}
          responsive={responsive}
          infinite
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={PROJECTS.map((value) => (
            <Area
              icon={value.icon}
              title={value.title}
              text={value.text}
              skills={value.skills}
            />
          ))}
        />
      </Card>
    </div>
  );
}

export default Projects;
