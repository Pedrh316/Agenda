import { useLayoutEffect, useMemo } from 'react'
import { nanoid } from 'nanoid'
import { useScheduleContext } from '../hooks/useScheduleContext'
import { loadScheduleData } from '../controllers/loadTableData'
import { transpileDate } from '../controllers/transpileDate'
import { updateInspectDate } from '../controllers/updateInspectDate'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Day from './Day'

const Table = () => {
    const { inspectDate, daysData, setInspectDate, setDaysData } = useScheduleContext();
    const {year:inspectYear, month:inspectMonth, monthNum: inspectMonthNum} = transpileDate(inspectDate);
    // recalcula dayDataNum toda vez que a pessoa mudar o mês (fazer nova inspeção).
    // esse processo é necessário para que o controller loadScheduleData retorne o array de arrays de dias de maneira que possam
    // ser ordenados nas colunas certas ao serem usados na renderização visual.
    const daysDataNum:number[][] = useMemo(() => loadScheduleData(inspectYear, inspectMonthNum), [inspectDate]);

    useLayoutEffect(() => {
        setDaysData(daysDataNum.map(line => line.map(day => ({day, id:nanoid()}))))
    }, [inspectDate])    
    
    
    const handleClick = (n:number) => updateInspectDate({inspectDate, setInspectDate, n})
    const allDays = useMemo(() => daysData.map(line => <tr key={nanoid()}>{line.map(item => <td key={item.id}><Day {...item}/></td> )}</tr>), [daysData])

    return (
        <div className="table">
            <div className='arrow-container'>
                <button className="arrow arrow-left" onClick={() => handleClick(-1)}><BsChevronLeft/></button>
                <button className="arrow arrow-right" onClick={() => handleClick(1)}><BsChevronRight/></button>
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