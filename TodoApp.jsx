import React from 'react';

var TodoList = React.createClass({
    render: function () {
        var createItem = function (itemText) {
            return(
             <li>{itemText}</li>
            )
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

var TodoApp = React.createClass({
    getInitialState: function () {
        return {items: [],text: ''};
    },
    onChange: function (event) {
        this.setState({text: event.target.value});
    },
    handleSubmit: function (event) {
        event.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems,text:nextText});
    },
    render: function () {
        return(
            <div>
                <h2>TODO</h2>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{'Add #'+(this.state.items.length +1)}</button>
                </form>
            </div>
        );
    }
});
export default TodoApp