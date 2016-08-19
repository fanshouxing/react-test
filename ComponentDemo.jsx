import React from 'react';

var ComponentDemo = React.createClass({
    getInitialState: function () {
        return {
            data: 0
        };
    },

    setNewNumber: function () {
        this.setState({data: this.state.data + 1})
    },
    render: function () {
        return(
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber= {this.state.data}></Content>
            </div>
        );

    }
})

var Content = React.createClass({
    componentWillMount: function () {
        console.log('Component WILL MOUNT!')
    },
    componentDidMount: function () {
        console.log('Component DID MOUNT!')
    },
    componentWillReceiveProps: function () {
        console.log('Component Will RECIEVE PROPS!')
    },
    shouldComponentUpdate: function () {
        return true;
    },
    componentWillUpdate:function (nextProps,nextState) {
        console.log('Component WILL UPDATE!');
    },
    componentDidUpdate: function (prevProps,prevState) {
        console.log('Component DID UPDATE')
    },
    componentWillUnmount: function () {
        console.log('Component WILL UMOUNT')
    },

    render: function () {
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
});

export default ComponentDemo
