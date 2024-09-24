import { createContext, useContext, useState } from "react";

const Context = createContext();
function AppContexts({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  return (
    <Context.Provider value={{ showScrollTop, setShowScrollTop }}>
      {children}
    </Context.Provider>
  );
}

export const useApp = () => useContext(Context);

export default AppContexts;
