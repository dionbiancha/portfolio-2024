import Card from "../../components/Card";
import "../../App.css";
import { MdDevices } from "react-icons/md";
import { useState } from "react";
import { MdOutlineTour } from "react-icons/md";
import { LuTicket } from "react-icons/lu";

const PROJECTS = [
  {
    icon: (
      <MdOutlineTour
        style={{ width: "40px", height: "40px", color: "#899bff" }}
      />
    ),
    title: "Adaptour",
    text: "Projeto ajuda a solucionar a dor de um grupo de turistas aonde se precisam de acessbilidade.",
  },
  {
    icon: (
      <LuTicket style={{ width: "40px", height: "40px", color: "#899bff" }} />
    ),
    title: "I Love Voucher",
    text: "Facilitando a vida de operadores de turismos padronizando a emissão de vouchers.",
  },
  {
    icon: (
      <MdDevices style={{ width: "40px", height: "40px", color: "#899bff" }} />
    ),
    title: "Portfolio 2023",
    text: "Website turilizado como portfólio no ano de 2023",
  },
];

interface AreaProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Area({ icon, title, text }: AreaProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`border rounded-md  ${
        isHovered ? "border-[#899bff]" : "border-[#111111]"
      }`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "250px",
        height: "200px",
        backgroundColor: "#111111",
        padding: "20px",

        marginBottom: "20px",
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
        <p style={{ color: "#9ca3af", fontSize: "10px" }}>{text}</p>
      </div>
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ color: "#899bff", fontSize: "10px", cursor: "pointer" }}
      >
        Saiba mais
      </span>
      <span
        className={`absolute right-0 top-0 h-0 w-0 border-r-2 border-[#899bff] transition-all duration-500 ${
          isHovered ? "h-full" : ""
        }`}
      ></span>

      <span
        className={`absolute bottom-0 left-0 h-0 w-0 border-l-2 border-[#899bff] transition-all duration-500 ${
          isHovered ? "h-full" : ""
        }`}
      ></span>
    </div>
  );
}

function Projects() {
  return (
    <div style={{ marginRight: "50px" }}>
      <Card title="`${projetos}`">
        <div className="flex flex-row flex-wrap justify-between">
          {PROJECTS.map((value) => (
            <Area icon={value.icon} title={value.title} text={value.text} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Projects;
