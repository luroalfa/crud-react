import React from 'react'
import shortid from 'shortid'

function App() {
  const [task, setTask] = React.useState('')
  const [listTask, setListTask] = React.useState([])



  // Funtion
  const addTask = e => {
    e.preventDefault() //*Prevent the form from being processed
    if (!task.trim()) {
      console.log('Elemento vacio')
      return
    }
    console.log(task)

    setListTask([
      ...task,
      { id: shortid.generate(), nameOfTask: task }
    ])
    setTask('')
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">HOMEWORK</h1>
      <hr />
      <div className="row">

        <div className="col-8">
          <h4 className="text-center">Things to do</h4>
          <ul className="list-group">
            <li className="list-group-item" >
              <span className="lead">Task #1</span>
              <button
                className="btn btn-sm btn-danger float-right mx-2"
              >Remove</button>
              <button
                className="btn btn-sm btn-warning float-right"
              >Edit</button>
            </li>
          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">Add Task</h4>
          <form onSubmit={addTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter Task"
              onChange={e => setTask(e.target.value)}
              value={task}
            />
            <button className="btn btn-dark btn-block" type="submit">Add</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
