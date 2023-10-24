var product = [{
    id: 1,
    img: 'https://bun-books.com/wp-content/uploads/2019/05/howluckey-8.png',
    name: 'How Lucky I am',
    price: 220,
    description: '<a href="article1.html" class="blg-btn">รายระเอียด</a>',
    type: 'g'
}, {
    id: 2,
    img: 'https://bun-books.com/wp-content/uploads/2019/05/From-time-to-time-8.png',
    name: 'From time to time',
    price: 240 ,
    description: '<a href="article2.html" class="blg-btn">รายระเอียด</a>',
    type: 'g1'
}, {
    id: 3,
    img: 'https://bun-books.com/wp-content/uploads/2021/12/im%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2.png',
    name: 'I’M ทราย THANK YOU.',
    price: 255,
    description: '<a href="article3.html" class="blg-btn">รายระเอียด</a>',
    type: 'g2'
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

