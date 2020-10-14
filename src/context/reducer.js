// ================== INITIALSTATE =================================================
export const initialState = {
    basket: [],
    loggedinUser: {},//contain user details(username & email if user logged in)
}

// ================== ACTION-TYPES =================================================
export const actionType = {
    LOAD_BASKET: 'LOAD_BASKET',
    LOAD_USER_DETAIL: 'LOAD_USER_DETAIL',
    DELETE_BASKET_ITEM: 'DELETE_BASKET_ITEM',
    UPDATE_BASKET_ITEM: 'UPDATE_BASKET_ITEM',
    EMPTY_BASKET: 'EMPTY_BASKET'
}
// ================== ACTIONS =================================================
const deleteBasketItem = (state, id) => {
    let index = state.basket.findIndex(item => item.id === id)
    let tempBasket = [...state.basket]
    if (index >= 0) {
        tempBasket.splice(index, 1)
    }
    return {
        ...state,
        basket: tempBasket
    }
}
// update AMOUNT & QTY OF AN ITEM once qty no. changed from select dropdown
const updateBasketItem = (state, item) => {
    let updatedBasket = [...state.basket]
    let firstIndex = updatedBasket.findIndex(basketitem => basketitem.id === item.id)
    if (firstIndex >= 0) {
        updatedBasket[firstIndex].amount = item.amount;
        updatedBasket[firstIndex].quantity = item.quantity;
    }
    return {
        ...state,
        basket: updatedBasket
    }
}
//Load new items in basket & increment qty if item already exist in basket
const loadBasketItems = (state, action) => {
    let tempBasket = [...state.basket]
    console.log(tempBasket)
    let itemToLoad = tempBasket?.find(basketitem => basketitem.id === action.payload.id)
    console.log(itemToLoad)
    if (itemToLoad) {
        itemToLoad.quantity += 1;
        return {
            ...state,
            basket: tempBasket
        }
    }
     {
        return {
            ...state,
            basket: [...state.basket, action.payload]
        }
    }
}
// ==================  SELECTORS( takes state as props ) ==============================================
export const selectBasketTotalAmount = (basket) => basket?.reduce((total, basketitem) => total += parseFloat(basketitem.amount), 0)
export const selectBasketTotalItem = (basket) => basket?.reduce((totalItem, item) => totalItem += item.quantity, 0)

const reducer = (state, action) => {
    switch (action.type) {
        case actionType.LOAD_BASKET:
            return loadBasketItems(state, action)
        case actionType.LOAD_USER_DETAIL:
            return { ...state, loggedinUser: action.payload }
        case actionType.DELETE_BASKET_ITEM:
            return deleteBasketItem(state, action.payload)
        case actionType.UPDATE_BASKET_ITEM:
            return updateBasketItem(state, action.payload)    
        case actionType.EMPTY_BASKET:
            return {
                ...state,
                basket:[]
            }   
        default:
            return state;
    }

}

export default reducer
