import {configureStore} from "@reduxjs/toolkit";
import cardReducer from "./cart/reducer";
import gamesReducer from './game/reducer';

export const store = configureStore({
    reducer: {
        card: cardReducer,
        game: gamesReducer,
    }
})