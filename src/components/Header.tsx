import { useMemo } from 'react';
import { transpileDate } from '../controllers/transpileDate';
import { useScheduleContext } from '../hooks/useScheduleContext'

const Header = () => {

    const { scheduleDate } = useScheduleContext();
    const isScheduled = scheduleDate !== null 

    const schedullingData = useMemo(() => isScheduled && {...transpileDate(scheduleDate)}, [scheduleDate]);

    return (
        <header className='schedule-date'>
            {
                schedullingData ? 
                <>
                        <h1 className="scheduled-state-title"> Data de agendamento: </h1>
                        <p>
                            <span className="day">{schedullingData.day}</span>
                            <span className="month">{schedullingData.month}</span>
                            <span className="year">{schedullingData.year}</span>
                        </p>
                </>
                    :
                <h1>
                    Faça seu agendamento!
                </h1>
            }

        </header>
    )
}

export default Header