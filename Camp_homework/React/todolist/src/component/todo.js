import React, { useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { Checkbox, Row, Col, Button } from "antd";

function Todo(props) {
  const [isCheck, setIsCheck] = useState(false);
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  };

  const deleteTodoList = (id) => {
    const newTodoList = [...props.todoList];
    const remainTodoList = newTodoList.filter((item) => item.id !== id);
    props.setTodoList(remainTodoList);
  };

  let deleteButton;

  if (isCheck) {
    deleteButton = (
      <Button
        type="danger"
        size="small"
        onClick={() => deleteTodoList(props.todo.id)}
      >
        X
      </Button>
    );
  } else {
    deleteButton = "";
  }
  return (
    <Row align="middle" style={{ width: "100%" }}>
      <Col span={2} style={{ textAlign: "left" }}>
        <Checkbox onChange={handleCheckBox} />
      </Col>
      <Col span={20}>
        <p className="todo-task">{props.todo.task}</p>
        <p className="todo-date">
          <CalendarOutlined />
          &nbsp;&nbsp;
          {props.todo.date}
        </p>
      </Col>
      <Col span={2}>{deleteButton}</Col>
    </Row>
  );
}

export default Todo;
