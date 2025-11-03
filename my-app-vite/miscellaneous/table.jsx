import React from "react";


class Table extends React.Component{
    render(){
        return(
            <div>
                <table>
                   <thead>
                    <tr>
                        <th>Name </th>
                        <th>RollNo</th>
                        <th>marks</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Miku</td>
                            <td>2</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Blank</td>
                            <td>3</td>
                            <td>27</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        )
    }
}
export default Table;