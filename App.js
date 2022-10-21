// import logo from './logo.svg';
// import React from "react";
import React, { Component } from 'react';
import Plan from './Plan';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    items: [],
    text : ""
  }
  handleChange = e =>{
    this.setState({text: e.target.value});
  }
  
  handleAdd = e =>{
    if (this.state.text !== "")
    {
      const items = [...this.state.items, this.state.text];
      this.setState({items: items, text : ""});
    }
    }
    handleDelete = id =>{
      const oldItems = [...this.state.items];
      const items = oldItems.filter((element, i) => {
        return i !== id 
      })
      this.setState({items: items});
    }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className="row justify-content-md-center">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className='text-center'>ToDo List</h2>
            <div className="row d-flex justify-content-center">
              <div className="col-9 ">
                <input type="text" className='form-control ' placeholder='Write Your Items'value={this.state.text} onChange={this.handleChange} />
              </div>
              <div className="col-12  my-3 d-flex justify-content-center">
                <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}>Add</button>
              </div>
              <div className="container-fluid ">
                <ul className='list-unstyled row m-5 d-flex justify-content-center'>
                  {
                    this.state.items.map((value, i)=>{
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
                    })
                  }
                  </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default App;