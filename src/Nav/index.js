import React,{Component} from 'react';
import { PropTypes } from 'prop-types';
import { ToastAndroid, ScrollView, Platform, Animated, Easing,StyleSheet } from 'react-native';
import routes from '../routes';
import {
    ActionButton,
    Avatar,
    ListItem,
    Toolbar,
    BottomNavigation,
    Icon,
} from '../react-native-material-ui/src';

import { NavigationActions } from 'react-navigation';

import NavigationService from './NavigationService';


const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: 'lianxi'
        };
    }
    onNavigationPressed=(routeName)=>{
        this.setState({
            active:routeName
        });
        console.log(this.props.ref)
        console.log(this.props.navigation);
        // this.props.navigation.navigate(routeName);
        NavigationService.navigate(routeName);
    }
    render(){
        return(
            <BottomNavigation
            active={this.state.active}
            hidden={this.state.bottomHidden}
            style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
        >
            <BottomNavigation.Action
                key="lianxi"
                icon="book"
                label="练习"
                onPress={() => this.onNavigationPressed('lianxi')}
            />

            
            <BottomNavigation.Action
                key="shipin"
                icon="videocam"
                label="视频"
                onPress={() => this.onNavigationPressed('shipin')}
            />

            <BottomNavigation.Action
                key="chengji"
                icon="show-chart"
                label="成绩分析"
                onPress={() => this.onNavigationPressed('chengji')}
            />

            
            <BottomNavigation.Action
                key="button"
                icon="account-box"
                label="个人中心"
                onPress={() => this.onNavigationPressed('button')}
            />
        </BottomNavigation>
        )
        
    }
}
export default Nav;