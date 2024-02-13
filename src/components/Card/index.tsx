import { usePreview } from "../../context/usePreview";

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
        width: isSmallScreen ? "100%" : "600px",
        maxWidth: isSmallScreen ? "280px" : "600px",
      }}
      className="relative bg-[#151515] border-2 rounded-sm border-[#1F1F1F] border-solid  p-8"
    >
      {children}
    </div>
  );
}

export default Card;
