var product = [{
    id: 1,
    img: 'https://bun-books.com/wp-content/uploads/2021/12/%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87_new-cover-2.png',
    name: 'วิชาเดินทางหลังเลิกเรียน (ปกใหม่)',
    price: 380,
    description: '<a href="journey1.html" class="blg-btn">รายระเอียด</a>',
    type: 'g1'
}, {
    id: 2,
    img: 'https://bun-books.com/wp-content/uploads/2019/10/africa-fix.jpg',
    name: 'AFRICA IS NOT AFRICA',
    price: 285,
    description: '<a href="journey2.html" class="blg-btn">รายระเอียด</a>',
    type: 'g1'
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div class="blg-item ${product[i].type}">
        <img src="${product[i].img}" alt="">
        <h4>${product[i].name}</h4>
        <p>${numberWithCommas(product[i].price) } บาท</p>
        ${product[i].description}
    </div>`;
    }
    $("#gt").html(html);
})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsg(gle) {
    //console.log('#'+gle.id)
    var value = $('#'+gle.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if(product[i].name.includes(value)) {
            html += `<div class="blg-item ${product[i].type}">
            <img src="${product[i].img}" alt="">
            <h4>${product[i].name}</h4>
            <p>${numberWithCommas(product[i].price) } บาท</p>
            ${product[i].description}
        </div>`; 
        }
      
    }
    $("#gt").html(html);
}