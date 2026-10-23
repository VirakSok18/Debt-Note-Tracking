import { createContext, useContext, useState, useCallback } from 'react';
import { axiosInstance } from '../lib/axios';

const DebtNotesContext = createContext();

export const DebtNotesProvider = ({ children }) => {
  const [debtNotes, setDebtNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDebtNotes = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/debt-notes");
      setDebtNotes(res.data);
    } catch (error) {
      console.error("Error fetching debt notes", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <DebtNotesContext.Provider value={{ debtNotes, loading, fetchDebtNotes, setDebtNotes }}>
      {children}
    </DebtNotesContext.Provider>
  );
};

export const useDebtNotes = () => useContext(DebtNotesContext);