import React from 'react';
var UserGist = React.createClass({
    getInitialState: function () {
        return{
            description: '',
            status: ''
        };
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source,function (result) {
            this.setState({
                description: result.description,
                status: result.status
            });
        }.bind(this));
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    render: function () {
        return(
            <div>
                {this.state.description}
                {this.state.status}
            </div>
        );
    }
});

export default UserGist