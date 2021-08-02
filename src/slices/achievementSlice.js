import { createSlice } from "@reduxjs/toolkit";

export const achievementsSlice = createSlice({
  name: "achievements",
  initialState: {
    achievement: [
      {
        name: "10問連続正解",
        info: {
          achieved: false,
          hint: "問題を正解し続ける",
        },
        type: "collect",
      },
      {
        name: "30問連続正解",
        info: {
          achieved: false,
          hint: "問題を正解し続ける",
        },
        type: "collect",
      },
      {
        name: "50問連続正解",
        info: {
          achieved: false,
          hint: "問題を正解し続ける",
        },
        type: "collect",
      },
      {
        name: "100問連続正解",
        info: {
          achieved: false,
          hint: "問題を正解し続ける",
        },
        type: "collect",
      },
    ],
  },
  reducers: {
    changeAchieved(state, action) {
      // const { cnt, type } = action.payload;
      // const clone = Object.assign({}, state);
      // const targetAchievement = clone.findAll((data) => {
      //   return data.type === type;
      // });
      // for (const key in clone.achievement) {
      //   console.log(key);
      // }
      // console.log(targetAchievement);
      // state.achivement.info.achieved = true;
      // const targetAchievement = state.achievement.map((data) => {
      // });
      // console.log(targetAchievement);
      // return clone;
    },
  },
});

export const { changeAchieved } = achievementsSlice.actions;

export default achievementsSlice.reducer;
