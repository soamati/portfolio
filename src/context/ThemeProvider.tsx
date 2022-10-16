import React, { PropsWithChildren } from "react";

type Scheme = {
  base: string;
  main: string;
};

type Theme = {
  base: Scheme["base"];
  main: Scheme["main"];
  setScheme: (base: string, main: string) => void;
};

const ThemeContext = React.createContext<Theme | null>(null);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [scheme, _setScheme] = React.useState<Scheme>({
    base: "gruv",
    main: "orange",
  });

  const setScheme: Theme["setScheme"] = React.useCallback((base, main) => {
    _setScheme({ base, main });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        base: `base-${scheme.base}`,
        main: scheme.main,
        setScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("Use inside a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
