import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import {addTodo} from "../redux/action/todo"
import { connect } from "react-redux";
import { v4 } from "uuid";

function AddTodo({addTodo}) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    id:""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo({...todo,id:v4()})
    console.log(todo)
    addTodo(todo)
    setTodo({
      title: "",
      description: "",
    });
  };
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add todo here.</h3>
              <DisplayCount/>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    name="title"
                    type="text"
                    placeholder="Enter here"
                    value={todo.title}
                    onChange={(e) =>
                      setTodo({ ...todo, [e.target.name]: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control
                    name="description"
                    as={`textarea`}
                    type="text"
                    placeholder="Enter here"
                    value={todo.description}
                    onChange={(e) => {
                      setTodo({ ...todo, [e.target.name]: e.target.value });
                    }}
                  />
                </Form.Group>

                <Container className="text-center mt-3">
                  <Button type="submit" variant="primary">
                    Add Todo
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps=(state)=>({})

const mapDispatchProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(mapStateToProps,mapDispatchProps) (AddTodo);
