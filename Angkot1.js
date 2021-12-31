var tanya = true;
while (tanya) {
  // menangkap pilihan playernya
  var p = prompt("silahkan pilih : orang , semut , gajah");
  //menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();
  if (comp <= 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // menentukan rulesnya
  var hasil = "";

  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "Memasukkan pilihan yang salah!";
  }
  // tampilkan hasilnya
  alert("Kamu memilih :  " + p + " dan komputer memilih : " + comp + "\nMaka Hasilnya : Kamu " + hasil);
  tanya = confirm("lagi?");
}

alert("terimakasih telah bermain :)");

//   if (comp == "orang") {
//     hasil = "MENANG!";
//   } else {
//     hasil = "KALAH";
//   }
