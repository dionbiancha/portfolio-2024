import React, { createContext, useContext, useState, ReactNode } from "react";

interface DataContextProps {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  onFocus: string;
  setOnFocus: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<string[]>([]);
  const [onFocus, setOnFocus] = useState<string>("");
  return (
    <DataContext.Provider
      value={{
        onFocus,
        setOnFocus,
        filter,
        setFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const usePreview = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("usePreview must be used within a PreviewProvider");
  }

  return context;
};
