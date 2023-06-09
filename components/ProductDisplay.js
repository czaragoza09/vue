app.component('product-display', { 
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display"></div>
    <div class="product-container"></div>
      <div class="product-image">
        <img v-bind:src="image">
      </div>
     <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <p v-if="inStock">In Stock</p>
        <!--<p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>-->
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <ul>
          <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
        </ul>
        <div 
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
        <a :href="url">Altres productes</a>
      </div>` ,  
      
      data() {
        return {
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
              { id: 1002, color: 'blue',image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            reviews:[],
            onSale: true,
            url: 'https://luckysocks.es/'

        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)

        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
          }
    },
    computed:{
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium) {
              return 'Free'
            }
              return 2.99
            }
    }
   
})


