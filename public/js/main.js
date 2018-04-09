import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/configureStore'

import Conversion from './components/conversion.js';

class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <Conversion />
            </div>
        )
    }
}


ReactDOM.render(<Provider store={store}><MainComponent /></Provider>, document.getElementById('container'));
