import { View, StyleSheet, Text,Button as Btn } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { COLOR,Avatar, Card, ListItem, Toolbar,Button } from '../../react-native-material-ui';

import Container from '../../Container';

const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    btn:{
        marginHorizontal: 20,
        marginVertical: 100,
        marginBottom: 200,
    }
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class Shipin extends Component {
    _handleButtonPress=()=>{
        console.log(this.props)
        // this.props.navigation.navigate('lianxi');`
    }
    render() {
        return (
            <Container>
                <Card>
                    <View style={styles.textContainer}>
                        <Text>
                           视频
                        </Text>
                        <Button text="Press me" primary raised/>
                        <Btn title="Press me"  onPress={this._handleButtonPress} style={styles.btn}/>
                        <Btn title="Press me" color={COLOR.green700} onPress={this._handleButtonPress} style={styles.btn}/>
                    </View>
                </Card>
            </Container>
        );
    }
}

Shipin.propTypes = propTypes;

export default Shipin;
