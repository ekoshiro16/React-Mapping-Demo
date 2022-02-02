import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import StudentList from './StudentList'; 

const App = () => {
    const students = [
        {
            name: 'Luke',
            id: 1
        },
        {
            name: 'Alan',
            id: 2
        },
        {
            name: 'Jerry',
            id: 3
        }
    ];

    return (
        <div>
            <p>Hello World!</p>

            <StudentList students={students}/>
        </div>
    )
}

export default App; 