const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            description: 'Calcetins per anar a la moda',
            inventory: 120,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 1001, color: 'verd cesped' },
              { id: 1002, color: 'blau feo' },
            ],
            onSale: true,
            url: 'https://luckysocks.es/'

        }
    }
})
