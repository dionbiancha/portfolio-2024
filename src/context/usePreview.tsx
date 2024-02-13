import { useContext } from "react";
import { DataContext } from "./DataContext"; // Importe o DataContext do arquivo original

export const usePreview = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("usePreview must be used within a PreviewProvider");
  }

  return context;
};
