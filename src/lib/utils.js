export const formatSecondsToReadableTime = (currentTime) => {
  const tempMin =  Math.floor(currentTime / 60);
  const tempSec = Math.floor(currentTime % 60);
  return `${tempMin}:${tempSec < 10 ? '0'+tempSec : tempSec}`;
}