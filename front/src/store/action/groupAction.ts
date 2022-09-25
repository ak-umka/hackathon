import { Types, Group } from "../types";
import { Dispatch } from "redux";
import axiosInstance from "../server";
import { SET_GROUP_SUCCESSFUL, SET_GROUP_FAILED } from "../actionTypes";

type GroupInfo = {
  group: Group[];
};

export const createGroup = (id: any, options: any) => async (dispatch: Dispatch<any>) => {
  try {
    const res = await axiosInstance.post<GroupInfo>(`http://localhost:3000/api/v0/getSchool/${id}/createGroups`, options);
    dispatch({
      type: SET_GROUP_SUCCESSFUL,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: SET_GROUP_FAILED
    });
  }
};

export const deleteGroup = (id: any, groupId: any) => async (dispatch: Dispatch<any>) => {
  try {
    const res = await axiosInstance.delete<GroupInfo>(`http://localhost:3000/api/v0/getSchool/${id}/deleteGroups/${groupId}`);
    dispatch({
      type: SET_GROUP_SUCCESSFUL,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: SET_GROUP_FAILED
    });
  }
}