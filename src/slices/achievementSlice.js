import { createSlice } from "@reduxjs/toolkit";
import { ACHIEVEMENTS, ACHIEVEMENT_TYPE } from "../const/achievement";

// const initialState = {
//   // achievement: [
//   //   {
//   //     name: "10問連続正解",
//   //     info: {
//   //       achieved: false,
//   //       hint: "問題を正解し続ける",
//   //     },
//   //     type: "collect",
//   //     relesaseCount: 10,
//   //   },
//   //   {
//   //     name: "30問連続正解",
//   //     info: {
//   //       achieved: false,
//   //       hint: "問題を正解し続ける",
//   //     },
//   //     type: "collect",
//   //     relesaseCount: 30,
//   //   },
//   //   {
//   //     name: "50問連続正解",
//   //     info: {
//   //       achieved: false,
//   //       hint: "問題を正解し続ける",
//   //     },
//   //     type: "collect",
//   //     relesase: 50,
//   //   },
//   //   {
//   //     name: "100問連続正解",
//   //     info: {
//   //       achieved: false,
//   //       hint: "問題を正解し続ける",
//   //     },
//   //     type: "collect",
//   //   },
//   //   {
//   //     name: "累計100問正解",
//   //     info: {
//   //       achieved: true,
//   //       hint: "問題を正解し続ける",
//   //     },
//   //     type: "collect",
//   //   },
//   //   {
//   //     name: "累計1000問正解",
//   //     info: {
//   //       achieved: false,
//   //       hint: "問題を正解し続ける",
//   //     },
//   //     type: "collect",
//   //   },
//   // ],
// };

const initialState = {
  achievedNames: [], //localStorageから取ってくる
  continuousCollectCount: 0,
  totalCollectCount: 0,
};

export const achievementsSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    continuousCountUp: (state, action) => {
      state.continuousCollectCount += 1;
    },
    totalCollectCountUp: (state, action) => {
      state.totalCollectCount += 1;
    },

    toggleAchievement: (state, action) => {
      const { targetType } = action.payload;

      if (targetType === "collect") {
        const achievedNameSet = new Set(state.achievedNames);
        ACHIEVEMENTS.forEach((achievement) => {
          if (
            achievement.type === ACHIEVEMENT_TYPE[targetType].continuous &&
            state.continuousCollectCount >= achievement.release
          ) {
            achievedNameSet.add(achievement.name);
          }
          if (
            achievement.type === ACHIEVEMENT_TYPE[targetType].total &&
            state.totalCollectCount >= achievement.release
          ) {
            achievedNameSet.add(achievement.name);
          }
        });
        const achievementNames = Array.from(achievedNameSet);
        // localStorage.setItem("achivements", achievementNames);
        state.achievedNames = achievementNames;
      }
    },
    // changeAchieved(state, action) {
    //   const { cnt, type } = action.payload;
    //   const clone = Object.assign({}, state);
    //   const targetAchievement = clone.achievement.filter((data) => {
    //     return data.type === type;
    //   });
    //   for (const key in clone.achievement) {
    //     console.log(key);
    //   }
    //   console.log(targetAchievement);
    //   state.achivement.info.achieved = true;
    //   // const targetAchievement = state.achievement.map((data) => {
    //   // });
    //   // console.log(targetAchievement);
    //   return clone;
    // },
  },
});

export const { toggleAchievement, totalCollectCountUp, continuousCountUp } =
  achievementsSlice.actions;

export default achievementsSlice.reducer;
