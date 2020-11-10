Vue.component('product',{
    template:`
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" width="400px" height="400px">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div class="color-box" 
                    v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor }"
                </div>

                <button v-on:click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }"
                >Add to Cart
                </button>
            </div>
        </div>
    `,
    data(){
        return{
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            image:'./assets/image1.png',
            details: ["80% cotton","20% polester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "./assets/image1.png",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "./assets/image2.png",
                    variantQuantity: 0
                }
            ],
            //sizes: [1,2,3,4,5,6],
            cart: 0
            }
    },
    methods: {
        addToCart(){
           this.$emit('add-to-cart')
        },
        decToCart: function(){
            this.cart -= 1
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})


Vue.component('product-review',{
    template:`
       <form class="review-form" @submit.prevent="onSubmit">
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>
            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review"></textarea>
            </p>
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>
            <p>
                <input type="submit" value="Submit">
            </p>
       </form>
    `,
    data(){
        return{
            name: null,
            review: null,
            rating: null
        }
    },
    methods:{
        onSubmit(){
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)
            this.name = null
            this.review = null
            this.rating = null
        }
    }
})

var app = new Vue({
    el: '#app',
    data:{
        premium: false,
        cart: [],
        reviews: []
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        },
        addReview(productReview){
            this.reviews.push(productReview)
        }
    }
})

Vue.config.devtools = true;