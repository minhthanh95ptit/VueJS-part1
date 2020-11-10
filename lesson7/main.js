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
                    @mouseover="updateProduct(index)">
                </div>

                <button v-on:click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }"
                >Add to Cart
                </button>

                <div class="cart">
                    <p> Cart({{cart}}) </p>
                </div>
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
        addToCart: function(){
            this.cart += 1
        },
        updateProduct: function (index){
            this.selectedVariant = index
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


var app = new Vue({
    el: '#app',
})