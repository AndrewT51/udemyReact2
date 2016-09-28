var React = require('react');

var header = React.createClass({
  handleClick: function(){
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    })
    this.setState({text: ''})
  },

  handlePress: function(e){
    this.setState({
      text: e.target.value
    })
  },
  getInitialState: function(){
    return {
      text: ''
    }
  },
  render: function(){
    return (
      <div className="input-group">
        <input 
          onChange={this.handlePress}
          value={this.state.text}
          type="text" 
          className="form-control" />
        <span className="input-group-btn">
          <button
            onClick={this.handleClick}

            className="btn btn-default" 
            type="button">
            Add
          </button>
        </span>
      </div>
    )
  }
})

module.exports = header;