import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar } from '../../react-native-material-ui';

import Container from '../../Container';

const styles = StyleSheet.create({
    textContainer: {
        height:50,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class Chengji extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <View style={styles.textContainer}>
                        <Text>
                           成绩
                        </Text>
                    </View>
                </Card>
            </Container>
        );
    }
}

Chengji.propTypes = propTypes;

export default Chengji;
