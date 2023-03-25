import React, { memo } from 'react'
import { toggleSchedule } from '../controllers/toggleSchedule';
import { transpileDate } from '../controllers/transpileDate';
import { DayType } from '../customTypes/DayType'
import { useScheduleContext } from '../hooks/useScheduleContext';


const DayActive = (dayData:DayType) => {    
    const scheduleContextData = useScheduleContext();
    const { inspectDate, scheduleDate } = useScheduleContext();
    const formattedDate = new Date(inspectDate);
    formattedDate.setDate(dayData.day);


    const {year: inspectDateYear, monthNum: inspectDateMonth } = transpileDate(inspectDate);
    const {year: scheduleDateYear, monthNum: scheduleDateMonth, day:scheduleDateDay} = transpileDate(scheduleDate ?? new Date());

    const lastDayOfMonth = new Date(inspectDateYear, inspectDateMonth + 1, 0).getDate();
    const isValidData = dayData.day > 0 && dayData.day <= lastDayOfMonth && formattedDate.getTime() > new Date().getTime();    
    const isScheduled = inspectDateYear === scheduleDateYear && inspectDateMonth === scheduleDateMonth && dayData.day === scheduleDateDay; 

    const dayToRender = formattedDate.getDate();

    return (
        <button className={`day-btn ${ isScheduled && isValidData ? 'scheduled' : ''}`}  onClick={() => toggleSchedule(scheduleContextData, dayData)} disabled={!isValidData}>
                { dayToRender }
        </button>
    )
}

export default DayActive