function chuyen(){
    window.location.href="giohang.html";
}

var itemList={
    "sp001":{"name":"Bút gỗ Maple Trắng Nắp","price":200000, "photo":"./img/Sanpham/butgomapeltrangnap.png"},
    "sp002":{"name":"Bút Gỗ Maple Trắng Xoay","price":150000, "photo":"./img/Sanpham/butgomapeltrangxoay.png"},
    "sp003":{"name":"Bút Gỗ Sưa Xoay","price":790000, "photo":"./img/Sanpham/butgosuaxoay.png"},
    "sp004":{"name":"Bút Gỗ Sưa Nắp","price":890000, "photo":"./img/Sanpham/butgoosuanap.png"},
    "sp005":{"name":"Bút gỗ Mun Nắp","price":590000, "photo":"./img/Sanpham/butgomunnap.png"},
    "sp006":{"name":"Bút Kim Loại BGTY10","price":200000, "photo":"./img/Sanpham/butkimloaiPGTY10.jfif"},
    "sp007":{"name":"Bút Kim Loại BGTY9","price":330000, "photo":"./img/Sanpham/butkimloaiBGTY9.jfif"},
    "sp008":{"name":"Bút Kim Loại BGTY8","price":220000, "photo":"./img/Sanpham/butkimloaiBGTY8.jfif"},
    "sp009":{"name":"Bút Kim Loại BGTY7","price":270000, "photo":"./img/Sanpham/butkimloaiBGTY7.jfif"},
    "sp010":{"name":"Bút Kim Loại BGTY6","price":230000, "photo":"./img/Sanpham/butkimloaiBGTY6.jfif"},
    "sp011":{"name":"Bút gỗ Mapel Nâu Xoay","price":180000, "photo":"./img/Sanpham/butgomapelnauxoay.png"},
    "sp012":{"name":"Bút gỗ Mapel Nâu Nắp","price":300000, "photo":"./img/Sanpham/butgomapelnaunap.png"},
    "sp013":{"name":"Đế Gỗ Điện Thoại","price":100000, "photo":"./img/Sanpham/đeienthoaibanggo.jfif"},
    "sp014":{"name":"Móc khóa hình tròn","price":190000, "photo":"./img/Sanpham/mockhoakhachinhtron.jfif"},
    "sp015":{"name":"Móc Khóa Khắc Hình Trái Tim","price":190000, "photo":"./img/Sanpham/mockhoakhachinhtraitim.jfif"},
    "sp016":{"name":"Hộp Cắm Bút Bằng Gỗ","price":190000, "photo":"./img/Sanpham/hopcambutbanggo.jfif"},
    "sp017":{"name":"Hộp Name Card Gỗ","price":150000, "photo":"./img/Sanpham/hopnamecardgo.jfif"},
    "sp018":{"name":"Tranh Gỗ Khắc Chân Dung","price":500000, "photo":"./img/Sanpham/tranhkhacgochandung.png"},
    "sp019":{"name":"Lịch Gỗ Để Bàn","price":350000, "photo":"./img/Sanpham/lichgodeban.jfif"},
    "sp020":{"name":"Móc Khóa Khắc Hình","price":190000, "photo":"./img/Sanpham/mockhoakhachinh.jfif"},
    "sp021":{"name":"Đồng Hồ Gỗ Khắc Hình","price":500000, "photo":"./img/Sanpham/timthumb.jfif"},
    "sp022":{"name":"Combo Hộp Bút Gỗ Tình Yêu BGTY8","price":290000, "photo":"./img/Sanpham/combobutgoBGTY8.jfif"},
    "sp023":{"name":"Combo Hộp Bút Gỗ Tình Yêu BGTY7","price":310000, "photo":"./img/Sanpham/combobutgoBGTY7.jfif"},
    "sp024":{"name":"Combo Hộp Bút Gỗ Tình Yêu BGTY6","price":230000, "photo":"./img/Sanpham/combobutgoBGTY6.jfif"},
    "sp025":{"name":"Combo Hộp Bút Gỗ Tình Yêu BGTY5","price":330000, "photo":"./img/Sanpham/combobutgoBGTY5.jfif"},
    "sp026":{"name":"Combo Hộp Bút Gỗ Tình Yêu BGTY4","price":380000, "photo":"./img/Sanpham/combobutgoBGTY4.jfif"},
    "sp027":{"name":"Combo Hộp Bút Gỗ Tình Yêu BGTY3","price":350000, "photo":"./img/Sanpham/HBTY3combo.png"},
    "sp028":{"name":"Combo Hộp Bút Gỗ Tình Yêu BGTY2","price":230000, "photo":"./img/Sanpham/combobutgoBGTY2.jfif"},
    "sp029":{"name":"Combo Hộp Bút Gỗ Tình Yêu BGTY1","price":230000, "photo":"./img/Sanpham/combobutgoBGTY1.jfif"}
}

