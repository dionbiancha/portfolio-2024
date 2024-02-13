import React, { createContext, useState, ReactNode } from "react";

interface DataContextProps {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  onFocus: string;
  setOnFocus: React.Dispatch<React.SetStateAction<string>>;
  isSmallScreen: boolean;
  setIsSmallScreen: React.Dispatch<React.SetStateAction<boolean>>;
  disabledPageScrool: boolean;
  setDisabledPageScrool: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<string[]>([]);
  const [onFocus, setOnFocus] = useState<string>("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [disabledPageScrool, setDisabledPageScrool] = useState(false);

  return (
    <DataContext.Provider
      value={{
        disabledPageScrool,
        setDisabledPageScrool,
        onFocus,
        setOnFocus,
        filter,
        setFilter,
        setIsSmallScreen,
        isSmallScreen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
