import React, { useState } from "react";
import { Col, Row, Input, List, Button } from "antd";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { PlusOutlined } from "@ant-design/icons";
import "../css/todoList.css";
import Todo from "./todo";
import { uniqueId } from "lodash";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputField, setInputField] = useState("");
  const [inputDate, setInputDate] = useState(new Date());
  const [isAdd, setIsAdd] = useState(false);

  const addTodoList = () => {
    const newTodoList = [...todoList];
    newTodoList.push({
      id: uniqueId(),
      task: inputField,
      date: inputDate.toString().slice(0, 10),
    });
    setTodoList(newTodoList);
    setInputField("");
    setIsAdd(!isAdd);
  };
  const toggleAdd = () => {
    setIsAdd(true);
  };

  const onChangeDate = (date) => {
    setInputDate(date);
  };

  let content;
  if (!isAdd) {
    content = (
      <Row onClick={toggleAdd} align="middle" style={{ width: "100%" }}>
        <Col span={1} style={{ textAlign: "center" }}>
          <PlusOutlined />
        </Col>
        <Col span={23}>Add a to-do</Col>
      </Row>
    );
  } else {
    content = (
      <Row>
        <Col span={13}>
          <Input
            placeholder="Add your item here..."
            value={inputField}
            onChange={(e) => setInputField(e.target.value)}
          />
        </Col>
        <Col span={8}>
          <Calendar onChange={onChangeDate} value={inputDate} />
          {inputDate.toString().slice(0, 10)}
        </Col>
        <Col span={3}>
          <Button onClick={addTodoList} className="button">
            Add
          </Button>
        </Col>
      </Row>
    );
  }

  return (
    <div className="container">
      <Row justify="center">
        <Col xs={18} sm={18} md={15} lg={12} xl={12} xxl={12}>
          <Row>
            <div className="banner">
              <h1 className="title">To-Do</h1>
            </div>
          </Row>
          <Row>
            <List
              className="list"
              bordered
              dataSource={todoList}
              renderItem={(todo) => (
                <List.Item>
                  <Todo
                    todo={todo}
                    todoList={todoList}
                    setTodoList={setTodoList}
                  />
                </List.Item>
              )}
            />
          </Row>
          <Row>
            <p className="add-item">{content}</p>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default TodoList;
