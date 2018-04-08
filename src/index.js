import { AppRegistry } from 'react-native';
import React, { Component } from 'react';

import App from './App/App.react';
import { COLOR, ThemeProvider } from './react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green600,
        accentColor: COLOR.pink500,
    },
};
export default function index() {
    class Root extends Component {
        render() {
            return (
            <ThemeProvider uiTheme={uiTheme}>
                <App />
            </ThemeProvider>
                
            );
        }
    }

    AppRegistry.registerComponent('example', () => Root);
}
