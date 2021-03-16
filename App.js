import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  ThemeProvider } from 'react-native-elements';

import {
  I18nManager,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './Home';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import GlobalState from './context/GlobalState';
const Stack = createStackNavigator();




const App = () => {
 

  return (
    <GlobalState>
       <ThemeProvider theme={theme}>
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between'  , backgroundColor:'#041d47' }}>
     
      <View  style={{flex:1 }  }>
      <NavigationContainer theme={theme}>
      <NavStack />
        </NavigationContainer>
        </View>
    </View>
    </ThemeProvider>
</GlobalState>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#041d47',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.green,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

function NavStack() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
          backgroundColor: '#4ca2b4',
          },
          headerTintColor: '#ed8721',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }}
      />
      
      <Stack.Screen 
        name="Blog" 
        component={Blog} 
        options={{ title: 'Blog' }}
      />
      <Stack.Screen 
       name="BlogDetails" 
       component={BlogDetails}  
       options={{ title: 'Blog Detail' }}
      />
      
    </Stack.Navigator>
  );
}

const theme = {
black:true,
colors:{
background:'#041d47',// blu Aiace
} ,

  
  Button: {
    titleStyle: {
      color: '#ed8721',
    },
    buttonStyle:
    {
  backgroundColor:'#041d47',    
  color:'#ed8721',
  padding: 10,
  borderRadius: 10,
  margin:5,
  borderWidth: 1, borderColor: "#ed8721" ,
  
    },
},
Input:
{
  renderErrorMessage:false,
    inputStyle:
  {

  },
  labelStyle:
  {
    
  },
  inputContainerStyle:
  {
    backgroundColor:'#4ca2b4',
    borderWidth: 0, borderColor: "transparent" ,
    borderRadius:10,
    margin:2,
   
  },
  containerStyle:
  {
    padding:1,
        margin:2,
        minWidth:100
        
  }
},
Icon:
{
  iconStyle: {
    color: '#ed8721',
  }
  
},
Text:
{
  style:
  {
    color: '#041d47',
    fontSize:30,
}
},
};

export default App;

