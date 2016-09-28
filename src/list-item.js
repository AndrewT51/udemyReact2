var React = require('react');
var Firebase = require('firebase');

var listitem = React.createClass({
  getInitialState: function(){
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  handleDoneChange: function(e){
    var update = {done: e.target.checked};
    this.setState(update)
    this.fb.update(update)
  },
  handleTextChange: function(e){
    this.setState({
      text: e.target.value,
      textChanged: true
    })
  },
  changesButtons: function(){
    if(!this.state.textChanged){
      return null
    }else{
      return [
        <button 
          className="btn btn-default"
          onClick={this.handleSaveClick}
        >Save</button>,
        <button 
          className="btn btn-default"
          onClick={this.handleUndoClick}
        >Undo</button>
      ]
    }
  },
  handleUndoClick: function(){
    this.setState({
      text: this.props.item.text,
      textChanged: false
    })
  },
  handleSaveClick: function(){
    this.fb.update({text: this.state.text})
    this.setState({
      textChanged: false
    })

  },
  handleDeleteClick: function(){
    this.fb.remove()
  },
  componentWillMount: function(){
    console.log(this.props.item)
    this.fb = Firebase.database().ref('items/' + this.props.item.key);
  },
  render: function(){
    return (
      <div className="input-group">
        <span className="input-group-addon">
          <input 
            onChange={this.handleDoneChange} 
            checked={this.state.done}
            type="checkbox" 
          />
        </span>
        <input type="text" 
          disabled={this.state.done}
          onChange={this.handleTextChange}
          className="form-control"
          value={this.state.text}
          />
          <span className="input-group-btn">
          {this.changesButtons()}
            <button 
              className="btn btn-default"
              onClick={this.handleDeleteClick}
            >
            Delete
            </button>
          </span>
      </div>

    )
  }
})

module.exports = listitem;