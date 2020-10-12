import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const AppoinmentTable = () => {
    const [user]=useContext(UserContext)
    
    return (
        <div>
            
                <h3 className='brand-text'>Appoinment</h3>
                
           
            <table>
                <tr>
                    <th>Name</th>
                    <th>Schedule</th>
                    <th>Action</th>
                </tr>
                {
                    user.appoinmentByDate?.map(data=>{
                        return(
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.time}</td>
                                <td>action</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
};

export default AppoinmentTable;