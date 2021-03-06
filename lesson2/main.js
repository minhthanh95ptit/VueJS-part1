var app = new Vue({
    el: '#app',
    data:{
        product: 'Socks',
        image:'./assets/image1.png',
        description: 'Very Cutie Socks',
        url: 'https://google.com',
        inventory: 81,
        onSale: false,
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
        updateProduct: function (variantImage){
            this.image = variantImage
        },
        decToCart: function(){
            this.cart -= 1
        }
    }

})