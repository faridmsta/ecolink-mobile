import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Style from '../../constants/Style'
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Toast from 'react-native-toast-message';
import cactus from './../../assets/img/plants/cactus.png';
import flower from './../../assets/img/plants/flower.png';
import sam from './../../assets/img/plants/sam.png';
import tree from './../../assets/img/plants/tree.png';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUserData } from './../../components/redux/userSlice';
import { selectUserInfo } from './../../components/redux/userSlice'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const plants = [
    {
        name: 'Cactus',
        price: 3,
        image: cactus,
        description: 'lorem ipsum dolor sit',
        num: 1
    },
    {
        name: 'Flower',
        price: 5,
        image: flower,
        description: 'lorem ipsum dolor sit',
        num: 2
    },
    {
        name: 'Pine Tree',
        price: 10,
        image: sam,
        description: 'lorem ipsum dolor sit',
        num: 3
    },
    {
        name: 'Fruit Tree',
        price: 20,
        image: tree,
        description: 'lorem ipsum dolor sit',
        num: 4
    },
]

const moreplace = [
    {
        name: 'Metro',
        price: 15,
        image: 'https://www.shutterstock.com/image-photo/baku-metro-sign-logo-symbol-260nw-1804388092.jpg',
        description: '1 free ticket',
        num: 1
    },
    {
        name: 'Fitness GYM',
        price: 25,
        image: 'https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg',
        description: '10% discount',
        num: 2
    },
    {
        name: 'Yelo Velo',
        price: 40,
        image: 'https://i.pinimg.com/736x/2e/d1/15/2ed115c13891fd913afe5d2f32dfa85f.jpg',
        description: '1 hour free ride',
        num: 3
    },

]

const earns = [
    {
        name: '',
        link: '',
        photo: require('./../../assets/img/earns/google_ads.webp')
    },
    {
        name: '',
        link: '',
        photo: require('./../../assets/img/earns/velo.png')
    },
    {
        name: '',
        link: '',
        photo: require('./../../assets/img/earns/console.png')
    },
    {
        name: '',
        link: '',
        photo: require('./../../assets/img/earns/wallet.webp')
    },
    {
        name: '',
        link: '',
        photo: require('./../../assets/img/earns/luckSpin.png')
    },
]



