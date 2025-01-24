import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Style from './../../constants/Style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const events = [
  {
    name: 'Xezerin sahili',
    image: require('./../../assets/img/stopEcoside.jpg'),
  },
  {
    name: 'Bulvar',
    image: require('./../../assets/img/stopEcoside.jpg'),
  },
  {
    name: 'Bulvar',
    image: require('./../../assets/img/stopEcoside.jpg'),
  },
];

const Comunity = () => {
  const router = useRouter();
  const [findInput, setFindInput] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: Style.colors.primary }}>
      <View style={{ flex: 1, padding: 16 }}>
        {/* Header */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
          <Text style={{
            fontSize: 20,
            fontFamily: 'poppins',
            color: Style.colors.light,
          }}>
            Community
          </Text>
          <Pressable onPress={() => router.push('/chat')}>
            <Ionicons name="chatbubbles-outline" size={32} color={Style.colors.light} />
          </Pressable>
        </View>

        {/* Explore */}
        <View style={{  flex: 1 }}>
          <Text style={{
            fontFamily: 'poppins',
            textAlign: 'center',
            fontSize: 30,
            color: Style.colors.light,
          }}>
            Explore
          </Text>
          <View style={{
            flexDirection: 'row',
            padding: 10,
            borderBottomWidth: 1,
            borderColor: Style.colors.light,
            borderRadius: 10,
          }}>
            <TextInput
              style={{
                flex: 1,
                color: Style.colors.light,
                fontFamily: 'poppins',
              }}
              placeholder="Search events..."
              placeholderTextColor={Style.colors.light}
              value={findInput}
              onChangeText={(e) => setFindInput(e)}
            />
            <EvilIcons name="search" size={24} color={Style.colors.light} />
          </View>

          {/* Events List */}
          <ScrollView style={{ flexGrow: 1 }} nestedScrollEnabled={true}>
            {events
              .filter((item) => item.name.toLowerCase().includes(findInput.toLowerCase()))
              .map((item, index) => (
                <View key={index} style={{
                  flexDirection: 'row',
                  height: 80,
                  backgroundColor: '#158468',
                  borderRadius: 10,
                  marginBottom: 10,
                  overflow: 'hidden',
                }}>
                  <Image source={item.image} style={{
                    width: 100,
                    height: '100%',
                    flex:1
                  }} />
                  <View style={{
                    flex: 3,
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <View
                    style={{
                      flex: 3,
                    }}
                    >
                      <Text style={{
                        fontFamily: 'poppins',
                        color: Style.colors.light,
                        fontSize: 20,
                        lineHeight: 30,
                      }}>
                        {item.name}
                      </Text>
                      <Text style={{
                        fontFamily: 'poppins',
                        color: Style.colors.light,
                        opacity: 0.8,
                        fontSize: 15,
                        lineHeight: 20,
                      }}>
                        {item.name}
                      </Text>
                    </View>
                    <Pressable style={{
                      padding: 8,
                      backgroundColor: Style.colors.primary,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      flex:1
                    }} onPress={() => console.log('Send Request')}>
                      <Text style={{
                        fontFamily: 'poppins',
                        color: Style.colors.light,
                        fontSize:10
                      }}>Subscribe</Text>
                    </Pressable>
                  </View>
                </View>
              ))}
          </ScrollView>
        </View>

        {/* Subscribed Section */}
        <View style={{ marginBottom: 50,flex:1}} >
          <Text style={{
            fontFamily: 'poppins',
            textAlign: 'center',
            fontSize: 30,
            color: Style.colors.light,
            marginVertical: 10,

          }}>
            Subscribed
          </Text>
          <ScrollView style={{ flexGrow: 1 }} nestedScrollEnabled={true}>
            {events.map((item, index) => (
               <View key={index} style={{
                flexDirection: 'row',
                height: 80,
                backgroundColor: '#158468',
                borderRadius: 10,
                marginBottom: 10,
                overflow: 'hidden',
              }}>
                <Image source={item.image} style={{
                  width: 100,
                  height: '100%',
                  flex:1
                }} />
                <View style={{
                  flex: 3,
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <View
                  >
                    <Text style={{
                      fontFamily: 'poppins',
                      color: Style.colors.light,
                      fontSize: 20,
                      lineHeight: 30,
                    }}>
                      {item.name}
                    </Text>
                    <Text style={{
                      fontFamily: 'poppins',
                      color: Style.colors.light,
                      opacity: 0.8,
                      fontSize: 15,
                      lineHeight: 20,
                    }}>
                      {item.name}
                    </Text>
                  </View>
                  
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Comunity;
