import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import todosData from './data/todosData'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  
  date() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
      fontSize: 30
    }
    
    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "#8914A3"
    } else {
      timeOfDay = "night"
      styles.color = "#D90000"
    }

    return [styles, timeOfDay]
  }

  render() {
    const data = this.state.todos.map(todo => <TodoItem key={todo.id} item={todo} />)
    const [styles, timeOfDay] = this.date()
    return (
      <div className="todo-list">
        <h1 style={styles}>Good {timeOfDay}!</h1>

        {data}
      
      </div>
    );
  }
  
}

export default App;
