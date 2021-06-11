const useActualDateToString = () => {
  const fullDate = new Date();
  let dayDate = fullDate.getDate();

  if (dayDate < 10) {
    dayDate = "0" + dayDate;
  }
  let monthDate = fullDate.getMonth() + 1;

  if (monthDate < 10) {
    monthDate = "0" + monthDate;
  }
  const yearDate = fullDate.getFullYear();

  return `${yearDate}-${monthDate}-${dayDate}`;
};

export default useActualDateToString;