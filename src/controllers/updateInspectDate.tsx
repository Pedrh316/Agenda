import React from "react";

export interface UpdateInspectDateType {
    inspectDate:Date, 
    setInspectDate:React.Dispatch<React.SetStateAction<Date>>;
    n:number
}

export function updateInspectDate({inspectDate, setInspectDate, n}:UpdateInspectDateType){
    const [ year, month ] = [inspectDate.getFullYear(), inspectDate.getMonth()];
    setInspectDate(new Date(year, month + n, 1));
}
