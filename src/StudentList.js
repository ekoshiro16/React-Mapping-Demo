import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'; 
import SingleStudent from './SingleStudent'; 

const StudentList = (props) => {
    console.log('This is studentList comp props', props)
    const { students } = props;
    return (
        <Switch>
            <Route exact path="/all-students">
                <div>
                    {
                        students ? students.map((student) => {
                            return (
                                <div key={student.id}>
                                    <div>Name: {student.name}</div>

                                    <a href={`/all-students/${student.id}`}>
                                        <button>Go to student</button>
                                    </a>
                                </div>
                            )
                        }) : 'LOADING'
                    }
                </div>
            </Route>

            <Route path="/all-students/:id">
                <SingleStudent students={students}/>
            </Route>
        </Switch>
    )
}

export default StudentList; 