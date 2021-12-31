function JuraganAngkot(supir, trayek, kas, penumpang) {
  this.supir = supir;
  this.trayek = trayek;
  this.kas = kas;
  this.penumpang = penumpang;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("angkot masih kosong!");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new JuraganAngkot("sandhika galih", ["pasar minggu", "melawai"], 0, []);
var angkot2 = new JuraganAngkot("Angga wijaya", ["blok m", "senayan city"], 0, []);
