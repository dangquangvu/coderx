var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
/**
 * gán a = [1, 2]; b = [1, 2]; là đang gán a và b đến 2 đối tượng khác nhau (được đặt ở các vùng nhớ khác nhau trong bộ nhớ, mặc dù hai đối tượng này có cùng giá trị).
 */


var a = {
    foo: 'bar'
};

var b = {
    foo: 'bar'
};

console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.

/**
 * hai object === nhau khi chúng là 1, còn ở đây khi khai báo var a, var b là ta đang tạo ra hai vùng nhớ khác nhau để lưu hai biến, nên kết quả ra false.
 */

var a = '1000';
var b = '200';

console.log(a > b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. Viết câu trả lời ở dưới đây.

/**
 * ta đang so sánh 2 chuỗi a và b chứ không phải 2 số, vì thế kết quả ra là false.
 */