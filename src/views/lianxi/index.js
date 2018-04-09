import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import { Checkbox } from 'react-native-material-design';

import { Avatar, Card, ListItem, Toolbar, RadioButton,Checkbox } from '../../react-native-material-ui';

import Container from '../../Container';


const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class Lianxi extends Component {
    constructor(props){
        super(props);
        this.state={
            checked:true
        }
        console.log("lianxi")
    }
    render() {
        return (
            <Container>
                <View style={styles.textContainer}>
                    <Checkbox label="I Agree" value="agree" checked={true} onCheck={() => { }} />
                    <Checkbox label="I Agree" value="agree" checked={true} onCheck={() => { }} />
                    <Checkbox label="I Agree" value="agree" checked={true} onCheck={() => { }} />
                </View>
            </Container>
        );
    }
}

Lianxi.propTypes = propTypes;

export default Lianxi;
