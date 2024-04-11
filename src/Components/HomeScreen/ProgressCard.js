import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React from 'react';
  
  import * as Progress from 'react-native-progress';
const ProgressCard = ({category , title , progress ,  cardColor}) => {
     
  return (
        <View
          style={{
            paddingVertical: 16,
            paddingHorizontal: 20,
            marginHorizontal: 5,
            width: 250,
            borderRadius: 20,
            // backgroundColor: '#E7F3FF',
            // backgroundColor: "#FFE8E1",
            backgroundColor: cardColor,
            // backgroundColor: "#FFF7D4",
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: 'white',
              borderRadius: 5,
              position: 'absolute',
              top: 16,
              right: 16,
            }}></View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'grey',
              marginBottom: 10,
            }}>
            {category}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: '600',
              marginBottom: 18,
            }}>
            {title}
          </Text>
  
          <Progress.Bar
            progress={progress/100}
            width={210}
            borderWidth={0}
            unfilledColor="white"
          />
        </View>
      );
}

export default ProgressCard

const styles = StyleSheet.create({})