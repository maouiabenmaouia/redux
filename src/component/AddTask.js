import React , {useState} from 'react'
import { Button, Form,  } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { addTask} from "../JS/actions/Action";

const AddTask = () => {
    const [text, setText]= useState('')
    const dispatch = useDispatch();
    const handleChange =(e)=>{
        e.preventDefault();
        if (text.trim()){
            dispatch(addTask({id:Math.random(), text:text , isDone :false}))
            setText('')
        }
        else{
            alert("can not add an empty task")
        }
    }
  return (
    <div>
        <Form onSubmit={handleChange}>
  <Form.Group className="mb-3" > 
    <Form.Label>ADD Task</Form.Label>
    <Form.Control type="text" placeholder="Enter your task" onChange={(e)=>setText(e.target.value)} name="text" value={text} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleChange}>
    Submit
  </Button>
</Form>
    </div>
  )
}

export default AddTask