const Marketplace = () => {

    const router = useRouter()
    const dispatch = useDispatch();

    const userdata = useSelector(selectUserInfo)
    console.log(userdata);

    const handlePress = (plant, price) => {
        
        if(userdata.garden.length<16){
            Toast.show({
                type: 'success',
                text1: 'Purcased',
                text2: ''
            })
            dispatch(setUserData({
                ...userdata,
                garden: [...userdata.garden, plant],
                seedCoin: userdata.seedCoin - price
            }));
        }else{
            Toast.show({
                type: 'error',
                text1: 'Plant is Full',
                text2: ''
            })
        }
        
        
        
        
        
    };
    const handlePressforGain = (benefit, price) => {
        
        if(!(userdata.scoreCoin-price<0)){
            Toast.show({
                type: 'success',
                text1: 'Purcased',
                text2: ''
            })
            dispatch(setUserData({
                ...userdata,
                benefits: [...userdata.benefits, benefit],
                scoreCoin: userdata.scoreCoin - price
            }));
        }else{
            Toast.show({
                type: 'error',
                text1: 'Not Enough Seed Coin',
                text2: ''
            })
        }
    };

    const toastConfig = {
        success: ({ text1, text2, ...rest }) => (
            <View
                style={{
                    height: 60,
                    width: '90%',
                    backgroundColor: '#3f8e4c',
                    borderWidth: 2,
                    borderColor: '#23b85c',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 8,
                    flexDirection:'row',
                    gap:10,
                    alignItems: 'center',
                    marginVertical: 5,

                }}
                {...rest}
            >
                <MaterialIcons name="done" size={24} color="white" />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{text1}</Text>
                {text2 ? <Text style={{ fontSize: 14, color: 'darkgreen' }}>{text2}</Text> : null}
            </View>
        ),
        error: ({ text1, text2, ...rest }) => (
            <View
                style={{
                    height: 60,
                    width: '90%',
                    backgroundColor: '#a04034',
                    borderLeftWidth: 2,
                    borderLeftColor: '#ed4337',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 8,
                    flexDirection:'row',
                    gap:10,
                    alignItems: 'center',
                    marginVertical: 5,
                }}
                {...rest}
            >
                <MaterialIcons name="error-outline" size={24} color="white" />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>{text1}</Text>
                {text2 ? <Text style={{ fontSize: 14, color: 'darkred' }}>{text2}</Text> : null}
            </View>
        ),
        // Add more types as needed
    };


    return (
        <>
            <View style={[Style.Screen, {
                backgroundColor: Style.colors.primary
            }]} >
                <View
                    style={{zIndex:999}}
                >
                    <Toast config={toastConfig} position="top" swipeable={true} />
                </View>

                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <View style={[Style.container, { flex: 1 }]} >
                        <View name='Header'
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: 60,
                                overflow: 'hidden'
                            }}
                        >
                            <Pressable onPress={() => router.back()}>
                                <AntDesign name="arrowleft" size={24} color={Style.colors.light} />
                            </Pressable>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    gap: 10,

                                }}

                            >
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
                                        height: 50,


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
                        <View
                            style={{

                                flex: 1
                            }}
                        >
                            <View
                                style={{

                                    flex: 5
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'poppins-bold',
                                        fontSize: 18,
                                        color: Style.colors.light,
                                    }}
                                >Plants</Text>
                                <ScrollView
                                    style={{

                                    }}
                                >
                                    {plants.map((item, index) => (
                                        <Pressable key={index}
                                            onPress={() => {
                                                handlePress(item.num, item.price)
                                                
                                            }}

                                            style={{
                                                flexDirection: 'row',
                                                height: 100,
                                                backgroundColor: '#158468',
                                                borderRadius: 10,
                                                marginBottom: 10
                                            }} >
                                            <Image source={item.image}
                                                style={{
                                                    flex: 1,
                                                    height: '100%',
                                                    width: 100,
                                                }} />
                                            <View
                                                style={{
                                                    flex: 3,
                                                    flexDirection: 'row',
                                                    padding: 10,
                                                    justifyContent: 'space-between'

                                                }}
                                            >
                                                <View
                                                    style={{
                                                        height: '100%',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            fontFamily: 'poppins',
                                                            color: Style.colors.light,
                                                            fontSize: 25,
                                                            lineHeight: 30
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontFamily: 'poppins',
                                                            color: Style.colors.light,
                                                            opacity: 0.8,
                                                            fontSize: 15,
                                                            lineHeight: 20
                                                        }}
                                                    >
                                                        {item.description}
                                                    </Text>
                                                </View>
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
                                                            width: 20,
                                                            height: 20,
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
                                                    >{item.price}</Text>

                                                </View>
                                            </View>

                                        </Pressable>
                                    ))}
                                </ScrollView>
                            </View>
                            <View
                                style={{

                                    flex: 6
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'poppins-bold',
                                        fontSize: 18,
                                        color: Style.colors.light,
                                    }}
                                >More</Text>
                                <ScrollView
                                    style={{

                                    }}
                                >
                                    {moreplace.map((item, index) => (
                                        <Pressable key={index} style={{
                                            flexDirection: 'row',
                                            height: 100,
                                            backgroundColor: '#158468',
                                            borderRadius: 10,
                                            marginBottom: 10
                                        }} 
                                        onPress={()=>{handlePressforGain(item.num, item.price)}}
                                        
                                        >
                                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}>
                                                <Image source={{ uri: item.image }}
                                                    style={{
                                                        height: 80,
                                                        width: 80,
                                                        borderRadius: 50,

                                                    }} resizeMode='cover' />
                                            </View>

                                            <View
                                                style={{
                                                    flex: 3,
                                                    flexDirection: 'row',
                                                    padding: 10,
                                                    justifyContent: 'space-between'

                                                }}
                                            >
                                                <View
                                                    style={{
                                                        height: '100%',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            fontFamily: 'poppins',
                                                            color: Style.colors.light,
                                                            fontSize: 25,
                                                            lineHeight: 30
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontFamily: 'poppins',
                                                            color: Style.colors.light,
                                                            opacity: 0.8,
                                                            fontSize: 15,
                                                            lineHeight: 20
                                                        }}
                                                    >
                                                        {item.description}
                                                    </Text>
                                                </View>
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
                                                            width: 20,
                                                            height: 20,
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
                                                    >{item.price}</Text>

                                                </View>
                                            </View>

                                        </Pressable>
                                    ))}
                                </ScrollView>
                            </View>
                            <View
                                style={{

                                    flex: 3
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'poppins-bold',
                                        fontSize: 18,
                                        color: Style.colors.light,
                                    }}
                                >Earn</Text>
                                <ScrollView

                                    horizontal={true}
                                    contentContainerStyle={{ flexDirection: 'row', gap: 10 }}  // Keep items aligned horizontally
                                >
                                    {earns.map((item, index) => (
                                        <Pressable
                                            onPress={() => { console.log(123) }}
                                            key={index}
                                            style={{
                                                backgroundColor: '#158468',

                                                borderRadius: 10,
                                                padding: 10,
                                                aspectRatio: 1

                                            }}
                                        >
                                            <Image source={item.photo}
                                                style={{
                                                    width: '100%',
                                                    height: '100%'
                                                }}
                                                resizeMode='contain'
                                            />
                                        </Pressable>
                                    ))}
                                </ScrollView>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Marketplace

const styles = StyleSheet.create({})