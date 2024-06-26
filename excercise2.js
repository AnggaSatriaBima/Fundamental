// Soal No.1 Odd atau Even
// Buatlah sebuah script untuk mencari angka apakah Odd atau Even
// Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

// let num = 25

// if (num % 2 == 0) {
//     console.log("Even Number");
// } else {
//     console.log("Odd Number");
// }

// ternary oprator
// console.log(num % 2 == 0);

// Soal No.2 Prime
// Buatlah sebuah script untuk mencari nilai prima/prime atau bukan
// Bilangan prima habis dibagi 1 dan habis dibagi bilangan itu sendiri
// Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

// let num = 7
// let divider = 0

// for (let i = 1; i <= num; i++) { // Loopingan dari 1-7
//     if (num % i == 0) divider++   
// }

// console.log(
//     divider == 2 ? `${num} is a prime number `: `${num} is not a prime number `
// );

// // Looping di dalam Looping
// for (let i = 1; i <= 10; i++){
//     let divider = 0
//     for (let j = 1; j <= i; j++){
//         if (i % j == 0) divider++
//     }
//     console.log(
//         divider == 2 ? `${i} is a prime number `: `${i} is not a prime number `
//     );
// }

// Soal No. 3 SUM
// Mencari jumlah semua angka jika 1 + N
// Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

// let n = 5
// let res = 0 // res adalah variabel penampung

// for (let i = 1; i<= n; i++){
//     res += i
// }

// console.log(res);

// Soal No. 4 Faktorial Perkalian
// Soal Faktorial
// Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

// let n = 6
// let res = 1

// for (let i = n; i > 0; i--){
//     res *= i
// }

// console.log(res);

// Soal No. 5 FIBONACCI Number (deret dimana bilangnya selanjutnya penjumlahan angka sebelumnya)
// Buatlah kode yang menampilkan bilangan fibonaci ke 15
// Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610
// 0, 1, 1, 2, 3, 5, 8 dan seterusnya

let num = 15 // mencari angka fibonacci ke 15
let a = 0 // angka pertama
let b = 1 // angka ke dua

for (let i = 1; i < num; i++){
    let nextNumber = a + b //untuk menentukan angka selanjutnya
    a = b //untuk mengganti nilai a menjadi b
    b = nextNumber //untuk mengganti nilai b menjadi angka selanjutnya mengacu ke var nextNumber
}
console.log(a);
console.log(b);
