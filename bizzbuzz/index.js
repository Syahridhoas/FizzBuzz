let nomor = document.getElementById("angka");
let btn = document.querySelector("button");
let hasil = document.getElementById("hasil");

btn.onclick = fizzbuzz = () => {
  for (let i = 0; i <= nomor.value; i++) {
    if (i === 0) {
      document.write("<li>0</li>");
    } else if (i % 3 === 0 && i % 5 === 0) {
      document.write("<li>FizzBuzz</li>");
    } else if (i % 3 === 0) {
      document.write("<li>Fizz</li>");
    } else if (i % 5 === 0) {
      document.write("<li>Buzz</li>");
    } else {
      document.write(`<li>${i}</li>`);
    }
  }
};
