var mang = [];

function themmoi() {
    var ten = document.getElementById('ten').value;
    var sdt = document.getElementById('sdt').value;
    var email = document.getElementById('email').value;
    var checkemail = /^\w+@[a-zA-Z]{3,}\.com$/i;
    if (ten == "" && ten == null) {
        alert("tên không dược để chống")
        return ten;
    }

    if (isNaN(sdt)) {
        alert("số điện thoại bắt buộc phải ghi số")
        return sdt;
    }
    if (sdt.length < 10 || sdt.length > 10) {
        alert("số điện thoại không hợp lệ")
        return sdt;
    }
    if (!checkemail.test(email)) {
        alert("email không hợp lệ")
        return email;
    }
    var mangcon = [ten, sdt, email];
    if (sualoi == -1) {
        mang.push(mangcon);
        hienthi(mang);

    } else {
        mang[sualoi][0] = ten;
        mang[sualoi][1] = sdt;
        mang[sualoi][2] = email;
        console.log(mang[sualoi])
        sualoi = -1;
        document.getElementById('capnhat').innerHTML = "đăng ký";
        hienthi(mang);
        console.log("hien thi")
    }
}
function hienthi(mang) {
    var kq = "<h1>danh sách</h1>";
    kq += "<table >";
    kq += "<tr>";
    kq += "<td>stt</td>";
    kq += "<td>tên người dùng</td>";
    kq += "<td>số điện thoại</td>";
    kq += "<td>email</td>";
    kq += "<td>hành động</td>";
    kq += "</tr>";
    for (var i = 0; i < mang.length; i++) {
        kq += "<tr>";
        kq += "<td>" + (i + 1) + "</td>";
        kq += "<td>" + mang[i][0] + "</td>";
        kq += "<td>" + mang[i][1] + "</td>";
        kq += "<td>" + mang[i][2] + "</td>";
        kq += '<td><button onclick="xoa(' + i + ')">xoá</button>';
        kq += '<button onclick="sua(' + i + ')">sua</button></td>';
        kq += "</tr>";
    }
    kq += "</table>";
    document.getElementById("kq").innerHTML = kq;
}

function xoa(x) {
    mang.splice(x, 1);
    hienthi(mang);
}
var sualoi = -1
function sua(x) {
    sualoi = x
    var nguoidung = mang[x];
    document.getElementById('ten').value = nguoidung[0];
    document.getElementById('sdt').value = nguoidung[1];
    document.getElementById('email').value = nguoidung[2];
    document.getElementById('capnhat').innerHTML = "cập nhật";

}