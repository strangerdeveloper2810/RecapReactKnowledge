import React, { Component } from "react";
import { Container } from "./Components/Container";
import { Dropdown } from "./Components/Dropdown";
import { Heading2 } from "./Components/Heading";
import { Table, Tbody, Th, Tr } from "./Components/Table";
import { TextField } from "./Components/TextField";
import { Button } from "./Components/Button";
import { ThemeProvider } from "styled-components";
import { arrTheme } from "./Themes/ThemeManager";
import { connect } from "react-redux";
import {
  addTaskAction,
  deleteTaskAction,
  doneTaskAction,
  changeThemeAction,
  editTaskAction,
  updateTaskAction,
} from "../../redux/actions/TodolistActions";
class Todolist extends Component {
  state = {
    taskName: "",
    disable: true,
  };

  renderTaskToDo = () => {
    const { taskList } = this.props;
    return taskList
      .filter((task) => task.done !== true)
      .map((task, index) => (
        <Tr key={index}>
          <Th>{task.taskName}</Th>
          <Th className="text-end">
            <Button
              className="btn btn-info bg-gradient ms-3"
              onClick={() => {
                this.setState(
                  {
                    disable: false,
                  },
                  () => {
                    this.props.dispatch(editTaskAction(task));
                  }
                );
              }}
            >
              <i className="fa fa-edit"></i>
            </Button>

            <Button
              className="btn btn-success bg-gradient ms-3"
              onClick={() => {
                this.props.dispatch(doneTaskAction(task.id));
              }}
            >
              <i className="fa fa-check"></i>
            </Button>

            <Button
              className="btn btn-danger bg-gradient ms-3"
              onClick={() => {
                this.props.dispatch(deleteTaskAction(task.id));
              }}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </Th>
        </Tr>
      ));
  };

  renderTaskCompleted = () => {
    const { taskList } = this.props;
    return taskList
      .filter((task) => task.done === true)
      .map((task, index) => (
        <Tr key={index}>
          <Th>{task.taskName}</Th>
          <Th className="text-end">
            <Button
              className="btn btn-danger bg-gradient ms-3"
              onClick={() => {
                this.props.dispatch(deleteTaskAction(task.id));
              }}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </Th>
        </Tr>
      ));
  };

  renderTheme = () => {
    return arrTheme.map((theme, index) => (
      <option key={index} value={theme.id}>
        {theme.name}
      </option>
    ));
  };

  // lifecycle tĩnh không truy xuất được bằng con trỏ this
  // static getDerivedStateFromProps (newProps, currentState) {
  //   // newProps: là props mới, props cũ là this.props(Không truy xuất được)
  //   // currentState: là state hiện tại ứng với this.state

  //   // Hoặc trả về state mới this.state
  //   let newState = {...currentState, taskName: newProps.taskEdit.taskName};
  //   return newState;
  //   // Trả về null thì state giữ nguyên
  //   // return null;
  // }

  render() {
    return (
      <ThemeProvider theme={this.props.themeDefault}>
        <Container className="w-75">
          <Dropdown
            onChange={(event) => {
              let { value } = event.target;
              this.props.dispatch(changeThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>

          <Heading2 className="mt-2">To Do List </Heading2>
          <TextField
            label="Task Name"
            className="w-50"
            value={this.state.taskName}
            onChange={(event) => {
              this.setState({
                taskName: event.target.value,
              });
            }}
          ></TextField>

          <Button
            className="btn btn-primary bg-gradient ms-3 mb-2"
            onClick={() => {
              let { taskName } = this.state;
              let newTask = {
                id: Date.now(),
                taskName: taskName,
                done: false,
              };
              this.props.dispatch(addTaskAction(newTask));
            }}
          >
            <i className="fa fa-plus"></i> ADD TASK
          </Button>

          {this.state.disable ? (
            <Button
              disable
              className="btn btn-success bg-gradient ms-3 mb-2"
              onClick={() => {
                this.props.dispatch(updateTaskAction(this.state.taskName));
              }}
            >
              <i className="fa fa-upload"></i> UPDATE TASK
            </Button>
          ) : (
            <Button
              className="btn btn-success bg-gradient ms-3 mb-2"
              onClick={() => {
                let {taskName} = this.state;
                this.setState(
                  {
                    disable: true,
                    taskName: ""
                  },
                  () => {
                    this.props.dispatch(updateTaskAction(taskName));
                  }
                );
              }}
            >
              <i className="fa fa-upload"></i> UPDATE TASK
            </Button>
          )}

          <hr />
          <Heading2>Task To Do</Heading2>
          <Table>
            <Tbody>{this.renderTaskToDo()}</Tbody>
          </Table>

          <hr />

          <Heading2>Task Complete</Heading2>
          <Table>
            <Tbody>{this.renderTaskCompleted()}</Tbody>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  // Đây là lifecycle trả về props cũ và state cũ của component trước khi render (lifecycle chạy sau render)
  componentDidUpdate(prevProps, prevState) {
    // So sánh nếu như props trước đó (taskEdit trước mà khác với taskEdit hiện tại thì mình mới setState)

    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => ({
  themeDefault: state.TodolistReducer.themeDefault,
  taskList: state.TodolistReducer.taskList,
  taskEdit: state.TodolistReducer.taskEdit,
});

export default connect(mapStateToProps)(Todolist);
