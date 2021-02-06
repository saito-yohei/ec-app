import { createSelector } from "reselect";

const usersSelector = (state) => state.users; //ここでのstateはStore全体で管理しているstateのこと
export const getSignedIn = createSelector(
  [usersSelector],
  (state) => state.isSignedIn
);

export const getUserId = createSelector(
  //createSelectorの引数に以下の2つを渡す
  [usersSelector],
  (state) => state.uid //ここでのstateは上記で(state) => state.users とした部分のこと。つまりStore全体で管理しているstateの中のusrsのこと。state => state.uid はstate.usersの中のuidのことを指す。
);

export const getUsername = createSelector(
  //createSelectorの引数に以下の2つを渡す
  [usersSelector],
  (state) => state.username //ここでのstateは上記で(state) => state.users とした部分のこと。つまりStore全体で管理しているstateの中のusrsのこと。state => state.uid はstate.usersの中のuidのことを指す。
);
