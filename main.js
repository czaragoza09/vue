const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Lucky Socks',
            image: './assets/images/socks_green.jpg',
            instock: false,
            description: 'Calcetins per anar a la moda',
            inventory: 120,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 1001, color: 'green',image: './assets/images/socks_green.jpg' },
              { id: 1002, color: 'blue',image: './assets/images/socks_blue.jpg' },
            ],
            onSale: true,
            url: 'https://luckysocks.es/'

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        // solution
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        // solution
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
