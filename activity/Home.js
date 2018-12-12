import React, { Component } from "react";
import {
    Animated,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableWithoutFeedback,
} from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Screen = props => {
    return (
        <View style={styles.scrollPage}>
                <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
                    <ImageBackground style={{ height: 400, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }} imageStyle={{ opacity: 0.4 }} {...props}>
                        <Text style={styles.text}>{props.text}</Text>
                    </ImageBackground>
                </Animated.View>
        </View>
    );
};

const transitionAnimation = index => {
    return {
        transform: [
            { perspective: 800 },
            {
                scale: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH
                    ],
                    outputRange: [0.25, 1, 0.25]
                })
            },
            {
                rotateX: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH
                    ],
                    outputRange: ["45deg", "0deg", "45deg"]
                })
            },
            {
                rotateY: xOffset.interpolate({
                    inputRange: [
                        (index - 1) * SCREEN_WIDTH,
                        index * SCREEN_WIDTH,
                        (index + 1) * SCREEN_WIDTH
                    ],
                    outputRange: ["-45deg", "0deg", "45deg"]
                })
            }
        ]
    };
};

export default class Home extends Component {
    static navigationOptions={
        title:'destination'
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1}}>
                <Animated.ScrollView
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                        { useNativeDriver: true }
                    )}
                    horizontal
                    pagingEnabled
                    style={styles.scrollView}
                >
                    <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('JapanScreen')}}>
                    <Screen text="Japan" index={0} source={require('../73d10cb97c95795909a300d336b44d35.jpg')} />
                    </TouchableWithoutFeedback>
                    <Screen text="Indonesia" index={1} source={require('../homepage-portrait-borobudur.jpg')} />
                    <Screen text="France" index={2} source={require('../86529a467ecbaf8095a6bdda210f9e8a.jpg')} />
                </Animated.ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: "row",
        // backgroundColor: "#00d4ff",
        marginTop:32
    },
    scrollPage: {
        width: SCREEN_WIDTH,
        padding: 20
    },
    screen: {
        height: 400,
        borderRadius: 24,
        backgroundColor: "white",
        overflow: 'hidden'
    },
    text: {
        fontSize: 45,
        fontWeight: "bold",
        color: 'white',
    }
});