var product = [{
    id: 1,
    img: 'https://bun-books.com/wp-content/uploads/2021/12/mamaung123.png',
    name: 'มะม่วง 123 (HARDCOVER)',
    price: 495,
    description: '<a href="Illustration1.html" class="blg-btn">รายระเอียด</a>',
    type: 'g'
}, {
    id: 2,
    img: 'https://bun-books.com/wp-content/uploads/2021/12/passing.png',
    name: 'PASSING THROUGH MY MIND',
    price: 130,
    description: '<a href="Illustration2.html" class="blg-btn">รายระเอียด</a>',
    type: 'g1'
}, {
    id: 3,
    img: 'https://bun-books.com/wp-content/uploads/2019/10/presents-fix.jpg',
    name: 'PRESENTS FROM THE PRESENT',
    price: 195,
    description: '<a href="Illustration3.html" class="blg-btn">รายระเอียด</a>',
    type: 'g2'
}, {
    id: 4,
    img: 'https://bun-books.com/wp-content/uploads/2019/05/22%E0%B8%9B%E0%B8%B5%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%99-8.png',
    name: '22 ปีแห่งความหวาน',
    price: 220,
    description: '<a href="Illustration4.html" class="blg-btn">รายระเอียด</a>',
    type: 'g3'
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