import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + " component constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " component mounted");
  }

  render() {
    console.log(this.props.name + " component rendered");

    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className='user-card'>
        <h1>Count: {count} </h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Contact: @haseebyousuf</h3>
      </div>
    );
  }
}

export default UserClass;
