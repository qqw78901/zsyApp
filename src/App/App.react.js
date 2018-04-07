import React, { Component } from 'react';
import { NativeModules, StatusBar } from 'react-native';
import { COLOR, ThemeProvider } from '../react-native-material-ui';
import Container from '../Container';
import MainTabNavigator from '../routes';
// my own app route
import {AppTabNavigator} from '../routes';
import Nav from '../Nav';
import NavigationService from '../Nav/NavigationService';

const UIManager = NativeModules.UIManager;



class App extends Component {
    // static configureScene(route) {
    //     return route.animationType || Navigator.SceneConfigs.FloatFromRight;
    // }
    // static renderScene(route, navigator) {
    //     return (
    //         <Container>
    //             <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
    //             <View style={{ backgroundColor: COLOR.green500, height: 24 }} />
    //             <route.Page
    //                 route={route}
    //                 navigator={navigator}
    //             />
    //         </Container>
    //     );
    // }
    componentWillMount() {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    render() {
        return (
            <Container>
               <AppTabNavigator  ref={navRef => {NavigationService.setTopLevelNavigator(navRef);}}/>
               <Nav/>
            </Container>
 
        );
    }
}

export default App;
