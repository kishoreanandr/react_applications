import '../css/student_table.css';
import PropsTypes from "prop-types";
export const Student = (props) => {
    return <>
        <div className="Student_table">
            <table>
                <tbody>

                    <tr>
                        <th>Name: </th>
                        <td>{props.name}</td>
                    </tr>

                    <tr>
                        <th>Roll No: </th>
                        <td>{props.rollNo}</td>
                    </tr>

                    <tr>
                        <th>Department: </th>
                        <td>{props.department}</td>
                    </tr>

                    <tr>
                        <th>Result: </th>
                        <td>{props.pass? "Pass": "Fail"}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </>
}
Student.propsTypes={
    name :PropsTypes.string
}

Student.defaultProps={
    name:"No Name",
    rollNo:"No Roll Number",
    age:0,
}