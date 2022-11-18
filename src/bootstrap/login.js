import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TableBody from './Basictable';


function Login() {
    const[count,setCount]= useState(false);
  return (
<>
    { count?"" :<div style={{ 
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%"
    
    }}>
    <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  style = {{width:"300px",}} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control style = {{width:"300px",}} type="password" placeholder="Password" />
     
      </Form.Group>
      <Button onClick={() => setCount(!count)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>}
    <div>{count?<TableBody />:""}
        
      </div>
    </>
  );
}

export default Login;