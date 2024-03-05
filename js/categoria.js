const baseUrl = `https://fakestoreapi.com`;

const loadProduct = async () => {
    const res = await fetch(`${baseUrl}/products`);
    return await res.json();
};

const loadCategory = async (category) => {
    const res = await fetch(`${baseUrl}/products/category/${category}`);
    return await res.json();
};

function showCategories(products) {
    const productContainer = document.getElementById(`product-container`);
    productContainer.innerHTML = ''; // Limpar conteúdo anterior
    products.forEach((product) => {
        const divProduct = document.createElement(`div`);
        divProduct.classList.add(`product-box`);
        divProduct.innerHTML = `
            <img class="product-img" src="${product.image}" alt="Imagem do produto"/>
            <article class="info-box">
                <div class="text-info">
                    <h3 class="text-title">Produto:</h3>
                    <a class="info-name" href="../pages/productId.html?id=${product.id}">${product.title}</a>
                </div>
                <span class="info-price">Preço: $${product.price}</span>
            </article>
        `;
        productContainer.appendChild(divProduct);
        divProduct.addEventListener('click', () => {
            console.log('Detalhes do produto:', product);
        });
    });
}

const showCategory = async (category) => {
    const buttons = document.querySelectorAll('.category-buttons button');
    buttons.forEach(button => button.classList.remove('active'));
    
    const products = await loadCategory(category);
    showCategories(products);

    const currentButton = document.querySelector(`.category-buttons button[data-category="${category}"]`);
    if (currentButton) {
        currentButton.classList.add('active');
    }
};

const showAll = async () => {
    const buttons = document.querySelectorAll('.category-buttons button');
    buttons.forEach(button => button.classList.remove('active'));
    
    const products = await loadProduct();
    showCategories(products);

    const currentButton = document.querySelector('.category-buttons button');
    if (currentButton) {
        currentButton.classList.add('active');
    }
};

// escolhe a categorias "todas" quando abre a página pra não ficar um espaço em branco
window.onload = showAll;
