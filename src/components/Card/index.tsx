import { usePreview } from "../../context/DataContext";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  id?: string;
}

function Card({ children, id }: CardProps) {
  const { isSmallScreen } = usePreview();
  return (
    <div
      id={id}
      style={{
        width: "100%",
        maxWidth: isSmallScreen ? "280px" : "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="relative bg-[#151515] border-2 rounded-sm border-[#1F1F1F] border-solid  p-8"
    >
      {children}
    </div>
  );
}

export default Card;
