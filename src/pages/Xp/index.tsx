import Card from "../../components/Card";
import "../../App.css";
import { useState } from "react";
import { usePreview } from "../../context/usePreview";

const XP_VALUES = [
  {
    nav: "Braza Bank",
    title: "Frontend Developer",
    company: "Braza Bank",
    time: "fev de 2022 - o momento · 2 anos",
    text: "Atuo no grupo especializado em soluções financeiras cross-border com mais de 7 mil clientes pessoas jurídicas e cerca de 6 milhões de clientes pessoas físicas colaborando com o rebranding da carteira digital multimoedas voltada a remessas e pagamentos internacionais com pix no exterior.",
  },
  {
    nav: "Freelancer",
    title: "Frontend Developer",
    company: "Freelancer",
    time: "mai de 2020 - fev de 2022 · 1 ano e 9 meses",
    text: "Com uma paixão pela inovação e um olhar afiado para detalhes, trago à vida as visões de meus clientes, moldando seus conceitos em sites dinâmicos e funcionais.",
  },
  {
    nav: "Reacta Labs",
    title: "Estagiário",
    company: "Reacta Labs",
    time: "jun de 2019 - mai de 2020 · 1 ano",
    text: "Colaborei no desenvolvimento de uma aplicação de mercado internacional com o objetivo de fornecer serviços técnicos e informações que auxiliem produtores e empresas na tomada de decisão sobre a atividade agrícola.",
  },
];
interface XProps {
  nav: string;
  title: string;
  company: string;
  time: string;
  text: string;
}

function Xp() {
  const [selectdXP, setSelectdXP] = useState<XProps>(XP_VALUES[0]);
  const { onFocus, isSmallScreen } = usePreview();

  function isSelected(value: XProps) {
    if (selectdXP === value) return true;
    return false;
  }
  return (
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        marginLeft: "50px",
        opacity: onFocus === "xp" ? 1 : 0.1,
      }}
    >
      <Card title="`${experiências}`" id="xp">
        <div className="flex flex-row justify-between">
          <div
            style={{ display: isSmallScreen ? "none" : "block" }}
            className="flex flex-col justify-between bg-[#111111] mr-5"
          >
            {XP_VALUES.map((value, key) => (
              <div
                key={key}
                onClick={() => onFocus === "xp" && setSelectdXP(value)}
                style={{
                  borderLeft: isSelected(value) ? "2px solid #899bff" : "",
                  cursor: onFocus === "xp" ? "pointer" : "",
                  fontSize: "15px",
                  padding: "20px",
                  whiteSpace: "nowrap",

                  color: isSelected(value) ? "#899bff" : "",
                }}
              >
                {value.nav}
              </div>
            ))}
          </div>
          <div
            style={{
              width: "600px",
              height: isSmallScreen ? "250px" : "",
              textAlign: isSmallScreen ? "center" : "left",
            }}
          >
            <div
              style={{
                display: isSmallScreen ? "flex" : "none",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              {XP_VALUES.map((value, key) => (
                <div
                  key={key}
                  onClick={() => onFocus === "xp" && setSelectdXP(value)}
                  style={{
                    borderBottom: isSelected(value) ? "1px solid #899bff" : "",
                    cursor: onFocus === "xp" ? "pointer" : "",
                    fontSize: "10px",

                    whiteSpace: "nowrap",

                    color: isSelected(value) ? "#899bff" : "",
                  }}
                >
                  {value.nav}
                </div>
              ))}
            </div>
            <div
              className={
                isSmallScreen
                  ? ""
                  : `flex flex-row justify-between items-center`
              }
            >
              <h1 style={{ fontSize: "20px", fontWeight: 600 }}>
                {selectdXP.title}
              </h1>
              <span
                style={{
                  display: isSmallScreen ? "none" : "block",
                  color: "#9ca3af",
                  fontSize: "10px",
                  marginTop: "5px",
                }}
              >
                {selectdXP.time}
              </span>
            </div>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#899bff",
                marginBottom: "10px",
              }}
            >
              {selectdXP.company}
            </h2>
            <span
              style={{
                display: isSmallScreen ? "block" : "none",
                color: "#9ca3af",
                fontSize: "10px",
                marginBottom: "20px",
              }}
            >
              {selectdXP.time}
            </span>
            <p style={{ color: "#9ca3af", fontSize: "10px" }}>
              {selectdXP.text}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Xp;
