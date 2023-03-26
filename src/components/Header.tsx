import { useMemo } from 'react';
import { transpileDate } from '../controllers/transpileDate';
import { useScheduleContext } from '../hooks/useScheduleContext'

const Header = () => {

    const { scheduleDate } = useScheduleContext();
    const isScheduled = scheduleDate !== null;
    const schedullingData = useMemo(() => isScheduled && {...transpileDate(scheduleDate)}, [scheduleDate]);

    return (
        <header className='schedule-date'>
            {
                schedullingData ? 
                <>
                    <div>
                        <h1 className="scheduled-state-title"> Data de agendamento: </h1>
                        <p>
                            <span className="day">{schedullingData.day}</span>
                            <span className="month">{schedullingData.month}</span>
                            <span className="year">{schedullingData.year}</span>
                        </p>
                    </div>
                </>
                    :
                <h1>
                    Faça seu agendamento!
                </h1>
            }
            <p className="github-link"><strong>Github do repositório: <a href="https://github.com/Pedrh316/Agenda.git" target="_blank">https://github.com/Pedrh316/Agenda.git</a></strong></p>
        </header>
    )
}

export default Header