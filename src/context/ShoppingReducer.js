

export const ShoppingReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            var items = state.basket.some(obj => obj.id === action.item.id) ? [...state.basket] : [...state.basket, action.item];

            return {
                ...state,

                basket: items
            }

        case 'DELETE_FROM_BASKET':

            return {
                ...state,
                basket: state.basket.filter(basket => basket.id !== action.item.id)
            }
        case 'SET_USER':

            return {
                ...state,
                user: action.user
            }
        default: return state;
    }
}