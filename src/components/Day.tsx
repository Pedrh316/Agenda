import { analysisDate } from '../controllers/analysisDate';
import { toggleSchedule } from '../controllers/toggleSchedule';
import { DayType } from '../customTypes/DayType'
import { useScheduleContext } from '../hooks/useScheduleContext';


const DayActive = (dayData:DayType) => {    
    const { day } = dayData;
    const scheduleContextData = useScheduleContext();
    const { inspectDate, scheduleDate } = useScheduleContext();
    const {isScheduled, isValidData, dayToRender} = analysisDate({day, inspectDate, scheduleDate});
    const buttonClassName = `day-btn ${isScheduled ? 'scheduled' : ''}`;

    return (
        <button 
            className={buttonClassName}
            onClick={() => toggleSchedule(scheduleContextData, dayData)}
            disabled={!isValidData}
        >
                { dayToRender }
        </button>
    )
}

export default DayActive