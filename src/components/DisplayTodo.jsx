import React, { useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { connect } from 'react-redux'

const DisplayTodo = ({todos}) => {
   
  return (
   <Container>
     <Row>
       <Col>
         <Card className='mt-3 shadow-sm'>
           <Card.Body>
             <h3>All todos are here.</h3>
             <DisplayCount/>
             <ListGroup>
              {
                todos.map((todo)=>(
                  <ListGroup.Item>
                    <h5>{todo.title}</h5>
                    <p>{todo.description}</p>
                    <p>id-{todo.id}</p>
                  </ListGroup.Item>
                ))
              }
             </ListGroup>
           </Card.Body>
         </Card>
       </Col>
     </Row>
   </Container>
  )
}

const mapSateToProps=(state)=>{
  // console.log(state.todo);
  return {todos:state.todo}
}

const mapDispatchToProps=(dispatch)=>({

})

export default connect(mapSateToProps,mapDispatchToProps) (DisplayTodo)