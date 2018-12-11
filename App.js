import React from 'react'
import { View, Image, StyleSheet, TouchableWithoutFeedback, ImageBackground, Text, TextInput, ActivityIndicator, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPress: false
    }
    this.sizeAnimation = new Animated.Value(0)
    this.nextScreenAnimation = new Animated.Value(0)
  }

  sizeAnimationStart() {
    Animated.sequence(
      [
        Animated.timing(
          this.sizeAnimation,
          {
            toValue: 10,
            duration: 1000
          }
        ),
        Animated.timing(
          this.nextScreenAnimation,
          {
            toValue: 10,
            duration: 500
          }
        )
      ]
    ).start()
  }
  render() {
    const widthAnimation = this.sizeAnimation.interpolate({
      inputRange: [0, 8, 9, 10],
      outputRange: ['60%', '15%', '80%', '100%']
    })
    const borderRadiusAnimation = this.sizeAnimation.interpolate({
      inputRange: [0, 5, 10],
      outputRange: [4, 60, 0]
    })
    const flexAnimation = this.sizeAnimation.interpolate({
      inputRange: [0, 8, 10],
      outputRange: [0, 0, 1]
    })
    const displayAnimation = this.sizeAnimation.interpolate({
      inputRange: [0, 9, 10],
      outputRange: [1, 1, 0]
    })
    const heightAnimationTextInput = this.sizeAnimation.interpolate({
      inputRange:[0,8,10],
      outputRange:[40,40,0]
    })
    const margin16Animation = this.sizeAnimation.interpolate({
      inputRange:[0,8,10],
      outputRange:[16,16,0]
    })
    const margin24Animation = this.sizeAnimation.interpolate({
      inputRange:[0,8,10],
      outputRange:[24,24,0]
    })
    const borderBottomAnimation = this.sizeAnimation.interpolate({
      inputRange:[0,8,10],
      outputRange:[1,1,0]
    })
    const paddingAnimation = this.sizeAnimation.interpolate({
      inputRange:[0,8,10],
      outputRange:[8,8,0]
    })
    const opacityAnimation = this.nextScreenAnimation.interpolate({
      inputRange: [0, 10],
      outputRange: [0, 1]
    })
    const translateAnimation = this.nextScreenAnimation.interpolate({
      inputRange: [0, 10],
      outputRange: [-150, -200]
    })
    const heightAnimation = this.nextScreenAnimation.interpolate({
      inputRange: [0, 10],
      outputRange: ['1%', '60%']
    })
    return (
      <ImageBackground style={styles.container} imageStyle={{ opacity: 0.4 }} source={require('./iPhone-wallpaper-abstract-portrait-city-macinmac.jpg')}>
        <Animated.View style={{opacity:displayAnimation, width: '60%',height:heightAnimationTextInput, padding: paddingAnimation, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderBottomWidth: borderBottomAnimation, borderBottomColor: 'white', marginBottom: margin16Animation }}>
          <Icon name='user' style={{ color: 'white', marginRight: 16 }} size={24}></Icon>
          <TextInput style={{ color: 'white', width: '60%' }} placeholderTextColor='white' placeholder='username'></TextInput>
        </Animated.View>
        <Animated.View style={{opacity:displayAnimation, width: '60%',height:heightAnimationTextInput, padding: paddingAnimation, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderBottomWidth: borderBottomAnimation, borderBottomColor: 'white', marginBottom: margin24Animation }}>
          <Icon name='user-secret' style={{ color: 'white', marginRight: 16 }} size={24}></Icon>
          <TextInput style={{ color: 'white', width: '60%' }} placeholderTextColor='white' placeholder='Password' secureTextEntry={true}></TextInput>
        </Animated.View>

        <TouchableWithoutFeedback onPress={() => {
          this.setState({
            isPress: true
          })
          this.sizeAnimationStart()

        }}>
          <Animated.View style={{ borderRadius: borderRadiusAnimation, backgroundColor: "#E91E63", width: widthAnimation, height: 56, justifyContent: 'center', flex: flexAnimation, alignItems: 'center' }}>
            {this.state.isPress ? <Animated.View style={{ opacity: displayAnimation }}><ActivityIndicator color='white' /></Animated.View> : <Text style={{ color: 'white' }}>Sign in</Text>}
          </Animated.View>
        </TouchableWithoutFeedback>
        <Animated.View style={{ opacity: opacityAnimation, width: 100, height: 100, borderRadius: 60, backgroundColor: '#F48FB1', position: 'absolute', transform: [{ translateY: translateAnimation }] }}></Animated.View>
        <Animated.View style={{ opacity: opacityAnimation, width: heightAnimation, height: 32, borderRadius: 8, backgroundColor: '#F48FB1', position: 'absolute', transform: [{ translateY: -100 }] }}></Animated.View>
        <Animated.View style={{ opacity: opacityAnimation, width: heightAnimation, height: 32, borderRadius: 8, backgroundColor: '#F48FB1', position: 'absolute', transform: [{ translateY: -50 }] }}></Animated.View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 24
  },

})