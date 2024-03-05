document.addEventListener("DOMContentLoaded", async function() {
    const productId = productIdUrl();//é o id do produto pego pela ulr
    if (productId) {
        loadProductDetails(productId);//pega os objetos da ulr da api, a fake store
    } else {
        console.error('ID do produto não encontrado na URL.');
    }
});

async function loadProductDetails(productId) {//funcao que busca as informacoes dos obejtos da url dada
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);//ulr da api que escolhi, fake story api
        const product = await response.json();
        showProductDetails(product);//oque vai ser jogado no html
    } catch (error) {
        console.error('Erro ao carregar os detalhes do produto:', error);
    }
}

function showProductDetails(product) {//funcao que pega o id da div e joga informações dentro dela
    const divDetail = document.createElement(`div`);
    divDetail.classList.add(`detail-box`);
    const productDetailsDiv = document.getElementById('product-details');
    productDetailsDiv.innerHTML = `
    <div class="detail-box">
        <img class="detail-img" src="${product.image}" alt="Imagem do produto"/>
        <article class="detail-info">
            <div class="detail-div">
                <div class="price-category">
                    <div>
                        <h3>Categoria:</h3>
                        <a class="detail-category" href="./categories.html">${product.category}</a>
                    </div>
                    <div>
                        <h3>Preço:</h3>
                        <p>$${product.price}</p>
                    </div>
                </div>
                    <div>
                        <h3>Produto:</h3>
                        <p class="title-text">${product.title}</p>
                    </div>
                    <div>
                        <h3>Descrição:</h3>
                        <p class="description-text">${product.description}</p>
                    </div>
                <button class="carrinho-btn" onclick="window.location.href = '../pages/buying.html'">Comprar Produto<img class="cart-img" src="../img/cart.png" alt=""></button>
            </div>
        </article>
    </div>
    `;
}

function productIdUrl() { //função que pega o id pela ulr
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id')
    return urlParams.get('id');
}