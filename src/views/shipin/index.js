import { View, StyleSheet, Text,Button } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar } from '../../react-native-material-ui';

import Container from '../../Container';

const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class Shipin extends Component {
    _handleButtonPress=()=>{
        console.log(this.props)
        this.props.navigation.navigate('lianxi');
    }
    render() {
        return (
            <Container>
                <Card>
                    <View style={styles.textContainer}>
                        <Text>
                           视频
                        </Text>
                        <Button title="Press me" onPress={this._handleButtonPress} />
                    </View>
                </Card>
            </Container>
        );
    }
}

Shipin.propTypes = propTypes;

export default Shipin;
