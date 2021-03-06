export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const compareJSON = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
}