import React from 'react';

function Table(props) {
    console.log(props.employees)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
            </thead>
            <tbody>

                {props.employees.length > 0? props.employees.map(person=>{
                    return(
                        <tr>
                    <th scope="row"><img src={person.picture.thumbnail}/></th>
                    <td >{person.name.first}</td>
                    <td>{person.name.last}</td>
                    <td>{person.email}</td>
                    <td>{person.phone}</td>
                   
                </tr> 
                    )
                }) :(<tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                   
                </tr> )  }
               
                
            </tbody>
        </table>
    )

}

export default Table;