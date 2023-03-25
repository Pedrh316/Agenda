import { useEffect, useMemo } from 'react'
import { loadScheduleData } from '../controllers/loadTableData'
import { useScheduleContext } from '../hooks/useScheduleContext'
import Day from './Day'
import { nanoid } from 'nanoid'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { transpileDate } from '../controllers/transpileDate'
import { updateInspectDate } from '../controllers/updateInspectDate'

const Table = () => {
    const { inspectDate, daysData, setInspectDate, setDaysData } = useScheduleContext();
    const daysDataNum:number[][] = useMemo(() => loadScheduleData(inspectDate.getFullYear(), inspectDate.getMonth()), [inspectDate]);    
    const allDays = useMemo(() => daysData.map(line => <tr>{line.map(item => <td><Day {...item}/></td> )}</tr>), [daysData])
    
    useEffect(() => {
        setDaysData(daysDataNum.map(line => line.map(day => ({day, id:nanoid()}))))
    }, [inspectDate])


    const {month:inspectMonth, year:inspectYear} = transpileDate(inspectDate);
    const handleInspectDate = (n:number) => {
        updateInspectDate({inspectDate, setInspectDate, n})
    }

    return (
        <div className="table">
            <div className='arrow-container'>
                <button className="arrow arrow-left" onClick={() => handleInspectDate(-1)}><BsChevronLeft/></button>
                <button className="arrow arrow-right" onClick={() => handleInspectDate(1)}><BsChevronRight/></button>
            </div>
            <table>
                <caption className='inspect-date'>
                    <span className='month'>{inspectMonth}</span>
                    <span className='year'>{inspectYear}</span>
                </caption>
                <thead>
                    <tr>
                        <th>dom</th>
                        <th>seg</th>
                        <th>ter</th>
                        <th>qua</th>
                        <th>qui</th>
                        <th>sex</th>
                        <th>sáb</th>
                    </tr>
                </thead>
                <tfoot></tfoot>
                <tbody>
                    {allDays}
                </tbody>
            </table>
        </div>
    )
}

export default Table