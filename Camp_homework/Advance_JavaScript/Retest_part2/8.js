function toChange(money) {
  let moneyLeft = money;
  function updateMoney(bank, number) {
    return (moneyLeft = moneyLeft - bank * number);
  }
  let oneThousand = Math.floor(moneyLeft / 1000);
  updateMoney(1000, oneThousand);
  let fiveHundred = Math.floor(moneyLeft / 500);
  updateMoney(500, fiveHundred);
  let oneHundred = Math.floor(moneyLeft / 100);
  updateMoney(100, oneHundred);
  let fifty = Math.floor(moneyLeft / 50);
  updateMoney(50, fifty);
  let twenty = Math.floor(moneyLeft / 20);
  updateMoney(20, twenty);
  let ten = Math.floor(moneyLeft / 10);
  updateMoney(10, ten);
  let five = Math.floor(moneyLeft / 5);
  updateMoney(5, five);
  let two = Math.floor(moneyLeft / 2);
  updateMoney(2, two);
  let one = moneyLeft;

  return `แบงค์พัน ${oneThousand} ใบ / แบงค์ห้าร้อย ${fiveHundred} ใบ / แบงค์ร้อย ${oneHundred} ใบ / แบงค์ห้าสิบ ${fifty} ใบ / แบงค์ยี่สิบ ${twenty} ใบ / เหรียญสิบ ${ten} เหรียญ / เหรียญห้า ${five} เหรียญ / เหรียญสองบาท ${two} เหรียญ / เหรียญบาท ${one} เหรียญ`;
}
