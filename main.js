import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import Counter from './StateDemo.jsx';
import Hello from './Hello.jsx';
import ComponentDemo from './ComponentDemo.jsx';
import UserGist from  './ReactAjax.jsx';
import TodoApp from './TodoApp.jsx';

ReactDOM.render(<App/>,document.getElementById('app'))

ReactDOM.render(<Counter/>,document.getElementById('message'))

ReactDOM.render(<Hello name="Wodrld"/>,document.getElementById('time'))

ReactDOM.render(<ComponentDemo/>,document.getElementById('componentdemo'))

ReactDOM.render(<UserGist source="https://1.1.1.1/health"/>,document.getElementById('ajaxdemo'))

ReactDOM.render(<TodoApp/>,document.getElementById('todo'))