function addCart(code){
    var number=parseInt(document.getElementById(code).value); 
    var name=itemList[code].name;
    if(number==0)
    return;
    if(typeof localStorage[code] === "undefined"){
        window.localStorage.setItem(code,number);   
    }
    else{
        var current=parseInt(window.localStorage.getItem(code));
        if(current+number>100)
        {
            window.localStorage.setItem(code,100);
            alert("Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm của "+name+" này.");
            return; 
        }
        else
            window.localStorage.setItem(code,current+number);
        }
        alert("Đã cập nhật sản phẩm "+name+" với số lượng là "+number+" vào giỏ hàng. Số lượng sản phẩm "+name+" đã đặt là "+parseInt(window.localStorage.getItem(code))+".");
}

function getDiscountRate(){
    var d=new Date();//lấy ngày hiện tại của máy tính
    var weekday=d.getDay();//lấy ngày trong tuần
    var totalMins=d.getHours()*60+d.getMinutes();//đổi thời gian hiện tại ra số phút trong ngày. 
    if(weekday>=1 && weekday<=3&&((totalMins>=420 && totalMins<=660)||(totalMins>=780 && totalMins<=1020)))
    return 0.1;
    else return 0;
}

function showCart(){
    var formatter = new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'});
    var container=document.getElementById("cartDetail").getElementsByTagName('tbody')[0];
    container.innerHTML="";
    var sum=0;
    var totalPreTax=0;
    var discountRate=getDiscountRate();
    var taxRate=0.1;
    var discount=0;
    var tax=0;
    for(var i=0;i<window.localStorage.length;i++){
        if(typeof itemList[localStorage.key(i)] === "undefined") continue; 
        var tr=document.createElement("tr");
        var stt=document.createElement("td");
        var photoCell=document.createElement("td");
        var nameCell=document.createElement("td");
        var priceCell=document.createElement("td");
        var numberCell=document.createElement("td");
        var sumCell=document.createElement("td");
        var removeCell=document.createElement("td");
        var removeLink=document.createElement("a");
        var item=itemList[localStorage.key(i)];
        var number=localStorage.getItem(localStorage.key(i));
        stt.style.textAlign="center";
        stt.innerHTML=(i+1);
        photoCell.style.textAlign="center";
        photoCell.innerHTML="<img src='"+item.photo+"' class='round-figure' width='100px'/>"; 
        nameCell.innerHTML=item.name;
        priceCell.innerHTML=formatter.format(item.price);
        priceCell.style.textAlign="center";
        numberCell.innerHTML=number;
        numberCell.style.textAlign="center";
        sum=number*item.price; 
        sumCell.innerHTML=formatter.format(sum);
        sumCell.style.textAlign="center";
        removeLink.innerHTML="<i class='fa fa-trash icon-pink'></i>";
        removeLink.setAttribute("href","#");
        removeLink.setAttribute("data-code",localStorage.key(i));
        removeLink.onclick=function(){
        removeCart(this.dataset.code);
    };
    removeCell.style.textAlign="center";
    removeCell.appendChild(removeLink);
    tr.appendChild(stt);
    tr.appendChild(photoCell);
    tr.appendChild(nameCell);
    tr.appendChild(numberCell);
    tr.appendChild(priceCell); 
    tr.appendChild(sumCell);
    tr.appendChild(removeCell);
    container.appendChild(tr);
    totalPreTax+=sum; }
    var discount=totalPreTax*discountRate;
    var tax=(totalPreTax-discount)*taxRate;
    document.getElementById("bill_pre_tax_total").innerHTML=formatter.format(totalPreTax); 
    document.getElementById("bill_discount").innerHTML=discountRate+" x A = "+formatter.format(discount); 
    document.getElementById("bill_tax").innerHTML=formatter.format(tax); 
    document.getElementById("bill_total").innerHTML=formatter.format(totalPreTax-discount+tax);
}

function removeCart(code){
	if(typeof window.localStorage[code] !== "undefined"){
        let result = confirm("Bạn có chắc chắn muốn xóa?");
        if(result){
		//xóa sản phẩm khỏi localStorage
		window.localStorage.removeItem(code);
		//Xóa nội dung của phần thân của bảng (<tbody>)
		document.getElementById("cartDetail").getElementsByTagName('tbody'
		)[0].innerHTML="";
		//Hiển thị lại nội dung của đơn hàng
		showCart();
        }
	} 
}

/*Cập nhật tổng số lương sản phẩm*/
// Lấy tổng giá trị của các value trong LocalStorage

/*Hàm hiển thị nội dung keyword trong trang timkiem.html**/

function showSearch()
{
var url = new URL(window.location);
var ws = url.searchParams.get("words");
document.getElementById("searchDetail").innerHTML="<h1>Từ khóa tìm kiếm</h1> <b>"+ws+"</b>";
}

function showSearch(){
    var url = new URL(window.location);
    var ws = url.searchParams.get("words"); document.getElementById("searchDetail").innerHTML="<h1>Từ khóa tìm kiếm</h1> <b>"+ws+"</b>";
}

window.onstorage = () => {showCart();};
showCart();