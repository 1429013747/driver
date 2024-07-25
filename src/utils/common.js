// 标准时间转换
export const formatDate = (time) => {
  const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const datetime = new Date(time);
  const year = datetime.getFullYear();
  const month = datetime.getMonth() + 1;
  const date = datetime.getDate();
  const hour = datetime.getHours();
  const minute = datetime.getMinutes();
  const second = datetime.getSeconds();
  const result1 =
    hour.toString().padStart(2, "0") +
    ":" +
    minute.toString().padStart(2, "0") +
    ":" +
    second.toString().padStart(2, "0");

  const result2 = datetime.getDay();
  const result3 =
    year +
    "-" +
    month.toString().padStart(2, "0") +
    "-" +
    date.toString().padStart(2, "0");

  const result = {
    dateTime: result1,
    week: week[result2],
    day: result3,
  };
  return result;
};
