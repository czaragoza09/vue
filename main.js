const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            description: 'Calcetins per anar a la moda',
            inventory: 120,
            onSale: true,
            url: 'https://luckysocks.es/'

        }
    }
})
