import { createSlice } from "@reduxjs/toolkit";
import { cardData } from "../../data/cardData";
/* Cards State has form:
{
    cards: {
        cards: {
            '101': {
                id: '101',
                front: 'front text',
                back: 'back text'
            }
        }
    }
}
*/
export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {},
  },
  reducers: {
    /* action.payload has form:
    { id: '101', front: 'front text', back: 'back text' }
    */
    loadCards: (state) => {
      state.cards = cardData;
    },
    addCard: (state, action) => {
      state.cards = {
        ...state.cards,
        [action.payload.id]: action.payload,
      };
    },
  },
});
export const { addCard, loadCards } = cardsSlice.actions;
export const selectCards = (state) => state.cards.cards;
export default cardsSlice.reducer;
