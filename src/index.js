import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


const startApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}

// --- Para Cordova
if(!window.cordova) {
    startApp();
} else {
    document.addEventListener('deviceready', startApp, false);
}

