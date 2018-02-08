import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  EDIT_ITEM_UPDATE,
  COMPLETE_ITEM,
  RESORT_ITEM,
  TOGGLE_FILTER,
} from '../constants/actionTypes';

export const onItemAdd = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const onItemRemove = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});

export const onItemEdit = (payload) => ({
  type: EDIT_ITEM,
  payload,
});

export const onItemUpdate = (payload) => ({
  type: EDIT_ITEM_UPDATE,
  payload,
});

export const onItemComplete = (payload) => ({
  type: COMPLETE_ITEM,
  payload,
});

export const onItemFilterOut = () => ({
  type: TOGGLE_FILTER,
});

export const onItemSort = (payload) => ({
  type: RESORT_ITEM,
  payload,
});
