import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Style from '../../constants/Style'
import cactus from './../../assets/img/plants/cactus.png';
import flower from './../../assets/img/plants/flower.png';
import sam from './../../assets/img/plants/sam.png';
import tree from './../../assets/img/plants/tree.png';
import { useRouter } from 'expo-router';
import { selectUserInfo, setUserData } from './../../components/redux/userSlice'
import { useDispatch, useSelector } from 'react-redux';



function shuffle(array) {
  let currentIndex = array.length;



  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}


const Home = () => {

  const router = useRouter()
  const userdata = useSelector(selectUserInfo)
  const dispatch = useDispatch();

  const [plants, setPlants] = useState(userdata.garden)


  // serveri run ele
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
        dispatch(setUserData(data));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    
  }, []);




  useEffect(() => {
    setPlants(userdata.garden)

  }, [userdata])

  useEffect(() => {
    if (plants.length < 13) {

      Array.from({ length: 13 - plants.length })
        .map(() => {
          setPlants(() => [...plants, 0])
        })
    }

    shuffle(plants)
  }, [plants])

  let inx = -1






  return (
    <View style={[Style.Screen, {
      backgroundColor: Style.colors.primary

    }]} >

      <View>
        <View style={Style.container} >
          <View name='Header'
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              name='coinContainer'
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                padding: 10,
              }}
            >
              <Image
                style={{
                  width: 30,
                  height: 30,
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
              >{23}</Text>

            </View>
            <Pressable
              onPress={() => { router.push('/marketplace') }}
            >
              <MaterialCommunityIcons name="storefront-outline" size={32} color={Style.colors.light} />
            </Pressable>
          </View>
        </View>
        <View name='welcome'>

          <View style={{
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <Text style={{
              fontSize: 15,
              color: Style.colors.light,
              fontFamily: 'poppins',
              lineHeight: 20,

            }}>Welcome,</Text>
            <Text style={{
              fontSize: 40,
              color: Style.colors.light,
              fontFamily: 'poppins-bold',
              lineHeight: 50,

            }}>{userdata.name}</Text>
          </View>
        </View>
        <View name='garden'
          style={{
            top: '80%',
            zIndex: 2
          }}

        >
          <View
            style={{
              alignItems: 'center'
            }}
          >
            <Image
              style={{
                width: '100%',
                position: 'absolute',
                top: 0

              }}
              source={require('./../../assets/img/plants/grassbase.png')}
              resizeMode="contain"
            />

            <View style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              maxWidth: 430,
              height: 200,
              position: 'absolute',
              top: 0

            }}

            >
              {Array.from({ length: 25 }).map((_, index) => {
                const row = Math.floor(index / 5);
                const col = index % 5;

                const zIndex = Math.abs(2 - row) + Math.abs(2 - col); // Higher zIndex for middle elements to give a layered effect

                const inDiamondShape =
                  (row === 0 && col === 2) ||
                  (row === 1 && (col === 1 || col === 2 || col === 3)) ||
                  (row === 2 && (col === 0 || col === 1 || col === 2 || col === 3 || col === 4)) ||
                  (row === 3 && (col === 1 || col === 2 || col === 3)) ||
                  (row === 4 && col === 2);


                if (inDiamondShape) inx++;
                return (
                  <View key={index}
                    style={{
                      width: '20%', // Divide by 5 for 5 columns
                      height: '20%', // Divide by 5 for 5 rows
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'

                    }}
                  >
                    {inDiamondShape &&
                      <Image
                        style={{
                          resizeMode: 'contain',
                          width: '100%',
                        }}

                        source={
                          plants[inx] === 1 ? cactus :
                            plants[inx] === 2 ? flower :
                              plants[inx] === 3 ? sam :
                                plants[inx] === 4 ? tree : null
                        }
                      />
                    }
                  </View>
                )
              })}
            </View>

          </View>
        </View>

      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({


});