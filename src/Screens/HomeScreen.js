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
import React, { useState } from 'react';

import BagSVG from '../Assets/bag.svg';
import ThreeDots from '../Assets/three_dots.svg';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import ProgressCard from '../Components/HomeScreen/ProgressCard';
import GroupCard from '../Components/HomeScreen/GroupCard';
import StatusCard from '../Components/HomeScreen/StatusCard';

const HomeScreen = () => {
  
  const [progressList, setProgessList] = useState([
    {categoryName: "Office Project " ,title : "Grocery Shopping App Design" , progress: 70},
    {categoryName: "Personal Project " ,title : "TaskEassy UI Design and apis " , progress: 30},
    {categoryName: " Shopping " ,title : "Grocerys and Cloths from baba mall " , progress: 50},
    {categoryName: "Office Project " ,title : "MEdusaa api calls and final touch" , progress: 20},
  ]);

  const [categoryList, setCategoryList] = useState([
    {categoryName: "Office Project " ,totalTasks: 20, progress: 70},
    {categoryName: "Personal Project " ,totalTasks: 12 , progress: 30},
    {categoryName: " Shopping " ,totalTasks: 2, progress: 50},
    {categoryName: "Office Project " ,totalTasks: 10, progress: 20},
    {categoryName: "Office Project " ,totalTasks: 33, progress: 70},
    {categoryName: "Personal Project " ,totalTasks: 22 , progress: 30},
    {categoryName: " Shopping " ,totalTasks: 29, progress: 50},
    {categoryName: "Office Project " ,totalTasks: 10, progress: 20},
  ]);
   
  const cardColors =[
    '#E7F3FF',
    '#EDE4FF',
    '#FFE8E1',
    '#FFF7D4',
  ];

  const renderGroups = ({item, index}) => {
   return (<GroupCard groupName={item.categoryName} totalTask={item.totalTasks} progresss={item.progress} />);
  };

  const renderItems = ({item, index}) => {
   return( <ProgressCard category={item.categoryName} title={item.title} progress={item.progress} cardColor = {cardColors.at(index%cardColors.length)}/>);
  };

  return (                                    //'#d0c5f0'
     <LinearGradient colors={['white','white','#C6B4F9',]}>
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
        <StatusCard progresss={80}/>
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
            <Text style={{fontWeight: 'bold', color: '#5F33E1'}}>{progressList.length}</Text>
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
            data={progressList}
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
            <Text style={{fontWeight: 'bold', color: '#5F33E1'}}>{categoryList.length}</Text>
          </View>
        </View>

        {/* ------- Task Group List ----- */}

        <View style={{width: '100%'}}>
          <FlatList
            renderItem={renderGroups}
            data={categoryList}
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
