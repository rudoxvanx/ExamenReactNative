import React,{ Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class Counter extends Component{
    constructor(props){
        super(props);

        this.state = {
            counter:0
        };

        this.handleUp = this.handleUp.bind(this)
        this.handleDown = this.handleDown.bind(this)
       
    }

    handleUp(){
        const { counter:ct } = this.state;
        this.setState({counter: ct + 1});
    }

    handleDown(){
        const { counter:ct } = this.state;
        this.setState({counter: ct - 1});
    }

    render(){
        const {counter} = this.state;
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.subcontainer}>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={this.handleDown}>
                            <Text style={styles.btnText}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.counterContainer}>
                            <Text style={styles.couter}>{counter}</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={this.handleUp}>
                            <Text style={styles.btnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'#34495e',
      justifyContent:'center'
    },
    
    subcontainer:{
      height:50,
      width:'100%',
      paddingHorizontal:10,
      flexDirection:'row'
    },

    btn:{
      width:50,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#ecf0f1'
    },

    btnText:{
      fontSize:18,
      color:'#7f8c8d',
      fontWeight:'bold'
    },
    counterContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    couter:{
      fontSize:40,
      color:'#fff',
      fontWeight:'bold'
    }

});
