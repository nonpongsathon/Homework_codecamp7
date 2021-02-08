function changeStringToThaiDate() {
  let input = prompt("Enter the date in the following format : dd-mm-yy");
  12 - 11 - 1996;
  let month = input[3] + input[4];
  let date = input[0] + input[1];
  let year = input[6] + input[7] + input[8] + input[9];
  let monthName = "";
  let dateNumber = 0;
  switch (month) {
    case "01":
      monthName = "มกราคม";
      break;
    case "02":
      monthName = "กุมภาพันธ์";
      break;
    case "03":
      monthName = "มีนาคม";
      break;
    case "04":
      monthName = "เมษายน";
      break;
    case "05":
      monthName = "พฤษภาคม";
      break;
    case "06":
      monthName = "มิถุนายน";
      break;
    case "07":
      monthName = "กรกฎาคม";
      break;
    case "08":
      monthName = "สิงหาคม";
      break;
    case "09":
      monthName = "กันยายน";
      break;
    case "10":
      monthName = "ตุลาคม";
      break;
    case "11":
      monthName = "พฤศจิกายน";
      break;
    case "12":
      monthName = "ธันวาคม";
      break;
    default:
      return "Error";
  }

  if (monthName.includes("ยน")) {
    if (Number(date) > 30) {
      return "Error";
    }
  } else if (monthName.includes("พันธ์")) {
    if (Number(date) > 29) {
      return "Error";
    }
  }

  return `วันที่ ${date} เดือน${monthName} พ.ศ. ${Number(year) + 543}`;
}
