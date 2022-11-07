export default function calcDate() {
  const currentDate = new Date();
  const openingDate = new Date(2023, 9, 31, 23, 59, 0);

  const remainingDays = (Math.abs(openingDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
  const days = Math.floor(remainingDays);
  const remainingHours = ((remainingDays - days) * 24);
  const hours = Math.floor(remainingHours);
  const remainingMinutes = ((remainingHours - hours) * 60);
  const minutes = Math.floor(remainingMinutes);
  const remainingSeconds = ((remainingMinutes - minutes) * 60);
  const seconds = Math.floor(remainingSeconds);

  const remainingTime = {
    days, hours, minutes, seconds,
  };

  return remainingTime;
}
