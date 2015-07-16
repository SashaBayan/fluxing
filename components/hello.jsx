var Clicker = React.createClass({
  getInitialState: function(){
    return {count: 0}
  },

  increment: function(){
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count);
  },

  render: function(){
    return (
      <button onClick={this.increment}> Click Me! </button>
    );
  }
})

React.render(<Clicker />, document.getElementById('main'));