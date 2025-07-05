export const antDFormatDate = (date) => {
  const year = date.$y;
  const month = String(date.$M + 1).padStart(2, "0");
  const day = String(date.$D).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const antDFormatTime = (date) => {
  const hours = String(date.$H).padStart(2, "0");
  const minutes = String(date.$m).padStart(2, "0");
  return `${hours}:${minutes}`;
};
