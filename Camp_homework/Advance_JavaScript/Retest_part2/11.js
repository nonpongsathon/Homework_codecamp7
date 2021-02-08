function dotProduct(vector1, vector2) {
  let maxLength;
  if (vector1.length >= vector2.length) {
    maxLength = vector1.length;
  } else {
    maxLength = vector2.length;
  }

  for (let i = 0; i < maxLength; i++) {
    if (vector1.length > vector2.length) {
      vector2.push(0);
    } else if (vector2.length > vector1.length) {
      vector1.push(0);
    }
  }
  let sum = 0;
  for (let j = 0; j < maxLength; j++) {
    sum += vector1[j] * vector2[j];
  }

  return sum;
}
