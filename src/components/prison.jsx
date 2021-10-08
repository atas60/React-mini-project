import React, { Component } from 'react';

class Prison extends Component {
    state ={
        students: ["eleve1","eleve2","eleve3","eleve4","eleve5"]
    }
    render() { 
        return (
        <div>
            <ul>
                {this.state.students.map(student => <li> {student}</li>)}
            </ul>
        </div>
        );
    }
}
 
export default Prison;