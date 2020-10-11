import { createContext, useContext } from 'react';

const CalcContext = createContext();
export default CalcContext;
export const useCalcContext = () => useContext(CalcContext);
