import Card from "../../components/Card";
import "../../App.css";
import { FaFigma } from "react-icons/fa";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { RiCodeView } from "react-icons/ri";
import { useState } from "react";

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
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`border rounded-md  ${
        isHovered ? "border-[#899bff]" : "border-[#111111]"
      }`}
      style={{
        width: "170px",
        height: "170px",
        backgroundColor: "#111111",
        padding: "20px",
        cursor: "pointer",
      }}
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
      <p style={{ color: "#9ca3af", fontSize: "10px" }}>{text}</p>
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

function Services() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Card title="`${serviços}`" id="services">
        <div className="flex flex-row justify-between">
          {SERVICES.map((value) => (
            <Area icon={value.icon} title={value.title} text={value.text} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Services;
