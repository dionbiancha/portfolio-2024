import Card from "../../components/Card";
import "../../App.css";
import { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { usePreview } from "../../context/usePreview";
import { FiExternalLink } from "react-icons/fi";

const PROJECTS = [
  {
    title: "Adaptour",
    text: "Projeto com o 2º Lugar na premiação geral no Hackatour Cataratas 2023, sendo este uma solução focada em acessibilidade a turistas portadores de PCD.",
    skills: ["Next", "Typescript", "Chakra UI", "Web"],
    link: "https://adaptour.teampolaris.tech/",
  },
  {
    title: "I Love Voucher",
    text: "Facilitando a vida de operadores de turismos padronizando a emissão de vouchers.",
    skills: ["React", "Typescript", "Chakra UI", "i18n", "Web"],
    link: "https://ilovevoucher.teampolaris.tech/",
  },
  {
    title: "Portfolio 2023",
    text: "Website utilizado como portfólio no ano de 2023.",
    skills: ["React", "Typescript", "i18n", "Web"],
    link: "https://portfolio-2023-dionbiancha.vercel.app/",
  },
];

interface AreaProps {
  link: string;
  title: string;
  text: string;
  skills: string[];
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

function Area({ title, text, skills, filter, setFilter, link }: AreaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { onFocus, isSmallScreen, setDisabledPageScrool } = usePreview();

  return (
    <div
      className={`border rounded-md duration-300 ${
        isHovered ? "shadow-neon-blue" : "border-[#111111]"
      }`}
      onMouseEnter={() => {
        setDisabledPageScrool(true);
        onFocus === "projects" && setIsHovered(true);
      }}
      onMouseLeave={() => {
        setDisabledPageScrool(false);
        onFocus === "projects" && setIsHovered(false);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: isSmallScreen ? "center" : "",
        width: isSmallScreen ? "70%" : "90%",
        maxWidth: "400px",
        height: isSmallScreen ? "280px" : "200px",
        backgroundColor: "#111111",
        padding: "20px",

        margin: "8px",
      }}
    >
      <div
        title="Clique para ver o projeto"
        onClick={() => window.open(link, "_blank")}
        style={{
          cursor: onFocus === "projects" ? "pointer" : "",
          display: "flex",
          flexDirection: "column",
          textAlign: isSmallScreen ? "center" : "left",
          alignItems: isSmallScreen ? "center" : "",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "5px",
          }}
        >
          <h2
            style={{
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            {title}
          </h2>
          <FiExternalLink style={{ marginLeft: "5px", width: "12px" }} />
        </div>

        <p style={{ color: "#9ca3af", fontSize: "10px" }}>{text}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: isSmallScreen ? "center" : "",
          flexWrap: "wrap",
        }}
      >
        {skills.map((value) => (
          <div
            title={
              filter.includes(value)
                ? "Clique para remover o filtro"
                : "Clique para aplicar o filtro"
            }
            onClick={() => {
              if (filter.includes(value)) {
                setFilter(filter.filter((item) => item !== value));
              } else {
                setFilter([...filter, value]);
              }
            }}
            className={`border duration-500  ${
              filter.includes(value)
                ? "border-[#899bff] bg-[#899bff] text-[#111111]"
                : "hover:text-[#899bff] hover:border-[#899bff] text-[#9ca3af] border-[#9ca3af]"
            }`}
            style={{
              display: "flex",
              padding: "3px 6px 3px 6px",
              marginRight: "10px",
              borderRadius: "5px",
              fontSize: "10px",
              fontWeight: 600,
              marginBottom: "5px",
              cursor: "pointer",
            }}
            key={value} // Adicionei uma chave única para cada elemento, necessário quando renderizando uma lista no React
          >
            {value}
          </div>
        ))}
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

function Projects() {
  const carouselRef = useRef<AliceCarousel>(null);
  const nullRef = useRef(null);
  const { filter, setFilter, onFocus, disabledPageScrool } = usePreview();

  useEffect(() => {
    if (disabledPageScrool) {
      const handleScroll = (e: WheelEvent) => {
        if (e.deltaY > 0) {
          carouselRef.current?.slideNext();
        } else {
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
        marginRight: "50px",
        opacity: onFocus === "projects" ? 1 : 0.1,
      }}
    >
      <Card title="`${projetos}`" id="projects">
        <AliceCarousel
          keyboardNavigation
          ref={onFocus === "projects" ? carouselRef : nullRef}
          responsive={responsive}
          infinite
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={PROJECTS.filter((project) => {
            if (filter.length === 0) {
              return true;
            }

            return filter.every((skill) => project.skills.includes(skill));
          }).map((project) => (
            <Area
              link={project.link}
              key={project.title}
              filter={filter}
              setFilter={setFilter}
              title={project.title}
              text={project.text}
              skills={project.skills}
            />
          ))}
        />
      </Card>
    </div>
  );
}

export default Projects;
