import React, {Component} from 'reactn';
import Form from './components/Form';

import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

class App extends Component {

    render() {
        return (
            <ScopedCssBaseline>
                <Form/>
            </ScopedCssBaseline>
        );
    }
}

export default App;
