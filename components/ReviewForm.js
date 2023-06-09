app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Deixa la teva opinió</h3>
      <label for="name">Nom:</label>
      <input id="name" v-model="name">
  
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
  
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
  
  
      <label for="recommend">El recomanaries?</label>
      <select id="recommend" v-model="recommend">
        <option>Yes</option>
        <option>No</option>
      </select>
    
  
      <input class="button" type="submit" value="Submit">  
  
    </form>`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,
        recommend: null
        
      }
    },
    methods: {
      onSubmit() {
        if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
          alert('Review is incomplete. Que te falten coseees.')
          return
        }
  
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
  
        }
        this.$emit('review-submitted', productReview)
  
        this.name = ''
        this.review = ''
        this.rating = null
        this.recommend = null
      }
    }
  })