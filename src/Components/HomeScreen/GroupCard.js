import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  
  import BagSVG from '../../Assets/bag.svg';
  import * as Progress from 'react-native-progress';
  

const GroupCard = ({groupName , totalTask , progresss}) => {
  const[progress ,setProgress] = useState(0);
   
  useEffect(()=>{
    setProgress(progresss /100);
  },[])

  return (
        <View
          style={{
            height: 80,
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 16,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 16,
            alignSelf: 'center',
            elevation: 5,
            shadowColor: '#171717',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            marginTop: 8,
            marginBottom: 16,
          }}>
          <View
            style={{
              height: 43,
              width: 43,
              backgroundColor: '#FFE4F2',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <BagSVG />
          </View>
          <View style={{justifyContent: 'space-evenly'}}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontWeight: '500',
                marginBottom: 3,
              }}>
              {groupName}
            </Text>
            <Text style={{fontSize: 13, color: 'grey', fontWeight: 'normal'}}>
              {totalTask}{" Tasks"}
            </Text>
          </View>
  
          <Progress.Circle
            size={50}
            progress={progress}
            thickness={4}
            borderWidth={0}
            strokeCap={'round'}
            unfilledColor={'#FFE4F2'}
            color="#F478B8"
            direction={'counter-clockwise'}
            showsText={true}
            textStyle={{fontSize: 12, fontWeight: 'bold'}}
            style={{position: 'absolute', right: 20}}
          />
        </View>
      );
}

export default GroupCard

const styles = StyleSheet.create({})