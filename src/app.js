import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


class OldSyntax {
    constructor () {
        this.name = 'Mike';
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));