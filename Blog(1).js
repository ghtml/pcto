import React, { Component } from 'react';
import { View, ScrollView, StyleSheet
} from 'react-native';
import { Button,Text,Input,Icon,Tooltip,ButtonGroup } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

import Variabili from './variabili';

class Blog extends Component {
    constructor(props) {  
    super(props);
    //const  navigation  = this.props.navigation;
      this.state = { 
                 selectedId:0,
                 elenco:null,
                 selPersona:new Variabili("","","","",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
                 sesso_index:0,
                 mostra_dtnas:false,
                 dt_nas_picker:new Date(),                  
      };
      
      this.updateSessoindex = this.updateSessoindex.bind(this);
       this.onChangeDt = this.onChangeDt.bind(this);
       this.onchg_cognome = this.onchg_cognome.bind(this);
       this.onchg_nome = this.onchg_nome.bind(this);
       this.onchg_data_nascita = this.onchg_data_nascita.bind(this);
       this.onchg_as_pz_lung = this.onchg_as_pz_lung.bind(this);
       this.onchg_dx_meno14= this.onchg_dx_meno14.bind(this);
       this.onchg_dx_meno7 = this.onchg_dx_meno7.bind(this);
       this.onchg_dx_gomito = this.onchg_dx_gomito.bind(this);
       this.onchg_dx_7 = this.onchg_dx_7.bind(this);
       this.onchg_dx_14 = this.onchg_dx_14.bind(this);
       this.onchg_dx_polso = this.onchg_dx_polso.bind(this);
       this.onchg_dx_mano = this.onchg_dx_mano.bind(this);
       this.onchg_sx_meno14= this.onchg_sx_meno14.bind(this);
       this.onchg_sx_meno7 = this.onchg_sx_meno7.bind(this);
       this.onchg_sx_gomito = this.onchg_sx_gomito.bind(this);
       this.onchg_sx_7 = this.onchg_sx_7.bind(this);
       this.onchg_sx_14 = this.onchg_sx_14.bind(this);
       this.onchg_sx_polso = this.onchg_sx_polso.bind(this);
       this.onchg_sx_mano = this.onchg_sx_mano.bind(this);
       this.onchg_Al_pz_lung = this.onchg_Al_pz_lung.bind(this);
       this.onchg_dx_meno20 = this.onchg_dx_meno20.bind(this);
       this.onchg_dx_meno10 = this.onchg_dx_meno10.bind(this);
       this.onchg_dx_ginocchio = this.onchg_dx_ginocchio.bind(this);
       this.onchg_dx_10 = this.onchg_dx_10.bind(this);
       this.onchg_dx_20 = this.onchg_dx_20.bind(this);
       this.onchg_dx_caviglia = this.onchg_dx_caviglia.bind(this);
       this.onchg_dx_piede = this.onchg_dx_piede.bind(this);
       this.onchg_sx_meno20 = this.onchg_sx_meno20.bind(this);
       this.onchg_sx_meno10 = this.onchg_sx_meno10.bind(this);
       this.onchg_sx_ginocchio = this.onchg_sx_ginocchio.bind(this);
       this.onchg_sx_10 = this.onchg_sx_10.bind(this);
       this.onchg_sx_20 = this.onchg_sx_20.bind(this);
       this.onchg_sx_caviglia = this.onchg_sx_caviglia.bind(this);
       this.onchg_sx_piede = this.onchg_sx_piede.bind(this); 


    }

    componentDidMount() 
      {
      this.caricasesso();
      }

      caricasesso()
      {
        if (this.state.selPersona)
        {
          if (this.state.selPersona.sesso=='M')
          this.setState({sesso_index:0});
            else
            this.setState({sesso_index:1});

        }
      }
    

     updateSessoindex(selectedIndex)
    {
     
      if ( this.state.selPersona && this.state )
      {
      let  np=this.state.selPersona;
            if (selectedIndex==0)
      {      
       // np.setSesso('M');
       np.sesso='M';
        
      }
      else
      {
        //np.setSesso('F');
        np.sesso='F';
      }
      this.setState({selPersona:np});
        this.props.upd(np);
      }
      else
      console.log("sesso: selpersona nullo");
      this.setState({sesso_index:selectedIndex});
    
    }


    apri_dtnas_pck()
    {
      
     if (!this.state.mostra_dtnas)
     {
      this.setState({dt_nas_picker:moment(this.state.selPersona.datanascita).toDate(),mostra_dtnas:true});
     }
     
    }

     onChangeDt  (event, selectedDate)  {
      
      let  np=this.state.selPersona;
      np.datanascita=moment(selectedDate).format('YYYY-MM-DD');      
    this.setState({dt_nas_picker:new Date(),mostra_dtnas:false,selPersona:np});
    this.props.upd(np);
    };


    onchg_cognome(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.cognome=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    }

    onchg_nome(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.nome=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
     }
     onchg_data_nascita(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.data_nascita=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     
     }
     onchg_as_pz_lung(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.as_pz_lung=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }




     onchg_dx_meno14(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.dx_meno14=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }
     
     onchg_dx_meno7(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.dx_meno7=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }

     onchg_dx_gomito(event)
       {
         //console.log(event);
        let k=this.state.selPersona;
        //console.log(k.altezza);
          k.dx_gomito=event;
         this.setState({selPersona:k}); // /forse non serve più verifica
         this.props.upd(k);
       }

         onchg_dx_7(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.dx_7=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }

       onchg_dx_14(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.dx_14=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }

       onchg_dx_polso(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.dx_polso=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }

       onchg_dx_mano(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.dx_mano=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }

       onchg_sx_meno14(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.sx_meno14=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }

       onchg_sx_meno7(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.sx_meno7=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }
       
       onchg_sx_gomito(event)
       {
         //console.log(event);
        let k=this.state.selPersona;
        //console.log(k.altezza);
          k.sx_gomito=event;
         this.setState({selPersona:k}); // /forse non serve più verifica
         this.props.upd(k);
       }

         onchg_sx_7(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.sx_7=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }

       onchg_sx_14(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.sx_14=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }

       onchg_sx_polso(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.sx_polso=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
      }

       onchg_sx_mano(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.sx_mano=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     }
     

    onchg_Al_pz_lung(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.Al_pz_lung=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
     }



     onchg_dx_meno20(event)
     {
       //console.log(event);
      let k=this.state.selPersona;
      //console.log(k.altezza);
        k.dx_meno20=event;
       this.setState({selPersona:k}); // /forse non serve più verifica
       this.props.upd(k);
     
     }
     

    onchg_dx_meno10(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.dx_meno10=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }


    onchg_dx_ginocchio(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.dx_ginocchio=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }
    

    onchg_dx_10(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.dx_10=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }
    onchg_dx_20(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.dx_20=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }onchg_dx_caviglia(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.dx_caviglia=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }onchg_dx_piede(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.dx_piede=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }onchg_sx_meno20(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.sx_meno20=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }onchg_sx_meno10(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.sx_meno10=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }onchg_sx_ginocchio(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.sx_ginocchio=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }onchg_sx_10(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.sx_10=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }onchg_sx_20(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.sx_20=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }onchg_sx_caviglia(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.sx_caviglia=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }onchg_sx_piede(event)
    {
      //console.log(event);
     let k=this.state.selPersona;
     //console.log(k.altezza);
       k.sx_piede=event;
      this.setState({selPersona:k}); // /forse non serve più verifica
      this.props.upd(k);
    
    }
  
render() {
  
  
      return (
        <ScrollView style={{width:'100%',backgroundColor: '#FFFF00'}}>
            <View style={styles.editcontainer} >
    
<Input 
label="Cognome"
leftIcon={
<Icon
  name='edit'
  size={24}
/>
}
containerStyle={{flex:4}}
value={this.state.selPersona?this.state.selPersona.cognome:''}
// onChangeText={cognome => this.setState({ selPersona: { ...this.state.selPersona, cognome  } })}
onChangeText={this.onchg_cognome}
/>
<Input containerStyle={{flex:4}}
label="Nome"
leftIcon={
<Icon
  name='edit'
  size={24}
  
/>
}
value={this.state.selPersona?this.state.selPersona.nome:''}
onChangeText={this.onchg_nome}
/>
</View>

<View style={styles.editcontainer} >
<ButtonGroup containerStyle={{flex:5,minWidth:150}}
    onPress={this.updateSessoindex}
    selectedIndex={this.state.sesso_index}
    buttons={['Maschio','Femmina']}
    />
<View  style={{flex:4,minWidth:250,flexDirection:'row' }}>

<Input containerStyle={{flex:4,minWidth:150}}
label="Data nascita"
editable={false}
value={this.state.selPersona?moment(this.state.selPersona.datanascita).format('DD/MM/YYYY'):''}

/>
<Button
buttonStyle={{flex:1,minWidth:50,padding:3,margin:3}}
onPress={() => this.apri_dtnas_pck()}
leftIcon={<Icon
  name='edit'
  size={24}

/>} />
</View>
{this.state.mostra_dtnas && (
      <DateTimePicker
        testID="dateTime_dtnas"
        value={this.state.dt_nas_picker}
        onChange={this.onChangeDt}
      />
    )}
   
<Input containerStyle={{flex:4}}
label="lunghezza dell'arto superiore"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.as_pz_lung:''}
onChangeText={this.onchg_as_pz_lung}
/>

<Input containerStyle={{flex:4}}
label="circonferenza del braccio destro a -14 cm di distanza dal gomito"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_meno14:''}
onChangeText={this.onchg_dx_meno14}
/>
<Input containerStyle={{flex:4}}
label="circonferenza del braccio destro a -7 cm di distanza dal gomito"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_meno7:''}
onChangeText={this.onchg_dx_meno7}
/>
<Input containerStyle={{flex:4}}
label="circonferenza del gomito destro "
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_gomito:''}
onChangeText={this.onchg_dx_gomito}
/>
<Input containerStyle={{flex:4}}
label="circonferenza del braccio destro a 7 cm di distanza dal gomito"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_7:''}
onChangeText={this.onchg_dx_7}
/>


