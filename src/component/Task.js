import React from "react"
import { Form } from "react-bootstrap"
import Edit from "./Edit"

const Task = ({task}) => {
return (
<div>
<Form >
  <p className="mb-3" > 
   
    <p type="text"  name="text" value={task.text} />
  </p>

</Form>
<h3>{task.text} </h3>

<Edit task={task}/>
</div>
)
}
export default Task