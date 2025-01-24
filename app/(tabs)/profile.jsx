import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Style from './../../constants/Style'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { selectUserInfo } from './../../components/redux/userSlice'
import { useSelector } from 'react-redux';


const leaderboardList = [
  {
    name: "Leyla Mahmudova",
    profileimg: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1310522.jpg&fm=jpg',
    username: 'lyla_mm',
    rank: 1
  },
  {
    name: "Cəlal İbrahimli",
    profileimg: 'https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg',
    username: 'jalali',
    rank: 2
  },
  {
    name: "Elyar Ağazadə",
    profileimg: 'https://images.unsplash.com/photo-1623685463160-f3f501540a91?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D',
    username: 'agazd_e1yr',
    rank: 3
  },
  {
    name: "Fərid Mustafayev",
    profileimg: 'https://media.licdn.com/dms/image/D4E03AQFyyLACyEyuDQ/profile-displayphoto-shrink_200_200/0/1709843951686?e=2147483647&v=beta&t=BDFYF-goZB9rpbFpltjgOJ4A1SZIgFalmN9BH1jYnZE',
    username: 'faridmsta',
    rank: 4
  },
  {
    name: "Mədinə Mahmudova",
    profileimg: 'https://img.freepik.com/free-photo/portrait-stylish-young-pretty-woman-smiling-grey-t-shirt-isolated-natural-look-long-brown-hair-sincere-smile_285396-880.jpg',
    username: 'madina24',
    rank: 5
  },
]



const Profile = () => {

  const userdata = useSelector(selectUserInfo)


  useEffect(() => {
    fetch('https://89ca97ef-b779-41c4-a79a-dfa519f7ec12-00-3s8bujxlfqhn3.sisko.replit.dev/userdata?username=johndoe', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
                justifyContent: 'flex-end'
              }}
            >
              <AntDesign name="setting" size={24} color={Style.colors.light} />

            </View>
          </View>
        </View>
        <View name='profile'
          style={{
            flex: 0.8,


          }}
        >
          <View style={Style.container} >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'start',
                height: '100%',
              }}
            >
              <View
                style={{
                  flex: 1,


                }}
              >
                <Image source={{
                  uri: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                }}
                  style={{
                    width: '100%',
                    aspectRatio: 1,
                    borderRadius: 10,
                    overflow: 'hidden'
                  }} />
              </View>
              <View
                style={{
                  flex: 1.5,
                  paddingLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'poppins-bold',
                    color: 'white',
                    fontSize: 24
                  }}

                >{userdata.name} {userdata.surname}</Text>
                <Text
                  style={{
                    fontFamily: 'poppins',
                    color: 'white',
                    fontSize: 18
                  }}

                >@{userdata.username}</Text>
                <Text
                  style={{
                    fontFamily: 'poppins',
                    color: 'white',
                    fontSize: 18,
                    opacity: 0.5
                  }}

                >Rank: #{userdata.rank}</Text>
              </View>

            </View>
          </View>
        </View>
        <View name='wallet'
          style={{
            flex: 0.2,
            marginBottom: 10
          }} >
          <View style={Style.container} >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                  paddingHorizontal: 10,
                  backgroundColor: '#158468',
                  borderRadius: 10,
                  height: 50


                }} >
                <Feather name="dollar-sign" size={24} color={Style.colors.light} />
                <Text style={{ color: Style.colors.light, fontSize: 20 }}>{userdata.balance}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <View
                  name='coinContainer'
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    paddingHorizontal: 10,
                    backgroundColor: '#158468',
                    borderRadius: 10,
                    height: 50


                  }}
                >
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                      borderRadius: 50

                    }}
                    source={require('./../../assets/img/icon/scoreCoin.jpg')}
                  />

                  <Text
                    style={{
                      fontSize: 20,
                      color: Style.colors.light,
                      fontFamily: 'poppins',
                      marginTop: 5
                    }}
                  >{userdata.scoreCoin}</Text>

                </View>
                <View
                  name='coinContainer'
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    paddingHorizontal: 10,
                    backgroundColor: '#158468',
                    borderRadius: 10,
                    height: 50


                  }}
                >
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                      borderRadius: 50

                    }}
                    source={require('./../../assets/img/icon/seedCoin.jpg')}
                  />

                  <Text
                    style={{
                      fontSize: 20,
                      color: Style.colors.light,
                      fontFamily: 'poppins',
                      marginTop: 5
                    }}
                  >{userdata.seedCoin}</Text>

                </View>
              </View>
            </View>

          </View>
        </View>
        <View name='leaderboard'
          style={{
            flex: 2,
            paddingTop: 10
          }} >
          <View style={Style.container} >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'poppins-bold',
                  color: Style.colors.light
                }}
              >
                Leaderboard
              </Text>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  paddingBottom: 190

                }}
              >
                <ScrollView
                  style={{
                    width: '100%',
                    height: '100%',


                  }}
                  contentContainerStyle={{
                    gap: 10,
                  }}
                >

                  {
                    leaderboardList.map((item, index) => {
                      const bg = (item.rank == 1) ? StyleSheet.create(styles.first) :
                        (item.rank == 2) ? StyleSheet.create(styles.second) :
                          (item.rank == 3) ? StyleSheet.create(styles.third) : null;
                      const text = (item.rank == 1) ? StyleSheet.create(styles.firstText) :
                        (item.rank == 2) ? StyleSheet.create(styles.secondText) :
                          (item.rank == 3) ? StyleSheet.create(styles.thirdText) : null;

                      return (
                        <View key={index} style={[{
                          width: '100%',
                          height: 80,
                          backgroundColor: '#158468',
                          flexDirection: 'row',
                          borderRadius: 10,
                          overflow: 'hidden',

                        }, bg]}
                        >
                          <View style={{ flex: 1, aspectRatio: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                              style={{
                                width: 60,
                                height: 60,
                                borderRadius: 100
                              }}
                              source={{ uri: item.profileimg }} />


                          </View>
                          <View style={{ flex: 3, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                            <View >
                              <Text style={[{ fontSize: 16, fontFamily: 'poppins-bold', color: Style.colors }, text]}>{item.name}</Text>
                              <Text style={[{ fontSize: 14, fontFamily: 'poppins', color: Style.colors, opacity: 0.8 }, text]}>{item.username}</Text>


                            </View>
                            <View  >
                              <Text style={[{ fontSize: 18, fontFamily: 'poppins', color: Style.colors, opacity: 0.5 }, text]}>#{item.rank}</Text>


                            </View>
                          </View>

                        </View>
                      )

                    })
                  }

                </ScrollView>

              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  first: {
    backgroundColor: '#fa0'
  },
  second: {
    backgroundColor: '#009bd6'
  },
  third: {
    backgroundColor: '#ff424a'
  },
  firstText: {
    color: '#000'
  },
  secondText: {
    color: '#fff'
  },
  thirdText: {
    color: '#fff'
  },
})