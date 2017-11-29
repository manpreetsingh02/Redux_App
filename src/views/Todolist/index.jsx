import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {doTodoReq} from "../../redux/actions/index.js";
import {doMarkCompleteReq} from "../../redux/actions/CompleteTask/index.js";
import {doDeleteReq} from "../../redux/actions/DeleteTask/index.js";


class Todos extends Component {
  constructor(props) {
    super(props);
    this.markComplete=this.markComplete.bind(this);
    this.Deleted = this.Deleted.bind(this);
    this.state={
                todos:[],
                deleted:[]
                }
  }
  componentWillMount(){
    this.props.gettodolist();
  }
  markComplete(id){
     alert("Task marked as complete");
     this.props.markComplete(id);
  
    }
    Deleted(id){
     alert("Task Deleted");

    this.props.Deleted(id);    
    }
  componentWillReceiveProps(){
    console.log(this.state);
  var arr=this.state.todos;
  var arr1=this.state.deleted;
  if (this.props.todos.todoCompleteReducer.todos.id){
        arr.push(this.props.todos.todoCompleteReducer.todos.id);
        this.setState({todos : arr});
  }
  if (this.props.todos.todoDeleteReducer.todos.id){
        arr1.push(this.props.todos.todoDeleteReducer.todos.id);
        this.setState({deleted : arr1});
  }
  }
  render() {
 console.log(this.props);
 var todoList=[],myClass=" ",buttons,self=this,objArray=self.props.todos.todoCompleteReducer.todos.id;
 var todosdone=this.state.todos;
 var todosdeleted=this.state.deleted;

 if (this.props.todos.todoReducer.todos){
 todoList= this.props.todos.todoReducer.todos.map(function(task,index){
if (task.completed || self.props.todos.todoCompleteReducer.todos.id ===  task.id || todosdone.indexOf(task.id) !== -1 ){
  myClass="taskItem completed";
  buttons=(<div className="actions">
              <button type="button" title="Delete task" onClick={() => {self.Deleted(task.id) } }><i className="fa fa-trash-o" aria-hidden="true"></i></button>
          </div>);
}

else {
myClass="taskItem not-completed";
buttons=(<div className="actions">
            <button type="button" title="Delete task" onClick={() => {self.Deleted(task.id) } }><i className="fa fa-trash-o" aria-hidden="true"></i></button> 
            <button title="Mark complete" type="button" onClick={() => {self.markComplete(task.id) } }><i className="fa fa-check" aria-hidden="true" ></i></button>
        </div>);

}
if (self.props.todos.todoDeleteReducer.todos.id ===  task.id || todosdeleted.indexOf(task.id) !== -1 ){
return " ";
}
else{
  return (<li className={myClass} key={index}>{task.title} {buttons}</li>)
  }
 })
 }
  	return (
  		 <div className="app">
<div className="content">
        <h1>  To Do List</h1>
          <p className="tagline"> React/redux todo list </p>
<p class="instructions"> Completed tasks are in green colour and uncomplete task are in red colour. </p>
        </div>
        <ul className="taskList">
            {todoList}
        </ul>
       </div>
  		 )
 }
 
}



function mapStateToProps(state) {
  const todos = state;
 
  return {todos};
}


function mapDispatchToProps(dispatch) {
  return {
  	gettodolist:()=>{

  dispatch(doTodoReq());
},markComplete:(id)=>{
  dispatch(doMarkCompleteReq(id));

}
,Deleted:(id)=>{
  dispatch(doDeleteReq(id));

}
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

