import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    sum: 0
  };

  constructor() {
    super();
    console.log("App-Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleAddCounter = () => {
    console.log("Called handleAddCounter");
    var currentCounters = this.state.counters;
    const newId = currentCounters[currentCounters.length - 1].id + 1;
    const newCounter = { id: newId, value: 0 };
    currentCounters.push(newCounter);
    const counters = currentCounters;
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //spread syntax
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    const sum = this.state.sum + 1;
    this.setState({ counters, sum });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters]; //spread syntax
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
      const sum = this.state.sum - 1;
      this.setState({ counters, sum });
    }
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    var sum = 0;
    for (var i = 0; i < counters.length; i++) {
      sum += counters[i].value;
    }
    this.setState({ counters, sum });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    const sum = 0;
    this.setState({ counters, sum });
  };

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalItems={this.state.sum}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onAdd={this.handleAddCounter}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
