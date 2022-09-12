import React, { Component } from "react";
import { Button } from "./Components/Button";
import { Container } from "./Components/Container";
import { Dropdown } from "./Components/Dropdown";
import { Heading3 } from "./Components/Heading";
import { Table, Tbody, Th, Tr } from "./Components/Table";
import { TextField } from "./Components/TextField";
export default class Todolist extends Component {
  render() {
    return (
      <Container className="w-50">
        <Dropdown>
          <option>Dark Theme</option>
          <option>Light Theme</option>
          <option>Primary Theme</option>
        </Dropdown>

        <Heading3>To Do List</Heading3>

        <TextField className="w-50 " label="Task name"></TextField>

        <Button className="btn btn-outline-secondary ms-3">
          <i className="fa fa-plus"></i>
          ADD TASK
        </Button>

        <Button className="btn btn-outline-secondary ms-3">
          <i className="fa fa-upload"></i>
          UPDATE TASK
        </Button>

        <hr />

        <Heading3>Task To Do</Heading3>

        <Table>
          <Tbody>
            <Tr>
              <Th>Learn VueJS</Th>
              <Th>
                <Button className="btn btn-outline-secondary me-3">
                  <i className=" fa fa-edit"></i>
                </Button>
                <Button className="btn btn-outline-secondary me-3">
                  <i className="fa fa-check"></i>
                </Button>
                <Button className="btn btn-outline-secondary me-3">
                  <i className="fa fa-trash"></i>
                </Button>
              </Th>
            </Tr>

            <Tr>
              <Th>Learn Angular</Th>
              <Th>
                <Button className="btn btn-outline-secondary me-3">
                  <i className="fa fa-edit"></i>
                </Button>
                <Button className="btn btn-outline-secondary me-3">
                  <i className="fa fa-check"></i>
                </Button>
                <Button className="btn btn-outline-secondary me-3">
                  <i className="fa fa-trash"></i>
                </Button>
              </Th>
            </Tr>
          </Tbody>
        </Table>

        <hr />

        <Heading3>Task Completed</Heading3>

        <Table>
          <Tbody>
            <Tr>
              <Th>Learn ReactJS</Th>
              <Th>
                <Button className="btn btn-outline-secondary me-3">
                  <i className="fa fa-trash"></i>
                </Button>
              </Th>
            </Tr>

            <Tr>
              <Th>Learn NodeJS</Th>
              <Th>
                <Button className="btn btn-outline-secondary me-3">
                  <i className="fa fa-trash"></i>
                </Button>
              </Th>
            </Tr>
          </Tbody>
        </Table>
      </Container>
    );
  }
}
