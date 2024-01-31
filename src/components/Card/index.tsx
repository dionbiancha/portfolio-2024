interface CardProps {
  children: React.ReactNode;
  title?: string;
  id?: string;
}

function Card({ children, title, id }: CardProps) {
  return (
    <div id={id} style={{ width: "600px" }}>
      <h1
        style={{
          color: "#899bff",
          fontWeight: 700,
          fontSize: "12px",
          marginBottom: "10px",
        }}
      >
        {title}
      </h1>
      <div
        style={{ width: "600px" }}
        className="relative bg-[#151515] border-2 rounded-sm border-[#1F1F1F] border-solid  p-8"
      >
        {children}
      </div>
    </div>
  );
}

export default Card;
