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
		 this.texthtml=`<head>

		 <!--css-->
		 
		 <style>
		 #para1 {
		  text-align: center;
		  font-family: Sans-serif; font: Helvetica;          
		  font-size: 200%;
		  font-weight: bold;
		 }
		 
		 body {
		  background-color: rgb(143, 224, 255);            
		  }
		  
		 div {
		   background-color: rgb(117, 198, 255);
		   width: 80%;
		   border: 10px solid rgb(129, 172, 252);      
		   border-radius: 1%;  
		   padding: 5%;
		   margin: 5%;
		 }
		 
		 
		 
		 #para2{
		 
			font-family: Sans-serif; font: Helvetica;     
			font-size: 100%;
		 
		 }
		 
		 
		 #Lunghezza2 {
		   font-family: Arial, Helvetica, sans-serif;                         /* tabelle delle Lunghezze */
		   border-collapse: collapse;
		   width: 10%;
		 }
		 
		 #Lunghezza2 td, #Lunghezza2 th {
		   border: 1px solid black;
		   padding: 10px;
		 }
		 
		 #Lunghezza2 tr:nth-child(even){background-color: white;}
		 
		 #Lunghezza2 th {
		   padding-top: 0;
		   padding-bottom: 10%;
		   text-align: left;
		   background-color: #00ccff;
		   color: white;
		 }
		 
		 #Lunghezza {
		   font-family: Arial, Helvetica, sans-serif;                         /* tabelle delle Lunghezze */
		   border-collapse: collapse;
		   width: 38%;
		 }
		 
		 #Lunghezza td, #Lunghezza th {
		   border: 1px solid black;
		   padding: 10px;
		 }
		 
		 #Lunghezza tr:nth-child(even){background-color: white;}
		 
		 #Lunghezza th {
		   padding-top: 0;
		   padding-bottom: 10%;
		   text-align: left;
		   background-color: #00ccff;
		   color: white;
		 }
		 #Diametri {
		   font-family: Arial, Helvetica, sans-serif;                            /* tabelle dei diametri */
		   border-collapse: collapse;
		   width: 50%;
		 }
		 
		 #Diametri td, #Diametri th {
		   border: 1px solid black;
		   padding: 8px;
		 }
		 
		 #Diametri tr:nth-child(even){background-color: white;}
		 
		 #Diametri th {
		   padding-top: 7px;
		   padding-bottom: 7px;
		   text-align: left;
		   background-color: #00ccff;
		   color:#f2f2f2;
		 }
		 div#logo {
		   background-color: white;
		   width: 1%;
		   padding: 1% 14% 1% 1%;
		   margin: 2% 10% 5% 40% 
		 }
		 </style>
		 
		 <!-- qua ci va il logo -->
		 <div id="logo">
		 <img class="logo" src="logoPZ.jpg" width="1400%" height="1500%">
		 </div>
		 
		 <div>
		 
		 <p id="para2"> ' +this.as_sesso / this.nome / this.cognome+ ' </p>
		 <p id="para2"> Data di nascita: ' +this.datanascita+ ' </p>
		 <br> <br>
		   </head>
		   <body>
			<p id="para1"> Arti Inferiori: </p> 
		  <br> <br>
		  
		 <!--Prima tabella và qui (arti inferiori)-->
		  <table id="Lunghezza2">
		 <tr>
		 <th> Lunghezza / ' +this.as_pz_lung+ ' </th>
		 </tr>
		 <tr>
		 <td> Var_Lunghezza / ' +this.al_pz_lung+ ' </td>
		 </tr>
		 </table>
		 <br> <br> <br>
		 
		  <img class="piede" src="piedespin.jpg" width="30%" height="60%" align="right">
		  
		 <table id="Diametri">    
		 <tr>
		 <th> Diametri </th>
		 <th> Dx(mm) </th>
		 <th> Sx(mm) </th>
		 </tr>
		 <tr>
		 <th> -20cm </th>
		 <td> ' +this.cir_dx__20+ ' </td>
		 <td> ' +this.cir_sx__20+ ' </td>
		 </tr>
		 <tr>
		 <th> -10cm </th>
		 <td> ' +this.cir_dx__10+ ' </td>
		 <td> ' +this.cir_sx__10+ ' </td>
		 </tr>
		 <tr>
		 <th> Ginocchio </th>
		 <td> ' +this.cir_dx_ginocchio+ ' </td>
		 <td> ' +this.cir_sx_ginocchio+ ' </td>
		 </tr>
		 <tr>
		 <th> +10cm </th>
		 <td> ' +this.cir_dx_10+ ' </td>
		 <td> ' +this.cir_sx_10+ ' </td>
		 </tr>
		 <tr>
		 <th> +20cm </th>
		 <td> ' +this.cir_dx_20+ '  </td>
		 <td> ' +this.cir_sx_20+ ' </td>
		 </tr>
		 <tr>
		 <th> caviglia </th>
		 <td> ' +this.cir_dx_caviglia+ ' </td>
		 <td> ' +this.cir_sx_caviglia+ ' </td>
		 </tr>
		 <tr>
		 <th> MTT </th>
		 <td> ' +this.cir_dx_piede+ ' </td>
		 <td> ' +this.cir_sx_piede+ ' </td>
		 </tr>
		 </table>
		 </div2>
		 <br> <br> <br> <br>
		 <!--Seconda tabella arti inferiori (và qui)-->
		 <p id="para2"> Valutazione volumetrica dell'arto inferiore su base antropometrica (De Leva, 1996) </p>
		 <br> <br> <br>
		 <table id="Lunghezza">
		 <tr>
		 <th> </th>
		 <th> Totale </th>
		 <th> Coscia </th>
		 <th> Gamba </th>
		 <th> Piede </th>
		 </tr>
		 <tr>
		 <th> Arto inferiore dx (L) </th>
		 <td> getdx_tot() </td>
		 <td> getdx_coscia() </td>
		 <td> getdx_gamba() </td>
		 <td> getdx_piede() </td>
		 </tr>
		 <tr>
		 <th> Arto inferiore sx (L) </th>
		 <td> getsx_tot() </td>
		 <td> getsx_coscia() </td>
		 <td> getsx_gamba() </td>
		 <td> getsx_piede() </td>
		 </tr>
		 <tr>
		 <th> Differenza (L) </th>
		 <td> getdiff1_tot() </td>
		 <td> getdiff2_coscia() / getdiff1_coscia() </td>
		 <td> getdiff2_gamba() / getdiff1_gamba() </td>
		 <td> getdiff2_piede() / getdiff1_piede() </td>
		 </tr>
		 <tr>
		 <th> Differenza (%) </th>
		 <td> getpercento_tot() </td>
		 <td> getpercento_coscia() </td>
		 <td> getpercento_gamba() </td>
		 <td> getpercento_piede() </td>
		 </tr>
		 </table>
		 </div>
		 `;
		this.createPDF();
	}	
	createhtmltest2()
	{this.x="99";
		 this.texthtml2=`<head>

		 <!--css-->
		 
		 <style>
		 #para1 {
		  text-align: center;
		  font-family: Sans-serif; font: Helvetica;          
		  font-size: 200%;
		  font-weight: bold;
		 }
		 
		 body {
		  background-color: rgb(143, 224, 255);            
		 
		  }
		  
		 div {
		   background-color: rgb(117, 198, 255);
		   width: 80%;
		   border: 10px solid rgb(129, 172, 252);      
		   border-radius: 1%;  
		   padding: 5%;
		   margin: 5%;
		 }
		 
		 
		 
		 #para2{
		 
			font-family: Sans-serif; font: Helvetica;     
			font-size: 100%;
		 
		 }
		 
		 
		 #Lunghezza2 {
		   font-family: Arial, Helvetica, sans-serif;                         /* tabelle delle Lunghezze */
		   border-collapse: collapse;
		   width: 10%;
		 }
		 
		 #Lunghezza2 td, #Lunghezza2 th {
		   border: 1px solid black;
		   padding: 10px;
		 }
		 
		 #Lunghezza2 tr:nth-child(even){background-color: white;}
		 
		 #Lunghezza2 th {
		   padding-top: 0;
		   padding-bottom: 10%;
		   text-align: left;
		   background-color: #00ccff;
		   color: white;
		 }
		 
		 #Lunghezza {
		   font-family: Arial, Helvetica, sans-serif;                         /* tabelle delle Lunghezze */
		   border-collapse: collapse;
		   width: 38%;
		 }
		 
		 #Lunghezza td, #Lunghezza th {
		   border: 1px solid black;
		   padding: 10px;
		 }
		 
		 #Lunghezza tr:nth-child(even){background-color: white;}
		 
		 
		 #Lunghezza th {
		   padding-top: 0;
		   padding-bottom: 10%;
		   text-align: left;
		   background-color: #00ccff;
		   color: white;
		 }
		 #Diametri {
		   font-family: Arial, Helvetica, sans-serif;                            /* tabelle dei diametri */
		   border-collapse: collapse;
		   width: 50%;
		 }
		 
		 #Diametri td, #Diametri th {
		   border: 1px solid black;
		   padding: 8px;
		 }
		 
		 #Diametri tr:nth-child(even){background-color: white;}
		 
		 
		 #Diametri th {
		   padding-top: 7px;
		   padding-bottom: 7px;
		   text-align: left;
		   background-color: #00ccff;
		   color:#f2f2f2;
		 }
		 div#logo {
		   background-color: white;
		   width: 1%;
		   padding: 1% 14% 1% 1%;
		   margin: 2% 10% 5% 40%
		 }
		 
		 </style>
		 
		 <div id="logo">
		 <img class="logo" src="logoPZ.jpg" width="1400%" height="1500%">
		 </div>
		 
		 <div>
		 <p id="para2"> ' +this.as_sesso / this.nome / this.cognome+ ' </p>
		 <p id ="para2"> Data di nascita: this.datanascita </p> 
		 <br> <br> <br>
		 
		 
		 <p id="para1"> Arti Superiori: </p>
		 
		 <table id="Lunghezza2">
		 <tr>             
		 <th> Lunghezza ' +this.as_pz_lung+ '  </th>         <!--mini tabella va qua-->
		 </tr>
		 <tr>
		 <td> Var_Lunghezza ' +this.al_pz_lung+ '  </td>
		 </tr>
		 </table>
		 <br> <br>
		 <img src ="manospin.png" align="right">
		 <table id="Diametri">
		 <tr>
		 <th> Diametri </th>          <!-- Prima tabella degli arti superiori và qua-->
		 <th> Dx(mm) </th>
		 <th> Sx(mm) </th>
		 </tr>
		 <tr>
		 <th> -14cm </th>
		 <td> ' +this.as_cir_dx__14+ ' </td>
		 <td> ' +this.as_cir_sx__14+ ' </td>
		 </tr>
		 <tr>
		 <th> -7cm </th>
		 <td> ' +this.as_cir_dx__7+ ' </td>
		 <td> ' +this.as_cir_sx__7+ ' </td>
		 </tr>
		 <tr>
		 <th> Gomito </th>
		 <td> ' +this.as_cir_dx_gomito+ ' </td>
		 <td> ' +this.as_cir_sx_gomito+ ' </td>
		 </tr>
		 <tr>
		 <th> +7cm </th>
		 <td> ' +this.as_cir_dx_7+ ' </td>
		 <td> ' +this.as_cir_sx_7+ ' </td>
		 </tr>
		 <tr>
		 <th> +14cm </th>
		 <td> ' +this.as_cir_dx_14+ ' </td>
		 <td> ' +this.as_cir_sx_14+ ' </td>
		 </tr>
		 <tr>
		 <th> Polso </th>
		 <td> ' +this.as_cir_dx_polso+ ' </td>
		 <td> ' +this.as_cir_sx_polso+ ' </td>
		 </tr>
		 <tr>
		 <th> MTC </th>
		 <td> ' +this.as_cir_dx_mano+ ' </td>
		 <td> ' +this.as_cir_sx_mano+ ' </td>
		 </tr>
		 </table>
		 
		 <br> <br> <br> <br>
		 <p id="para2"> Valutazione volumetrica dell'arto superiore su base antropometrica (De Leva, 1996) </p>
		 <br> <br> <br>
		 
		 
		 <table id="Lunghezza">
		 <tr>
		 <th> </th>
		 <th> Totale </th>
		 <th> Braccio </th>
		 <th> Avambraccio </th>
		 <th> Mano </th>
		 </tr>
		 <tr>
		 <th> Arto superiore dx (L) </th>
		 <td> getas_dx() </td>
		 <td> getas_sx() </td>
		 <td> getas_avambraccio_dx() </td>
		 <td> getas_mano_dx() </td>
		 </tr>
		 <tr>
		 <th> Arto superiore sx (L) </th>
		 <td> getas_braccio_dx() </td>
		 <td> getas_braccio_sx() </td>
		 <td> getas_avambraccio_sx() </td>
		 <td> getas_mano_sx() </td>
		 </tr>
		 <tr>
		 <th> Differenza (L) </th>
		 <td> getas_diff1() / getas_diff2() </td>
		 <td> getas_braccio_diff2() / getas_braccio_diff1() </td>
		 <td> getas_avambraccio_diff2 / getas_avambraccio_diff1 </td>
		 <td> getas_mano_diff2() / getas_mano_diff1() </td>
		 </tr>
		 <tr>
		 <th> Differenza (%) </th>
		 <td> getas_percento() </td>
		 <td> getas_braccio_percento() </td>
		 <td> getas_avambraccio_percento() </td>
		 <td> getas_mano_percento() </td>
		 </tr>
		 </table>
		 
		 </div>`;
		this.createPDF2();
	}  
		
	 
	 async createPDF() {
		let options = {
		  html: this.texthtml,
		  fileName: 'Risultati',
		 
		};
	
		let file = await RNHTMLtoPDF.convert(options)
		// console.log(file.filePath);
		alert(file.filePath);
	  }
	 

	 async createPDF() {
		let options = {
		  html: this.texthtml2,
		  fileName: 'Risultati2',
 
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