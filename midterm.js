document.addEventListener('DOMContentLoaded', () => {
    const dailyProductsContainer = document.getElementById('dailyProductsContainer');

    const products = [
        { id: 1, name: '極速電競滑鼠', price: '$2,599', imageUrl: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Gaming+Mouse' },
        { id: 2, name: 'RGB機械鍵盤', price: '$3,899', imageUrl: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Mechanical+Keyboard' },
        { id: 3, name: '4K超清螢幕', price: '$12,999', imageUrl: 'https://via.placeholder.com/150/00CED1/FFFFFF?text=4K+Monitor' },
        { id: 4, name: '高功率路由器', price: '$1,899', imageUrl: 'https://via.placeholder.com/150/FFD700/000000?text=Router' },
        { id: 5, name: '高速外接硬碟', price: '$3,299', imageUrl: 'https://via.placeholder.com/150/ADFF2F/000000?text=External+HDD' },
        { id: 6, name: '無線充電座', price: '$999', imageUrl: 'https://via.placeholder.com/150/F08080/FFFFFF?text=Wireless+Charger' },
        { id: 7, name: '直播麥克風套組', price: '$4,599', imageUrl: 'https://via.placeholder.com/150/9370DB/FFFFFF?text=Microphone' },
        { id: 8, name: '行動電源Pro', price: '$1,599', imageUrl: 'https://via.placeholder.com/150/20B2AA/FFFFFF?text=Power+Bank' },
        { id: 9, name: 'VR頭戴裝置', price: '$25,999', imageUrl: 'https://via.placeholder.com/150/FF7F50/FFFFFF?text=VR+Headset' },
        { id: 10, name: '智能家居套組', price: '$8,899', imageUrl: 'https://via.placeholder.com/150/6A5ACD/FFFFFF?text=Smart+Home' }
    ];

    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to render products
    function renderProducts(container, productsToRender) {
        container.innerHTML = ''; // Clear previous products
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button data-product-id="${product.id}">加入購物車</button>
            `;
            container.appendChild(productCard);
        });

        // Add event listeners to buttons
        container.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                const product = products.find(p => p.id == productId);
                if (product) {
                    alert(`已將 "${product.name}" 加入購物車！ (這是一個模擬訊息)`);
                }
            });
        });
    }

    // Simulate daily rotation: pick 4 random products for daily deals
    function getDailyDeals() {
        const shuffledProducts = shuffleArray([...products]); // Create a shallow copy to avoid modifying original
        return shuffledProducts.slice(0, 4); // Get the first 4 for daily deals
    }

    // Initial render of daily deals
    renderProducts(dailyProductsContainer, getDailyDeals());

    // You could add a button to "refresh" daily deals or set a timer
    // For simplicity, we'll just load them once on page load.
    // If you want actual daily rotation, you'd need a server-side component
    // or store the last rotation date in localStorage.
});
