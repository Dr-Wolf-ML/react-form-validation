import React, {setGlobal} from'reactn';
import ReactDOM from 'react-dom';
import addReactNDevTools from 'reactn-devtools';

import './index.css';
import App from './App';
import defaultGlobalState from "./defaultGlobalState";

addReactNDevTools();

setGlobal(defaultGlobalState).then();

ReactDOM.render(<App />, document.getElementById('root'));
