// function untuk menampilkan hasil luas
function klikLuas() {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;
    const hasilluas = 0.5 * alas * tinggi;
    document.getElementById("hasil_luas").innerHTML = hasilluas;
    alert("Rumus luas segitiga adalah 1/2 * Alas * Tinggi.   Jadii jika" + " " + "0.5" + "*" + alas + "*" + tinggi + "=" + hasilluas)
}
// function untuk mereset luas
function resetLuas() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasil_luas").innerHTML = "";
}
// function untuk menampilkan hasil keliling
function klikKeliling() {
    const sisia = document.getElementById("sisia").value;
    const sisib = document.getElementById("sisib").value;
    const sisic = document.getElementById("sisic").value;
    const hasilkeliling = parseInt(sisia) + parseInt(sisib) + parseInt(sisic);
    document.getElementById("hasil_keliling").innerHTML = hasilkeliling;
    alert("Rumus Keliling segitiga adalah SisiA + SisiB + SisiC.   Jadii jika" + " " + sisia + "+" + sisib + "+" + sisic + "=" + hasilkeliling)
}
// function untuk mereset keliling
function resetKeliling() {
    document.getElementById("sisia").value = "";
    document.getElementById("sisib").value = "";
    document.getElementById("sisic").value = "";
    document.getElementById("hasil_keliling").innerHTML = "";
}   