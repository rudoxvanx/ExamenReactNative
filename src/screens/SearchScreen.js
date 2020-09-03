import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,TextInput,FlatList
  } from 'react-native';

export default class SearchScreen extends Component{
    constructor(){
      super();

      this.state = {
        query:null,
        dataSource:[],
        dataBackup:[]
      }

      console.log('Este es el objeto this************************',this,'FINAL *************************');
    }

    componentDidMount() {
      let data = [{nombre:'Android'},{nombre:'C++'},{nombre:'Java'},{nombre:'JavaScript'},{nombre:'Kotlin'},{nombre:'PHP'},{nombre:'Swift'}];
      this.setState({dataBackup:data,dataSource:data});
    
    }

    filterItem = event => {
      let query = event.nativeEvent.text;
      this.setState({query:query});
      
      if(query == ''){
        console.log('Hola1');
        this.setState({
          dataSource:this.state.dataBackup
        })
      }else{
        let data = this.state.dataBackup;
        query = query.toLowerCase();
        query.search('\\+')===-1
        ?data = data.filter(l => l.nombre.toLowerCase().match(query))
        :data = data.filter(l => l.nombre.toLowerCase().match('\\+'))
        this.setState({dataSource:data,});
      }
    };

    separator = () => {
      return (
        <View style={{height:10,width:'100%',backgroundColor:'#e5e5e5'}}></View>
      )
    }
    render(){
      console.disableYellowBox = true;
      return (
        <View style={styles.container}>
         
          <View style={styles.header}>
              <TextInput
                placeholder='Enter text'
                placeholderTextColor='gray'
                value={this.state.query}
                onChange={this.filterItem.bind(this)}
                style={styles.input}>
              </TextInput>
          </View>
          <FlatList 
            data={this.state.dataSource}
            ItemSeparatorComponent={() => this.separator()}
            renderItem={({item,index}) => {
              return (
                <View style={styles.lenguagesContainer}>
                  <View style={styles.dataContainer}>
                      <Text>{item.nombre}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    header:{
      marginTop:25,
      height:80,
      width:'100%',
      backgroundColor:'#bdc3c7',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',

    },
    input:{
      height:45,
      width:'90%',
      backgroundColor:'#fff',
      borderRadius:20,
      padding:5,
      paddingLeft:10
    },
    lenguagesContainer:{
      flexDirection:'row',
      padding:5
    },
    dataContainer:{
      padding:10,
      paddingTop:5
    }

});