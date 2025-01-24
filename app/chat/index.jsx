import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Style from '../../constants/Style'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';


const chats = [
  {
    id: 1,
    name: 'John Doe',
    profilePhoto: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    lastmessage: 'Hello',
    lastdate: {
      day: 11,
      month: 7,
      year: 2024,
      hour: 5,
      minute: 30
    }
  },
  {
    id: 2,
    name: 'Revan Agazade',
    profilePhoto: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    lastmessage: 'Hello',
    lastdate: {
      day: 11,
      month: 7,
      year: 2024,
      hour: 5,
      minute: 30
    }
  },
  {
    id: 3,
    name: 'İbrahim Samed',
    profilePhoto: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    lastmessage: 'Hello',
    lastdate: {
      day: 11,
      month: 7,
      year: 2024,
      hour: 5,
      minute: 30
    }
  },

]


const Chat = () => {

  const router = useRouter()


  return (
    <View style={[Style.Screen, {
      backgroundColor: Style.colors.primary
    }]} >
      <View
        style={{
          flex: 1,

        }}
      >
        <View name='Header' >
          <View style={Style.container} >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 10
              }}
            >
              <Pressable onPress={() => router.back()} >
                <AntDesign name="back" size={24} color={Style.colors.light} />
              </Pressable>
              <Text style={{color:Style.colors.light,fontFamily:'poppins-bold',fontSize:20}}>Chat</Text>
            </View>
          </View>
        </View>
        <View name='Content'
          style={{
            flex: 1,

          }}

        >
          <ScrollView
            contentContainerStyle={{
              gap: 10,
              paddingHorizontal: 10
            }}
          >
            {chats.map((item) => {
              return (
                <Pressable key={item.id} style={{ flexDirection: 'row', gap: 10, padding: 10, height: 100, backgroundColor: '#158468', alignItems: 'center', justifyContent: 'center',borderRadius:10 }}>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                    <Image
                      style={{
                        width: '100%',
                        aspectRatio: 1,
                        borderRadius:5
                      }}
                      source={{ uri: item.profilePhoto }}
                    />
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{ color: Style.colors.light, fontFamily: 'poppins-bold', fontSize: 18, lineHeight: 20 }}>{item.name}</Text>
                    <Text style={{ color: Style.colors.light, fontFamily: 'poppins', fontSize: 12 }}>{item.lastmessage}</Text>
                  </View>
                  <View style={{ flex: 1,alignItems:'flex-end'}}>
                    <Text style={{ color: Style.colors.light, fontFamily: 'poppins', fontSize: 12 }}>{item.lastdate.day}/{item.lastdate.month}/{item.lastdate.year}</Text>
                    <Text style={{ color: Style.colors.light, fontFamily: 'poppins', fontSize: 12 }}>{item.lastdate.hour.toString().padStart(2, '0')}:{item.lastdate.hour.toString().padStart(2, '0')}</Text>
                  </View>

                </Pressable>
              )
            })}

          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})