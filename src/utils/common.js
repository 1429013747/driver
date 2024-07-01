// 标准时间转换
export const formatDate = (time) => {
  const datetime = new Date(time);
  const year = datetime.getFullYear();
  const month = datetime.getMonth();
  const date = datetime.getDate();
  const hour = datetime.getHours();
  const minute = datetime.getMinutes();
  const second = datetime.getSeconds();
  const result1 =
    // year +
    // "-" +
    // (month + 1 >= 10 ? month + 1 : "0" + (month + 1)) +
    // "-" +
    // (date + 1 < 10 ? "0" + date : date) +
    " " +
    (hour + 1 < 10 ? "0" + hour : hour) +
    ":" +
    (minute + 1 < 10 ? "0" + minute : minute) +
    ":" +
    (second + 1 < 10 ? "0" + second : second);

  const result2 =
    year +
      "-" +
      (month + 1 >= 10 ? month + 1 : "0" + (month + 1)) +
      "-" +
      date +
      1 <
    10
      ? "0" + date
      : date;
  const result3 =
    year +
    "-" +
    (month + 1 >= 10 ? month + 1 : "0" + (month + 1)) +
    "-" +
    (date + 1 < 10 ? "0" + date : date);

  const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const result = {
    dateTime: result1,
    date: week[result2],
    month: result3,
  };
  return result;
};
