import { Alert,View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import { Checkbox } from 'react-native-material-design';

import { COLOR,Avatar, Card, ListItem, Toolbar, RadioButton,Checkbox } from '../../react-native-material-ui';

import Container from '../../Container';


const styles = StyleSheet.create({
    questionOrder:{
        marginLeft: 200,
        color:COLOR.blue500
    },
    
    question:{
        fontSize:16,
        lineHeight:32,
        color:COLOR.grey800
    },
    titleContainer:{
        flex: 1,
        flexDirection: 'column',
        marginVertical: 30,
       
    },
    answerContainer:{
        flex: 5,
        flexDirection: 'column',
    },
    innerTitle:{
        paddingVertical: 10,
        paddingHorizontal: 25,
    }
   
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
            checked:false,
            radioButtonSelected:""
        }
        console.log("lianxi")
    }
    radioButtonSelected=(value)=>{
        this.setState({
            radioButtonSelected:value
        });
        Alert.alert(value);
    }
    render() {
        return (
            <Container>
                 <Card>
                     <View style={styles.innerTitle}>
                        <Text style={styles.question}><Text style={styles.questionOrder}>第<Text style={{fontWeight:'bold'}}>70</Text>题：</Text>男性，42岁。反复双手近端指间关节、双膝关节肿痛3年余，伴晨僵。查RF 96ku/L，ESR 44mm/hr，拟诊类风湿性关节炎，下列较少出现的X线表现为：</Text>
                     </View>
                </Card>
                <View style={styles.answerContainer}>
                    <RadioButton label="A:关节骨性强直" value="A" checked={this.state.radioButtonSelected==='A'}  onSelect={this.radioButtonSelected} />
                    <RadioButton label="B:关节间隙狭窄" value="B" checked={this.state.radioButtonSelected==='B'} onSelect={this.radioButtonSelected} />
                    <RadioButton label="C:关节面穿凿样破坏" value="C" checked={this.state.radioButtonSelected==='C'} onSelect={this.radioButtonSelected} />
                    <RadioButton label="D:容易发生心力衰竭" value="D" checked={this.state.radioButtonSelected==='D'} onSelect={this.radioButtonSelected}  />
                    <RadioButton label="E:血管阻力大多数为高肾素型" value="E"  checked={this.state.radioButtonSelected==='E'} onSelect={this.radioButtonSelected}  />
                </View>
            </Container>
        );
    }
}

Lianxi.propTypes = propTypes;

export default Lianxi;
