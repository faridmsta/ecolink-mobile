import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {
            name: "Farid",
            surname: "Mustafayev",
            username: 'faridmsta',
            profileimg: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg',
            email: "example@gmail.com",
            password: "12345678",
            phone: "+994 (99) 381-65-26",
            seedCoin: 82,
            scoreCoin: 50,
            balance: 12.54,
            rank: 4,
            garden: [
                1
                // her bitkinin reqemi var
            ],
            benefits:[],
            mapTreeLocations:[
                // {x:'',y:''}
            ]
        }
    },
    reducers: {
        setUserData: (state, action) => {
            state.data = {
                ...state.data,
                ...action.payload,  
            };
            console.log('worked');
        }
        
    }
})

export const { setUserData } = userSlice.actions;



export const selectUserInfo = (state) => (state.user.data);


export default userSlice.reducer;

