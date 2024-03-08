document.addEventListener("DOMContentLoaded", async function() {
    const baseUrl = `https://fakestoreapi.com`;

    const loadProduct = async () => {
        const res = await fetch(`${baseUrl}/products`);
        return await res.json();
    };

    const loadAllWithPromiseAll = async () => {
        const [products] = await Promise.all([
            loadProduct(),
        ]);
        showProduct(products);
    };

    loadAllWithPromiseAll();

    const showProduct = (products) => {
        const productContainer = document.getElementById(`product-container`);
        productContainer.innerHTML = ''; // Limpa a div
        products.forEach(product => {
            const divProduct = document.createElement(`div`);
            divProduct.innerHTML = `
                <img class="product-img" src="${product.image}" alt="Imagem do produto"/>
                <article class="info-box">
                    <div class="text-info">
                        <h3 class="text-title">Produto:</h3>
                        <a class="info-name" href="./pages/productId.html?id=${product.id}">${product.title}</a>

                    </div>
                    <span class="info-price">Preço: $${product.price}</span>
                </article>
            `;
            productContainer.appendChild(divProduct);
            divProduct.classList.add(`product-box`);
            divProduct.addEventListener('click', () => {
                console.log('Detalhes do produto:', product);
            });
        });
    };

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
        const searchNav = this.value.toLowerCase();
        const productBox = document.querySelectorAll('.product-box');
        productBox.forEach(box => {
            const productName = box.querySelector('.info-name').textContent.toLowerCase();
            if (productName.includes(searchNav)) {
                box.style.display = 'flex'; // deixa o estilo como esta, "flex" no caso
            } else {
                box.style.display = 'none';
            }
        });
    });
});
