import Card from "../../components/Card";
import "../../App.css";
import { MdDevices } from "react-icons/md";
import { useRef, useState } from "react";
import { MdOutlineTour } from "react-icons/md";
import { LuTicket } from "react-icons/lu";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { usePreview } from "../../context/DataContext";

const PROJECTS = [
  {
    icon: (
      <MdOutlineTour
        style={{ width: "40px", height: "40px", color: "#899bff" }}
      />
    ),
    title: "Adaptour",
    text: "Projeto ajuda a solucionar a dor de um grupo de turistas aonde se precisam de acessbilidade.",
    skills: ["Next", "Typescript", "Chakra UI", "Web"],
  },
  {
    icon: (
      <LuTicket style={{ width: "40px", height: "40px", color: "#899bff" }} />
    ),
    title: "I Love Voucher",
    text: "Facilitando a vida de operadores de turismos padronizando a emissão de vouchers.",
    skills: ["React", "Typescript", "Chakra UI", "i18n", "Web"],
  },
  {
    icon: (
      <MdDevices style={{ width: "40px", height: "40px", color: "#899bff" }} />
    ),
    title: "Portfolio 2023",
    text: "Website turilizado como portfólio no ano de 2023",
    skills: ["React", "Typescript", "i18n", "Web"],
  },
];

interface AreaProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  skills: string[];
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

function Area({ icon, title, text, skills, filter, setFilter }: AreaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { onFocus } = usePreview();

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
        maxWidth: "400px",
        height: "200px",
        backgroundColor: "#111111",
        padding: "20px",
        cursor: onFocus === "projects" ? "pointer" : "",
        margin: "8px",
      }}
      onMouseEnter={() => onFocus === "projects" && setIsHovered(true)}
      onMouseLeave={() => onFocus === "projects" && setIsHovered(false)}
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
            onClick={() => {
              if (filter.includes(value)) {
                setFilter(filter.filter((item) => item !== value));
              } else {
                setFilter([...filter, value]);
              }
            }}
            className={`border duration-500 ${
              filter.includes(value)
                ? "border-[#899bff] bg-[#899bff] text-[#111111]"
                : "text-[#9ca3af] border-[#9ca3af]"
            }`}
            style={{
              display: "flex",
              padding: "3px 6px 3px 6px",
              marginRight: "10px",
              borderRadius: "5px",
              fontSize: "10px",
              fontWeight: 600,
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
  const { filter, setFilter, onFocus } = usePreview();

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
          items={PROJECTS.filter((project) => {
            if (filter.length === 0) {
              return true;
            }

            return filter.every((skill) => project.skills.includes(skill));
          }).map((project) => (
            <Area
              key={project.title}
              filter={filter}
              setFilter={setFilter}
              icon={project.icon}
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
