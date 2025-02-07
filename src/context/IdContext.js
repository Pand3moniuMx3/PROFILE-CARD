import { createContext, useContext } from "react";

const IdContext = createContext();

function IdProvider({ children }) {
  const generateRandomId = () => Math.floor(100000 + Math.random() * 900000);

  let assignedIds = new Set();

  const generateUniqueId = () => {
    let newId;
    do {
      newId = generateRandomId();
    } while (assignedIds.has(newId));
    assignedIds.add(newId);
    return newId;
  };

  return (
    <IdContext.Provider
      value={{
        generateUniqueId,
      }}
    >
      {children}
    </IdContext.Provider>
  );
}

function useId() {
  const context = useContext(IdContext);
  if (context === undefined)
    throw new Error("useId used outside of IdProvider");
  return context;
}

export { IdProvider, useId };