<Input containerStyle={{flex:4}}
label="circonferenza del braccio destro a 14 cm di distanza dal gomito"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_14:''}
onChangeText={this.onchg_dx_14}
/>
<Input containerStyle={{flex:4}}
label="circonferenza del polso destro"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_polso:''}
onChangeText={this.onchg_dx_polso}
/>


<Input containerStyle={{flex:4}}
label="circonferenza della mano destra"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_mano:''}
onChangeText={this.onchg_dx_mano}
/>
<Input containerStyle={{flex:4}}
label="circonferenza del braccio sinistro a -14 cm di distanza dal gomito"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_meno14:''}
onChangeText={this.onchg_sx_meno14}
/>
<Input containerStyle={{flex:4}}
label="circonferenza del braccio sinistro a -7 cm di distanza dal gomito"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_meno7:''}
onChangeText={this.onchg_sx_meno7}
/>
<Input containerStyle={{flex:4}}
label="circonferenza del gomito sinistro"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_gomito:''}
onChangeText={this.onchg_sx_gomito}
/>
<Input containerStyle={{flex:4}}
label="circonferenza del braccio sinistro a 7 cm di distanza dal gomito"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_7:''}
onChangeText={this.onchg_sx_7}
/>
<Input containerStyle={{flex:4}}
label="circonferenza del braccio sinistro a 14 cm di distanza dal gomito"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_14:''}
onChangeText={this.onchg_sx_14}
/>
<Input containerStyle={{flex:4}}
label="circonferenza del polso sinistro"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_polso:''}
onChangeText={this.onchg_sx_polso}
/>
<Input containerStyle={{flex:4}}
label="circonferenza della mano sinistra"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_mano:''}
onChangeText={this.onchg_sx_mano}
/>
<Input  containerStyle={{flex:5,minWidth:250}}
label="lunghezza dell'arto inferiore"

keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.Al_pz_lung:''}
onChangeText={this.onchg_Al_pz_lung}
/>
<Input  containerStyle={{flex:4}}
label="circonferenza della gamba destra a -20 cm di distanza dal ginocchio"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_meno20:''}
onChangeText={this.onchg_dx_meno20}/>

  <Input containerStyle={{flex:4}}
  label="circonferenza della gamba destra a -10 cm di distanza dal ginocchio"
  keyboardType='numeric'
  leftIcon={
   <Icon
     name='edit'
     size={24}  
   />
}
value={this.state.selPersona?this.state.selPersona.onchg_dx_meno10:''}
onChangeText={this.onchg_dx_meno10}/>
<Input  containerStyle={{flex:4}}
label="circonferenza del ginocchio destro"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_ginocchio:''}
onChangeText={this.onchg_dx_ginocchio}
/>
<Input  containerStyle={{flex:4}}
label="circonferenza della gamba destra a 10 cm di distanza dal ginocchio"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_10:''}
onChangeText={this.onchg_dx_10}/>
<Input  containerStyle={{flex:4}}
label="circonferenza della gamba destra a 20 cm di distanza dal ginocchio"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_20:''}
onChangeText={this.onchg_dx_20}/>
<Input  containerStyle={{flex:4}}
label="circonferenza della caviglia destra"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_caviglia:''}
onChangeText={this.onchg_dx_caviglia}/>
<Input  containerStyle={{flex:4}}
label="circonferenza del piede destro"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.dx_piede:''}
onChangeText={this.onchg_sx_piede}/>
<Input  containerStyle={{flex:4}}
label="circonferenza della gamba sinistra a -20 cm di distanza dal ginocchio"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_meno20:''}
onChangeText={this.onchg_sx_meno20}/>
<Input  containerStyle={{flex:4}}
label="circonferenza della gamba sinistra a -10 cm di distanza dal ginocchio"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_meno10:''}
onChangeText={this.onchg_sx_meno10}/>
<Input  containerStyle={{flex:4}}
label="circonferenza del ginocchio sinistro"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_ginocchio:''}
onChangeText={this.onchg_sx_ginocchio}/>
<Input  containerStyle={{flex:4}}
label="circonferenza della gamba sinistra a 10 cm di distanza dal ginocchio"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_10:''}
onChangeText={this.onchg_sx_10}/>
<Input  containerStyle={{flex:4}}
label="circonferenza della gamba sinistra a 20 cm di distanza dal ginocchio"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_20:''}
onChangeText={this.onchg_sx_20}/>
<Input  containerStyle={{flex:4}}
label="circonferenza della caviglia sinistra"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_caviglia:''}
onChangeText={this.onchg_sx_caviglia}/>
<Input  containerStyle={{flex:4}}
label="circonferenza del piede sinistro"
keyboardType='numeric'
 leftIcon={
  <Icon
    name='edit'
    size={24}  
  />
}
value={this.state.selPersona?this.state.selPersona.sx_piede:''}
onChangeText={this.onchg_sx_piede}/>


</View>  


  </ScrollView>
  );
}
}

const styles = StyleSheet.create({
editcontainer:{

flexDirection:'row',
flexWrap:'wrap',
flexBasis:5,
flexGrow:2,
flexShrink:2,
},
inscontainer:{
flex:1,flexDirection:'row'
},

listazioni: {
  
  flexDirection:'row',
justifyContent:'space-between'
},

});
export default Blog;