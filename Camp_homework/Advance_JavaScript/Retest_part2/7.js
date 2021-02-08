function numberOfSquare(height, width) {
  let divider = 1;
  if (height >= width) {
    divider = height;
  } else {
    divider = width;
  }
  let result;
  for (divider; divider > 0; divider--) {
    if (height % divider === 0 && width % divider === 0) {
      result = (height / divider) * (width / divider);
      break;
    }
  }
  return result;
}
