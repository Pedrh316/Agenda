interface formattedDateType {
    day:number,
    weekday:string,
    weekdayNum:number,
    month:string,
    monthNum:number,
    year:number
}

export const transpileDate = (date:Date):formattedDateType => {
    return {
        day:date.getDate(),
        weekday:date.toLocaleString('PT-BR', {weekday:'long'}),
        weekdayNum:date.getDay(),
        month:date.toLocaleString('PT-BR', {month:'long'}),
        monthNum:date.getMonth(),
        year:date.getFullYear(),
    }
}