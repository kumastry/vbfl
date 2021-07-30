import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    card: []
  },
  reducers: {
    addCard(state, action){
      state.card.push(action.payload);
    },
    deleteCard(state, action) {
      const {cid} = action.payload;
      console.log(cid);
      const sliceid = state.card.findIndex((data) => {
        return data.id === cid;
      });
      console.log(sliceid);
      if(cid !== -1) {
        state.card.splice(sliceid, 1);
      }
    }
    ,
    addWord(state, action){
      const {Id, word, translate} = action.payload;
      console.log(Id);
      console.log(word);
      console.log(translate);
      console.log(state.card);
      const existingCard = state.card.find((data) => {
        return data.id === Id;
      });
    
      if(existingCard) {
          existingCard.content.push({
            word,
            translate
        });
      }
    },

    deleteWord(state, action) {


    }
  
  }
})

// Action creators are generated for each case reducer function
export const {addCard, addWord, deleteCard} = cardsSlice.actions;

export default cardsSlice.reducer