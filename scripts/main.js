const productsWrapper = document.querySelector('.products-list')


const cardTemp = document.querySelector('.product-card-temp').content

function createProductFn (products) {
  
  products.forEach(product => {
    let cardFromTemp = cardTemp.cloneNode(true)
        cardFromTemp.querySelector('.product-image').src = product.poster
        cardFromTemp.querySelector('.product-name').textContent = product.name
        cardFromTemp.querySelector('.product-info').textContent = product.info
        cardFromTemp.querySelector('.real-price').textContent = product.price
        cardFromTemp.querySelector('.old-price').textContent = product.old_price

        let modalOyna = cardFromTemp.querySelector('.card-product__modal')
        productsWrapper.appendChild(cardFromTemp)


      
    });
}

createProductFn(products)

cardFromTemp.addEventListener('click', OpenModalFn)