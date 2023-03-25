import { convertData } from "./convertData";
import { transpileDate } from "./transpileDate";

interface AnalysisDateType {
    day:number,
    inspectDate:Date,
    scheduleDate:Date | null
}

export const analysisDate = ({day, inspectDate, scheduleDate}:AnalysisDateType) => {
    const formattedDate = convertData(inspectDate, {day});

    const {year: inspectDateYear, monthNum: inspectDateMonth } = transpileDate(inspectDate);
    const {year: scheduleDateYear, monthNum: scheduleDateMonth, day:scheduleDateDay} = transpileDate(scheduleDate ?? new Date());

    const lastDayOfMonth = new Date(inspectDateYear, inspectDateMonth + 1, 0).getDate();

    const isValidData:boolean = day > 0 && day <= lastDayOfMonth && formattedDate.getTime() > new Date().getTime();    
    const isScheduled:boolean = (
        isValidData &&
        inspectDateYear === scheduleDateYear &&
        inspectDateMonth === scheduleDateMonth &&
        day === scheduleDateDay 
    )

    const dayToRender = formattedDate.getDate();

    return { dayToRender, isValidData, isScheduled }
}