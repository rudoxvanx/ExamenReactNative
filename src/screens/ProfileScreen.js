import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,Image,Switch,FlatList,CheckBox
  } from 'react-native';

const dataSource = require('../../assets/intereses.json');

export default class ProfileScreen extends Component{
    constructor(){
      super();
      this.state = {
        switchValue:false,
        data:dataSource,
        checked:[],
      }
    }

    componentDidMount(){
      let {data,checked} = this.state;
      let initialCheck= data.map(x => false);
      this.setState({checked:initialCheck});
    }

    toggleSwitch = (value) => {
      this.setState({switchValue:value});
    }

    checkBoxTest = (index) => {
      let checked =[...this.state.checked];
      checked[index]= !checked[index];
      this.setState({checked});
      /*this.setState({
        check:!this.state.check
      })*/
    }

    render(){
      let {data,checked} =this.state;
      return (
        <>
          <View style={styles.containerProfile}>
              <Image style={styles.imgProfile} source={require('../../assets/profile.png')}/>
          </View>
        
          <View style={styles.containerInfo}>
              <Text style={styles.profileName}>Rodolfo Fabián</Text>
              <Text style={styles.profileDatail}>San Luis Potosí</Text>
              <Text style={styles.profileDatail}>Existe el Karma/Azul/Palomitas de queso</Text>

              <View style={styles.profileExtra}>
                  <Text style={styles.DetailExtra}>
                      Ver series (Sitcoms,anime,fantasía,dramas,etc)
                  </Text>
                  <Switch value={this.state.switchValue}
                          onValueChange={this.toggleSwitch} 
                          style={styles.switchBtn}/>
              </View>
              <View>
                  <FlatList 
                      //data={this.state.dataSource}
                      extraData={this.state}
                      data={data}
                      //data={[{interes:'Jugar futbol'},{interes:'Comer'},{interes:'Jugar futbol'},{interes:'Comer'}]}
                      keyExtractor={(item,index) => index.toString()}
                      renderItem={({item,index}) => {
                        return (
                            <View style={styles.contentItem}>
                                {/*<CheckBox value={this.state.check} onChange={()=>{this.checkBoxTest()}}/>*/}
                                <CheckBox value={checked[index]} onChange={() => {this.checkBoxTest(index)}}/>
                                <Text style={styles.textItem}>{`${item.interes}`}</Text>
                            </View>
                        );
                      }}              
                  />
                  <Text>Algo que nos quieras compartir</Text>
              </View>
          </View>
        </>
      );
    }

}

const styles = StyleSheet.create({
    containerProfile:{
        width:'100%',
        height:'35%',
        backgroundColor:'#bdc3c7',
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    },
    imgProfile:{
        width:100,
        height:'50%',
        borderRadius:50,
        position:'absolute',
        top:140
    },
    containerInfo:{
        paddingTop:40,
        padding:8,
    },
    profileName:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
    },
    profileDatail:{
      textAlign:'center',
      fontSize:15,
    },
    profileExtra:{
      width:'100%',
      //height:'50%',
      position:'relative'
    },
    switchBtn:{
      position:'absolute',
      alignSelf:'flex-end',
      padding:0,
      top:1
    },
    DetailExtra:{

    },
    contentItem:{
      display:"flex",
      flexDirection:'row'
    },
    textItem:{
      padding:5
    }
});