export const ACHIEVEMENT_TYPE = {
  collect: {
    continuous: "continuousCollectCount",
    total: "totalCollectCount",
  },
};

export const ACHIEVEMENTS = [
  {
    name: "10問連続正解",
    hint: "問題を正解し続ける",
    type: ACHIEVEMENT_TYPE.collect.continuous,
    release: 10,
  },
  {
    name: "30問連続正解",
    hint: "問題に正解し続ける",
    type: ACHIEVEMENT_TYPE.collect.continuous,
    release: 30,
  },
  {
    name: "50問連続正解",
    hint: "問題を正解し続ける",
    type: ACHIEVEMENT_TYPE.collect.continuous,
    release: 50,
  },
  {
    name: "100問連続正解",
    hint: "問題を正解し続ける",
    type: ACHIEVEMENT_TYPE.collect.continuous,
    release: 100,
  },
  {
    name: "累計10問正解",
    hint: "問題を正解し続ける",
    type: ACHIEVEMENT_TYPE.collect.total,
    release: 10,
  },
  {
    name: "累計100問正解",
    hint: "問題を正解し続ける",
    type: ACHIEVEMENT_TYPE.collect.total,
    release: 100,
  },
  {
    name: "累計1000問正解",
    hint: "問題を正解し続ける",
    type: ACHIEVEMENT_TYPE.collect.total,
    release: 1000,
  },
];
