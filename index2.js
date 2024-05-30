function sortProducts(criteria) {
    const productContainer = document.getElementById('ProductContent2Part2');
    const products = Array.from(productContainer.getElementsByClassName('product-card'));

    products.sort((a, b) => {
        if (criteria === 'price') {
            return parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price'));
        } else if (criteria === 'name') {
            return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
        }
    });

    products.forEach(product => productContainer.appendChild(product));
}

function filterProducts() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const productContainer = document.getElementById('ProductContent2Part2');
    const products = productContainer.getElementsByClassName('product-card');

    Array.from(products).forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}
