// screens/BlogDetails.js
import React, {useState, useEffect, Component } from 'react';

import { Button, View, Text, Animated,  AppRegistry,  PanResponder,TouchableHighlight,  StyleSheet,  TouchableOpacity, PixelRatio  } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import variabili from './variabili';

class BlogDetails extends Component {
	constructor(props) {
 		super(props);
		//const  navigation  = this.props.navigation;
		  this.state = { 		
							  
					
				 testesecuzione:false,		//indica il testo da far uscire tra prova e test
		};
	  	let texthtml='<h1>AAABAAAA</h1>';  
		let x="99";		
		}
		componentDidMount() {
			const { navigation } = this.props;
	
		  }

	 createhtmltest()
	{this.x="99";
		 this.texthtml='<h1>'+this.x+'</h1>';
		this.createPDF();
	}	  
		
	 
	 async createPDF() {
		let options = {
		  html: this.texthtml,
		  fileName: 'test',
		 
		};
	
		let file = await RNHTMLtoPDF.convert(options)
		// console.log(file.filePath);
		alert(file.filePath);
	  }


render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
       <Text>CIAO</Text>	 
	  
	   <TouchableHighlight onPress={this.createhtmltest()}>
          <Text style={styles.testobianco}>Create PDF</Text>
        </TouchableHighlight>

      </View>
	)
}
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: "center",
	  justifyContent: "center"
	},
	titleText: {
	  fontSize: 14,
	  lineHeight: 24,
	  fontWeight: "bold"
	},
	box: {
	  height:540,
	  width: 540,
	  backgroundColor: "black",
	  borderRadius: 1,
	 
	},
	testobianco: {
		fontWeight: "bold",
		marginVertical: 4,
		marginHorizontal: 4,
		fontSize:42,
		color: "white"
	  },
	  testoerr: {
		fontWeight: "bold",
		marginVertical: 4,
		marginHorizontal: 4,
		fontSize:28,
		color: "#FF0000",
		
	  },
  });

export default BlogDetails;