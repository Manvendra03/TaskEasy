import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  
  import ThreeDots from '../../Assets/three_dots.svg';
  import * as Progress from 'react-native-progress';

const StatusCard = ({progresss}) => {

  const [progress , setProgress] = useState(0);
  useEffect(
    ()=>{
      setProgress(progresss/100);
    },[])

  return (
    <View
          style={{
            paddingHorizontal: 30,
            paddingVertical: 20,
            marginHorizontal: 16,
            height: 150,
            width: '94%',
            backgroundColor: '#5F33E1',
            justifyContent: 'flex-start',
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 20,
            marginBottom: 20,
          }}>
          <View
            style={{
              height: '100%',
              width: 160,
              marginRight: 30,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16, fontWeight: '500', color: 'white'}}>
              Your today's task almost done!{' '}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius: 10,
                alignItems: 'center',
                width: 110,
              }}>
              <Text
                style={{
                  color: '#5F33E1',
                  fontSize: 14,
                  fontWeight: '800',
                  paddingVertical: 3,
                }}>
                View Task
              </Text>
            </TouchableOpacity>
          </View>

          <Progress.Circle
            size={80}
            progress={progress}
            thickness={7}
            borderWidth={0}
            strokeCap={'round'}
            unfilledColor={'#8764FF'}
            color="white"
            direction={'counter-clockwise'}
            showsText={true}
            textStyle={{fontSize: 18, fontWeight: 'bold'}}
          />

          <TouchableOpacity
            style={{
              paddingVertical: 2,
              paddingHorizontal: 4,
              backgroundColor: '#8764FF',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-start',
              borderRadius: 5,
              opacity: 0.8,
              position: 'absolute',
              top: 15,
              right: 15,
            }}>
            <ThreeDots style={{}} />
          </TouchableOpacity>
        </View>
  )
}

export default StatusCard

const styles = StyleSheet.create({})