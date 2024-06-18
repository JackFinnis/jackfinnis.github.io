async function load_discounts() {
    var response = await fetch('/static/data/discounts.csv')
    
    for (let i = 0; i < 10; i++) {
        discount = document.createElement('p')
        discount.innerHTML = 'Title'
        discounts.appendChild(discount)
    }
}

load_discounts().then()