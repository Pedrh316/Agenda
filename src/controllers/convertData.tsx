import { transpileDate } from "./transpileDate";

interface ConvertDataType {
    year?:number,
    month?:number,
    day?:number
}

export const convertData = (date:Date, {year, month, day}:ConvertDataType) => {
    const convertedDate = new Date(date);
    const {year:defaultYear, monthNum:defaultMonthNum, day:defaultDay } = transpileDate(convertedDate);
    convertedDate.setFullYear(year ?? defaultYear);
    convertedDate.setMonth(month ?? defaultMonthNum);
    convertedDate.setDate(day ?? defaultDay);

    return convertedDate;
}