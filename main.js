const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Lucky Socks',
            selectedVariant: 0,
            instock: false,
            description: 'Calcetins per anar a la moda',
            inventory: 120,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 1001, color: 'green',image: './assets/images/socks_green.jpg', quantity: 30 },
              { id: 1002, color: 'blue',image: './assets/images/socks_blue.jpg', quantity:0},
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
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed:{
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        instock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})
