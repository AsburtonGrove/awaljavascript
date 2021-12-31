var Penumpang = [];

var tambahPenumpang = function (namaPenumpang, Penumpang) {
  if (Penumpang.length == 0) {
    Penumpang.push(namaPenumpang);
    return Penumpang;
  } else {
    for (var i = 0; i < Penumpang.length; i++) {
      if (Penumpang[i] == undefined) {
        Penumpang[i] = namaPenumpang;
        return Penumpang;
      } else if (Penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + " sudah ada didalam angkot");
        return Penumpang;
      } else if (i == Penumpang.length - 1) {
        Penumpang.push(namaPenumpang);
        return Penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, Penumpang) {
  if (Penumpang.length == 0) {
    console.log("angkot kosong dan tidak mungkin ada Penumpang turun");
  } else {
    for (var i = 0; i < Penumpang.length; i++) {
      if (Penumpang[i] == namaPenumpang) {
        Penumpang[i] = undefined;
        return Penumpang;
      } else if (i == Penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada didalam angkot");
        return Penumpang;
      }
    }
  }
  return Penumpang;
};
