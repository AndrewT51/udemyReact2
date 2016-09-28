var React = require('react');
var ListItem = require('./list-item')

var list = React.createClass({
  render: function(){
  console.log(this.props.items)
    return (
      <div>
        {this.renderList()}
      </div>
    )
  },
  renderList: function(){
    if(!this.props.items){
      return (
        <h4>
          Add a todo to get started.
        </h4>
      )
    }else {
      var children = [];
      for(var key in this.props.items){
        var item =  this.props.items[key];
        item.key = key;
        children.push(
          <ListItem 
            item={item}
            key={key}
          >
          </ListItem>
        )
      }
      return children;
    }
  }
})

module.exports = list;
