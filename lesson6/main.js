var app = new Vue({
    el: '#app',
    data:{
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        image:'./assets/image1.png',
        inStock: false,
        details: ["80% cotton","20% polester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/image1.png"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/image2.png"
            }
        ],
        //sizes: [1,2,3,4,5,6],
        cart: 0
    },
    methods: {
        addToCart: function(){
            this.cart += 1
        },
        updateProduct: function (index){
            this.selectedVariant = index
            console.log(index)
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
        }
    }

})