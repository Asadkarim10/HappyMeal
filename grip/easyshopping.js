import React from 'react';
import { Dimensions, TouchableOpacity, Text, View, Image,StyleSheet  } from 'react-native';
import QuickDelivery from './quickDelivery';
import SecurePayment from './SecurePayment';

const App = () => {
  return (
    <View style  = {{
      flex:1,
    }}>
      <View style = {{
        flex:1.6,
        backgroundColor:"white",        
      }}>
      
      </View>
      <View style = {{
        flex:6,
        backgroundColor:'white'
      }}>

        <View style  = {{
          flex:6,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:"white"
        }}>
 {/* <Image
       style={styles.tinyLogo}
source={require('./Assets/aa.jpg')}      />  */}

<QuickDelivery />

        </View>
        
        <View style  = {{
          flex:1.3,
          backgroundColor:"white",
          //justifyContent:'center'
        }}>
          <Text style = {{
            fontSize:32,
            fontFamily: "Trajan Pro",
            fontWeight:"bold",
            alignSelf:"center",
            color:"#3bb54a"
          }}>Easy Shopping</Text>
        </View>
        
        <View style  = {{
          flex:2,
          width:"76%",
          alignSelf:'center'
        }}>

<Text style = {{
  alignSelf:'center',
  fontSize:16,
  fontWeight:  '100',

}}>
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
</Text>

        </View>

      </View>      
      <View style = {{
        flex:2,
        backgroundColor:"white",
        justifyContent:'center'
       //flexDirection:'column-reverse'      
       }}>


<View style = {{
  flexDirection:'row',
  justifyContent:'space-around'
}}>

<View style = {{
   flexDirection:'row',
   width:"60%",
   alignItems:'flex-end',
   
   justifyContent:'space-around'
}}>
  <View style = {{
    width:55,
height:8,
    backgroundColor:'#3bb54a'
  }}>

  </View>
  <View style = {{
    width:55,
    height:8,
    backgroundColor:'#e1e1e1'
  }}>

  </View>
  <View style = {{
    width:55,
    height:8,
    backgroundColor:'#e1e1e1'
  }}>

  </View>
</View>


<TouchableOpacity style = {{
  height:40,
  width:110,
  backgroundColor:'#e1e1e1',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:5,
  marginRight:20
}}>
  <Text>Skip</Text>
</TouchableOpacity>


</View>
      


      
      
      </View>
      
      </View>
      

  );
}

export default App;

const styles = StyleSheet.create({
 
  tinyLogo: {
    width: 160,
    height: 200,
    alignSelf:'center'
  },
  logo: {
    width: 66,
    height: 58,
  },
});