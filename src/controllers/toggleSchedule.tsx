import { DayType } from "../customTypes/DayType";
import { ScheduleContextType } from "../context/schedule";
import { transpileDate } from "./transpileDate";

export function toggleSchedule(dado:ScheduleContextType, { day }:DayType){
    const { setScheduleDate, inspectDate } = dado;
    const { year:inspectDateYear, monthNum:inspectDateMonth } = transpileDate(inspectDate);
    setScheduleDate(new Date(inspectDateYear, inspectDateMonth, day));
}