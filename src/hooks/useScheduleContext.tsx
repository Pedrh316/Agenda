import { ReactElement, useContext, useState } from "react";
import { DayType } from "../customTypes/DayType";
import { ScheduleContext } from '../context/schedule';


export const useScheduleContext = () => {
    return useContext(ScheduleContext);
}

type ChildrenType = {
    children:ReactElement | ReactElement[] | null;
}

export const ScheduleProvider = ({children}:ChildrenType) => {    
    const [inspectDate, setInspectDate] = useState<Date>(new Date());
    const [daysData, setDaysData] = useState<DayType[][]>([]);
    const [scheduleDate, setScheduleDate] = useState<Date | null>(null);

    const value = {inspectDate, daysData, scheduleDate, setInspectDate, setDaysData, setScheduleDate}

    return <ScheduleContext.Provider value={value}>
        {children}
    </ScheduleContext.Provider>
}