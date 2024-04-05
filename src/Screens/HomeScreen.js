import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import BagSVG from '../Assets/bag.svg';
import ThreeDots from '../Assets/three_dots.svg';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const renderGroups = items => {
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
            Office Projects
          </Text>
          <Text style={{fontSize: 13, color: 'grey', fontWeight: 'normal'}}>
            23 Tasks
          </Text>
        </View>

        <Progress.Circle
          size={50}
          progress={0.7}
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
  };

  const renderItems = items => {
    return (
      <View
        style={{
          paddingVertical: 16,
          paddingHorizontal: 20,
          marginHorizontal: 5,
          width: 250,
          borderRadius: 20,
          backgroundColor: '#E7F3FF',
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
          Office Project
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '600',
            marginBottom: 18,
          }}>
          Grocery shopping app designn
        </Text>

        <Progress.Bar
          progress={0.3}
          width={210}
          borderWidth={0}
          unfilledColor="white"
        />
      </View>
    );
  };

  return (
     <LinearGradient colors={['white','white','#d0c5f0']}>
        <SafeAreaView style={{
      // backgroundColor: 'white'
    }}>
      <ScrollView
        scrollEnabled={true}
        style={{
          height: '100%',
          width: '100%',
        }}>
        {/*  ----- Greet Bar ----- */}
        <View
          style={{
            paddingVertical: 16,
            paddingHorizontal: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
            }}>
            <Image
              source={{
                uri: 'https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
              }}
              style={{
                height: 48,
                width: 48,
                borderRadius: 30,

                backgroundColor: '#BABABA',
              }}
            />
            <View
              style={{marginHorizontal: 10, justifyContent: 'space-evenly'}}>
              <Text style={{fontWeight: '400', fontSize: 15, color: 'black'}}>
                Hello !
              </Text>
              <Text style={{fontWeight: '700', fontSize: 18, color: 'black'}}>
                Manvendra 
              </Text>
            </View>
            <Image
              source={require('../Assets/notification_bell.png')}
              style={{height: 30, width: 30, position: 'absolute', right: 10}}
            />
          </View>
        </View>

        {/* ------ status Card ------ */}
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
            progress={0.7}
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
        {/* ------- InProgress ------ */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            marginHorizontal: 16,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            In Progress
          </Text>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#EEE9FF',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 12,
            }}>
            <Text style={{fontWeight: 'bold', color: '#5F33E1'}}>6</Text>
          </View>
        </View>
        {/* ------- InProgress Card ------ */}
        <View
          style={{
            marginBottom: 20,
            marginLeft: 16,
          }}>
          <FlatList
            horizontal
            renderItem={renderItems}
            data={[1, 2, 3, 4, 3, 5, 5, 6, 6]}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* ------- Task Groups ------ */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            marginHorizontal: 16,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Task Groups
          </Text>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#EEE9FF',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 12,
            }}>
            <Text style={{fontWeight: 'bold', color: '#5F33E1'}}>4</Text>
          </View>
        </View>

        {/* ------- Task Group List ----- */}

        <View style={{width: '100%'}}>
          <FlatList
            renderItem={renderGroups}
            data={[1, 2, 3, 1, 2, 1, 2, 3, 1, 2]}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
     </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
 
});
