function isTheSameAnagram(string1, string2) {
  for (let i = 0; i < string1.length; i++) {
    if (string1.length === string2.length && string1.includes(string2[i])) {
      console.log(`${string2[i]} is the letter of ${string1}`);
    } else {
      return false;
    }
  }
  return true;
}
