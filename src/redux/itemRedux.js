import {createSlice} from "@reduxjs/toolkit"

const itemRedux = createSlice({
    name: "items",
    initialState: {
        currentItems: [],
        genre: null,
    },
    reducers: {
        getItemsSuccess: (state, action) => {
            state.currentItems = action.payload;
        },
        setGenre: (state, genre) => {
            state.genre = genre;
        },
        getItemsReducer: (state) => {
            console.log(444)
        }
    }
});

export const {getItemsSuccess, setGenre, getItemsReducer} = itemRedux.actions;
export default itemRedux.reducer;