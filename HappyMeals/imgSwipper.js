import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems:'center'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },


  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width:300,
    height:270,
    //flex: 1
  }
}

export default class ImgSwipper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          height={140}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={
            <View
              style={{
                  justifyContent:'flex-start',
                backgroundColor: '#efefef',
                width: 10,
                height: 10,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'red',
                width: 10,
                height: 10,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
              width:widthPercentageToDP("90%"),
            //bottom: 23,
           // marginTop:20,
            //justifyContent:'center',
            left: null,
            right: 10
          }}
          loop
        >
          <View
            style={styles.slide} >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./Assets/findproducts.jpg')}
            />
            <View style = {{ height:50,  justifyContent:'center' }}>
            <Text style = {{ color:'#b37275', fontWeight:'bold', fontSize:25  }} numberOfLines={1}>Find Foods You Love</Text>
            </View>

            <View style = {{ height:50 , justifyContent:'center', width:widthPercentageToDP("50%")}}>
                <Text style = {{
                    textAlign:'center',
                    color:"#b3b3b3",
                    fontSize:16,
                }} > Discover the best food from over 1,000 restaurents.</Text>
            </View>

          </View>
          <View
            style={styles.slide}
           
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./Assets/fastdelivery.jpg')}
            />
             <View style = {{ height:50,  justifyContent:'center' }}>
            <Text style = {{ color:'#b37275', fontWeight:'bold', fontSize:25  }} numberOfLines={1}>Fast Delivery</Text>
            </View>

            <View style = {{ height:50 , justifyContent:'center', width:widthPercentageToDP("60%")}}>
                <Text style = {{
                    textAlign:'center',
                    color:"#b3b3b3",
                    fontSize:16,
                }} > Fast delivery to your home, office and wherever you are.</Text>
            </View>


          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./Assets/livetracking.jpg')}
            />

<View style = {{ height:40,  justifyContent:'center' }}>
            <Text style = {{ color:'#b37275', fontWeight:'bold', fontSize:25  }} numberOfLines={1}>Live Tracking</Text>
            </View>

            <View style = {{ height:40 , justifyContent:'center', width:widthPercentageToDP("55%")}}>
                <Text style = {{
                    textAlign:'center',
                    color:"#b3b3b3",
                    fontSize:16,
                }} > Real time tracking of your food on the app after ordered.</Text>
            </View>
          </View>
          
        </Swiper>
      </View>
    )
  }
}