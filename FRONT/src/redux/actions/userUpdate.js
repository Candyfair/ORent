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

export const SAVE_UPDATE_USER_INFOS = 'SAVE_UPDATE_USER_INFOS';
export const saveUpdateUserInfos = (data) => ({
  type: SAVE_UPDATE_USER_INFOS,
  data,
});

export const CHANGE_PASSWORD_SWITCH = 'CHANGE_PASSWORD_SWITCH';
export const changePasswordSwitch = () => ({
  type: CHANGE_PASSWORD_SWITCH,
});