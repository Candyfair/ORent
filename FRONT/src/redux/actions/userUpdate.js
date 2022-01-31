export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';
export const fetchUserInfos = () => ({
  type: FETCH_USER_INFOS,
});

export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';
export const saveUserInfos = (data) => ({
  type: SAVE_USER_INFOS,
  data,
});

export const CHANGE_UPDATE_USER_FIELD = 'CHANGE_UPDATE_USER_FIELD';
export const changeUpdateUserField = (value, fieldName) => (
  {
    type: CHANGE_UPDATE_USER_FIELD,
    value,
    fieldName,
  }
);