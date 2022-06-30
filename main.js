// const product = 'Socks'
const app = Vue.createApp({
    data(){
        return {
            // product: 'Socks'
            // product: 'Boots',
            description: 'This boots is difference',
            // image: './assets/images/socks_green.jpg',
            link: 'http://www.camt.cmu.ac.th',

            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 100,
            details:['50% cotton', '30% wool','20% polyester'],
            variants: [
                {id:2234, color:'green'},
                {id:2235, color: 'blue'}
            ],
            sizes: ['S','M','L'],
            onSale: true,
            cart: 0,
        
        }
    },
    methods: {
            addToCart(){
                this.cart +=1
            }
        }
})