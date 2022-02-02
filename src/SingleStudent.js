import React from 'react';

const SingleStudent = (props) => {
    const { students } = props; 

    const studentId = window.location.href.slice(window.location.href.length - 1);
    console.log('This is the student id', studentId)
    console.log(typeof studentId)

    const filteredStudent = students.filter((student) => {
        return student.id === parseInt(studentId)
    })
    console.log('The filtered student', filteredStudent)

    // Utilizing a database method that fetches a particular music album from your
    // database, or if you're using an external api, making a fetch request to that api
    // and fetching back a single music album 

    return (
        <div>
            <div>
                Name: {filteredStudent[0].name}
            </div>
            <div>
                Id: {filteredStudent[0].id}
            </div>
        </div>
    )
};

export default SingleStudent;