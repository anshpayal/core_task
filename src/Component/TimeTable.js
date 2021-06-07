import React from 'react';
import Homework from "./Homework";
import Class from "./Class"
const TimeTable=()=>{
    return(
        <div className="time-table-container">
            <div className="days">
                <p>MON</p>
                <p>TUE</p>
                <p>WED</p>
                <p>THU</p>
                <p>FRI</p>
                <p>SAT</p>
                <p>SUN</p>
            </div>
            <table>
                <tr>
                    <td><Homework /></td>
                    <td><Homework /></td>
                    <td><Homework /></td>
                    <td><Class /></td>
                    <td><Homework /></td>
                    <td><Homework /></td>
                    <td><Class /></td>
                    
                </tr>
            </table>
        </div>
    )

}
export default TimeTable;