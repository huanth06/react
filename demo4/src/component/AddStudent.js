import React, { Component } from 'react'

export default class AddStudent extends Component {
    constructor(){
        super();
        this.state = {
            listStudent:[
                {
                    id: 1,
                    name: 'A',
                    age: 18
                },
                {
                    id: 2,
                    name: 'B',
                    age: 18
                }
            ],
            inpID: '',
            inpName: '',
            inpAge: ''
        };
    }
    changeInp = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    add = () => {
        this.setState((state)=>{
            return {
                listStudent:[
                    ...state.listStudent,
                    {
                        id: state.inpID,
                        name: state.inpName,
                        age: state.inpAge
                    }
                ],
                inpID: '',
                inpName: '',
                inpAge: ''
            }
        });
    }
    
  render() {
    return (
      <>
        <h1>Add student demo: {this.state.inpID},{this.state.inpName}, {this.state.inpAge}</h1>
        {
            this.state.listStudent.map((student) => (
                <h2>{student.id} - {student.name} - {student.age} </h2>
            ))
        }
        <input type="text" value={this.state.inpID} name="inpID"  onChange={this.changeInp}/>
        <input type="text" value={this.state.inpName} name="inpName"  onChange={this.changeInp}/>
        <input type="text" value={this.state.inpAge} name="inpAge"  onChange={this.changeInp}/>
        <button onClick={this.add}>Creat</button>
      </>
    )
  }
}
