import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const {
      onAdd,
      onDecrement,
      onReset,
      counters,
      onDelete,
      onIncrement
    } = this.props;
    return (
      <div>
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add Item
        </button>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset Cart
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
