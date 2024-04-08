export const formatDate = (dateString: string | number | Date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = new Date(dateString);
  const day = days[date.getDay()];
  const time = `${date.getHours()}:00`;
  return `${day} ${time}`;
};
