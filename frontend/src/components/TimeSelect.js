import TableDragSelect from 'react-table-drag-select'
import { useFilter } from '../containers/hooks/useFilter.';
import '../css/TimeFilter.css';

const TimeSelect = () => {
    const { currTime, setCurrTime, printTime } = useFilter();
    const handleChange = (cells) => {
        setCurrTime({ cells });
        console.log(cells);
    }
    return(
        <div>
            <TableDragSelect value={currTime.cells} onChange={handleChange}>
                <tr>
                    <td disabled />
                    <td disabled>一</td>
                    <td disabled>二</td>
                    <td disabled>三</td>
                    <td disabled>四</td>
                    <td disabled>五</td>
                    <td disabled>六</td>
                </tr>
                <tr>
                    <td disabled>0</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>1</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>2</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>3</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>4</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>5</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>6</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>7</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>8</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>9</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>10</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>A</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>B</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>C</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td disabled>D</td>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
            </TableDragSelect>
        </div>
    )
}

export default TimeSelect;