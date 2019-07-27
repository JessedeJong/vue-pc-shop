import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // State with all current items in store
        forSale: [
            { invId: 1, name: 'PC', image: '//placehold.it/200', price: 999 },
            { invId: 2, name: 'PHONE', image: '//placehold.it/200', price: 1499 },
            { invId: 3, name: 'DESKTOP', image: '//placehold.it/200', price: 499 },
            { invId: 4, name: 'TV', image: '//placehold.it/200', price: 299 },      
        ],
        // State for what the user currently has in the shopping cart
        inCart: [
            // Intentionally empty, because a user doesnt start with anything in the cart
        ],
    },

    getters: { // Call on getters to request data from states        
        // Request all items for sale
        forSale: state => state.forSale,
        // Request all items in shopping cart
        inCart: state => state.inCart,
    },

    mutations: {
        // Mutate the state of the shopping cart
        ADD_TO_CART(state, invId) {
            state.inCart.push(invId);
        },
        // 
        REMOVE_FROM_CART(state, index) {
            state.inCart.splice(index, 1);
        },
    },

    actions: {
        // Add an item to the users cart
        addToCart(context, invId) {
            context.commit('ADD_TO_CART', invId);
        },
        // Remove an item from the users cart
        removeFromCart(context, index) {
            context.commit('REMOVE_FROM_CART', index);
        }
    },
});