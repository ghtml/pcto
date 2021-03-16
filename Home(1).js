// screens/Home.js

import React, { Component ,useEffect } from 'react';
import { StyleSheet, View, Text,Image,Dimensions,Button } from 'react-native';
import Variabili from './variabili';

class Home extends Component {
  constructor(){
    super()
this.state={
   elenco:null,
 
}}
provacalcoli()
{
  var variabil=new Variabili("marco","pippo","12/2/1987",569,30,45,4,45,55,55,55,55,55,55,55,55,66,66,66,66,66,66,55,5,5,66,55,55,77,77,77,88,77);
  console.log(variabil.gettrcono_diff_caviglia());
  //console.log(variabil.gettrcono_sx__20());
  console.log(variabil.gettrcono_dx_caviglia());

  console.log(variabil.avambraccio_3 ,variabil.getr_dx_caviglia() ^ 2, variabil.getr_dx_20() ^ 2, variabil.getr_dx_caviglia(), variabil.getr_dx_20());
  
// + this.gettrcono_diff_piede()

  

}

render() {
    return (
      <View >
       <Text style={{color:'#FF0000'}}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
        <Button
          title="Inserici"          
          onPress={() => this.props.navigation.navigate('Blog')}
        />
             <Button
          title="PDF"          
          onPress={() => this.props.navigation.navigate('BlogDetails')}
        /> 
            <Button
          title="prova calcoli"          
          onPress={() => this.provacalcoli()}
        /> 

      </View>
      
    );
  }
}  

export default Home;