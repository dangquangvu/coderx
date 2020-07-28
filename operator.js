// bai 1
var a = 10;

var x = --a + a++;
console.log(x);

// Giải thích vì sao kết quả là 18.
/**
 * vì khi --a thì a sẽ bị trừ đi 1 khi bắt đầu vào câu lệnh, 
 * lúc đó thì giá trị của a khai báo var cũng được thay đổi
 * theo lúc đó a = 9;
 * còn a++ thì khi nào đoạn code được lặp lại thì a sẽ được cộng 
 * thêm còn trong trường hợp này a giữ nguyên giá trị = 9; 
 */

//bài 2
var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
console.log(x);
// Nhấn Run để chạy code
// Thêm cách dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết 
//ra từng dòng để giải thích

/**
 * dòng 17,18 khai báo a,b;
 * dòng 20:
 * a-- => a= 10 
 * b++ => b = 18
 * - ++b = -19
 * - ++a = -11
 * 10 + 18 -19 -11 = -2
 */