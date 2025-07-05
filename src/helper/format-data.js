import moment from "moment";

export const arrayToSelectDropdown = (arr, keyValue, keyLabel) => {
  return arr.map((obj) => ({ label: obj[keyLabel], value: obj[keyValue] }));
};

export const getKeyFromValue = (array, value) => {
  return Object.keys(array).find((key) => array[key] === value);
};

export const getAge = (birthdate) => {
  return moment().diff(birthdate, "years");
};

export const formatNavigations = (arr) => {
  return Object.entries(arr)
    .reduce((acc, [key, data]) => {
      const newData = data.map((obj) => ({ ...obj, module: key }));
      acc.push(newData);
      return acc;
    }, [])
    .flat();
};
