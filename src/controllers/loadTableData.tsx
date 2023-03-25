
export function loadScheduleData(year:number,month:number){
    const dateToLoad = new Date();
    dateToLoad.setFullYear(year);
    dateToLoad.setMonth(month);
    dateToLoad.setDate(1);
    const firstWeekdayOfMonth = dateToLoad.getDay();    

    let scheduleData:number[][]  = [];

    for(let line = 0; line < 6; line++ ){
        const lineData:number[] = []
        for(let column = 1; column <= 7; column++){
            const day = line * 7 + column - firstWeekdayOfMonth;
            lineData.push(day);
        }
        scheduleData.push(lineData)
    }

    return scheduleData;
}