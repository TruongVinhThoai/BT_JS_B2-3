// Bai 1
function total() {
  var inputSalary = document.getElementById("salary").value * 1;
  var inputDays = document.getElementById("days").value * 1;
  var total = inputSalary * inputDays;
  var result_salary = document.getElementById("result_salary");
  result_salary.innerText = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "VND",
  }).format(total);
}
// Bai 2

function avg() {
  var inputN1 = document.getElementById("n1").value * 1;
  var inputN2 = document.getElementById("n2").value * 1;
  var inputN3 = document.getElementById("n3").value * 1;
  var inputN4 = document.getElementById("n4").value * 1;
  var inputN5 = document.getElementById("n5").value * 1;

  var numAVG = (inputN1 + inputN2 + inputN3 + inputN4 + inputN5) / 5;
  var result_AVG = document.getElementById("result_AVG");
  result_AVG.innerText = numAVG;
}
//Bai 3

const number = 23500;

function doiTien() {
  var inputUsd = document.getElementById("usd").value * 1;
  var vnd = number * inputUsd;

  document.getElementById("result_doiTien").innerText = new Intl.NumberFormat(
    "de-DE",
    { style: "currency", currency: "VND" }
  ).format(vnd);
}

//Bai 4
function tinh() {
  var inputChieudai = document.getElementById("chieudai").value * 1;
  var inputChieurong = document.getElementById("chieurong").value * 1;
  var dientich = inputChieudai * inputChieurong;
  var chuvi = (inputChieudai + inputChieurong) * 2;
  document.getElementById(
    "result_tinh"
  ).innerHTML = `Dien Tich: ${dientich} <br> Chu vi: ${chuvi}`;
}
//Bai 5
function tinhTong() {
  var inputNum = document.getElementById("num").value * 1;
  var donvi = inputNum % 10;
  var chuc = Math.floor(inputNum / 10);
  var tong = donvi + chuc;
  if (inputNum == "") {
    alert("Ban chua nhap so");
  } else if (inputNum > 99) {
    alert("Nhap sai");
  } else {
    document.getElementById("result_tinhtong").innerText = tong;
  }
}
