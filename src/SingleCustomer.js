import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { withRouter } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

class SingleCustomer extends Component {

  constructor(props){
    super();

    const { id, action } = props.match.params; 
    const customerProp = props.customers.find(item=>item.id === Number(id));
    const customer = JSON.parse(JSON.stringify(customerProp));
    const originalCustomer = JSON.parse(JSON.stringify(customer));
    this.state = {
      editMode: action ? true : false,
      customer,
      originalCustomer
    }
  }

  delete = () => {
    this.props.delete(this.state.customer.id);
    this.props.history.push("/customers")
  }
  goback = () => {
    this.props.history.push("/customers")
  }

  onEdit = () => {
    this.setState({editMode: true})
  }
  onCancel = () => {
    // do something
    // put original customer back
    const { originalCustomer } = this.state;
    this.setState({editMode: false, customer: originalCustomer})
  }
  onSave = () => {
    // do something
    const { customer } = this.state;
    this.setState({editMode: false, originalCustomer: {...customer}})
  }
  customerChange = (key, value) => {
    const customer = {...this.state.customer}
    customer[key] = value;
    this.setState({customer})
  }

  render(){
    const { editMode, customer } = this.state; 
    const editContent = !editMode && <Button onClick={this.onEdit} color="primary">Edit {customer.name}</Button>;
    const saveContent = editMode && <Button onClick={this.onSave} color="primary">Save</Button>;
    const cancelContent = editMode && <Button onClick={this.onCancel} color="secondary">Cancel</Button>;
    const nameContent = editMode ? <input autoFocus onChange={(e)=>this.customerChange("name", e.target.value)} value={customer.name} /> :  customer.name;
    const lastContent = editMode ? <input onChange={(e)=>this.customerChange("lastName", e.target.value)} value={customer.lastName} /> :  customer.lastName;
    const emailContent = editMode ? <input onChange={(e)=>this.customerChange("email", e.target.value)} value={customer.email} /> :  customer.email;
    const stateContent = editMode ? <input onChange={(e)=>this.customerChange("state", e.target.value)} value={customer.state} /> :  customer.state;
    const phoneContent = editMode ? <input onChange={(e)=>this.customerChange("phone", e.target.value)} value={customer.phone} /> :  customer.phone;
    const roleContent = editMode ? <input onChange={(e)=>this.customerChange("role", e.target.value)} value={customer.role} /> :  customer.role;
    const githubContent = editMode ? <input onChange={(e)=>this.customerChange("github", e.target.value)} value={customer.github} /> :  customer.github;
    const coursesContent = editMode ? <input onChange={(e)=>this.customerChange("courses", e.target.value)} value={customer.courses} /> :  customer.courses;
    const paymentContent = editMode ? <input onChange={(e)=>this.customerChange("payment", e.target.value)} value={customer.payment} /> :  customer.payment;
    
    return (
      <div>
        <div className="row">
          <div className="title">Id:</div>
          <div className="desc">{ customer.id }</div>
        </div>
        <div className="row">
          <div className="title">Avatar:</div>
          <div className="desc"><img className="img" src={customer.avatar} /></div>
        </div>
        <div className="row">
          <div className="title">Name:</div>
          <div className="desc">{nameContent}</div>
        </div>
        <div className="row">
          <div className="title">LastName:</div>
          <div className="desc">{lastContent}</div>
        </div>
        <div className="row">
          <div className="title">Email:</div>
          <div className="desc">{emailContent}</div>
        </div>
        <div className="row">
          <div className="title">State:</div>
          <div className="desc">{stateContent}</div>
        </div>
        <div className="row">
          <div className="title">Phone:</div>
          <div className="desc">{phoneContent}</div>
        </div>
        <div className="row">
          <div className="title">Role:</div>
          <div className="desc">{roleContent}</div>
        </div>
        <div className="row">
          <div className="title">Github:</div>
          <div className="desc">{githubContent}</div>
        </div>
        <div className="row">
          <div className="title">Courses:</div>
          <div className="desc">{coursesContent}</div>
        </div>
        <div className="row">
          <div className="title">Payment:</div>
          <div className="desc">{paymentContent}</div>
        </div>
        <div className="actions">
          
          {editContent}
          {saveContent}
          {cancelContent}
          <Button onClick={this.delete} color="danger">Delete {this.state.customer.name}</Button>
          <Button onClick={this.goback} color="success">Go Back </Button>
        </div>
      </div>
    )
  }
}


export default withRouter(SingleCustomer);











































/*
const data = [
  {countryName: "USA", currency:"dollar", products:[
    {name: "apple", active:true, subProducts:[
      {name: "iPhone", price: 40, sold:4},
      {name: "iPad", price: 530, sold:4},
      {name: "watch", price: 530},
    ]}
  ]},
  {countryName: "Russia", currency:"rubl", products:[
    {name: "apple", active:true, subProducts:[
      {name: "iPhone", price: 40, sold:4},
      {name: "iPad", price: 530, sold:4},
      {name: "watch", price: 530},
    ]}
  ]}
]
*/