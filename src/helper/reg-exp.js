export const passwordSmallLetter = new RegExp(/[a-z]/g);
export const passwordCapitalLetter = new RegExp(/[A-Z]/g);
export const passwordNumber = new RegExp(/[0-9]/g);
export const passwordSpecialChar = new RegExp(/[!@#$%^&)(+=.-]/g);
export const passwordLength = new RegExp(/[a-zA-Z0-9!@#$%^&)(+=.-]{6}/g);

export const regExp_WholeNumber = new RegExp(/^-?\d+$/);
export const regExp_Names = new RegExp(/^[a-zA-Z\s]+$/);
export const regExp_StudentId = new RegExp(/^\d{4}-\d{2}-\d{6}$/);
export const regExp_Username = new RegExp(/^[a-zA-Z0-9\s]+$/);
export const regExp_PHMobileNumber = new RegExp(
  /^\+?(639[0-9]{0,9}|09[0-9]{0,9})$/
);
export const regExp_Email = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
);
export const regExp_Longitude = new RegExp(
  /^[-+]?((1[0-7]\d|[1-9]?\d)(\.\d+)?|180(\.0+)?)$/
);
export const regExp_Latitude = new RegExp(
  /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/
);
