import { createContext } from "react";
import { DayType } from "../customTypes/DayType";

export interface ScheduleContextType {
    inspectDate:Date,
    daysData:DayType[][],
    scheduleDate:Date | null,
    setInspectDate:React.Dispatch<React.SetStateAction<Date>>,
    setDaysData:React.Dispatch<React.SetStateAction<DayType[][]>>,
    setScheduleDate: React.Dispatch<React.SetStateAction<Date | null>>
}

export const ScheduleContext = createContext<ScheduleContextType>({} as ScheduleContextType);