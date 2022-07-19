const redux = require('redux')


const createStore = redux.createStore
//Writing my first Actions string constant
const BUY_PACKAGE = 'BUY_PACKAGE'


//Action creator which simply creates an action
function buyPackage() {
    return {
        type: BUY_PACKAGE,
        info: 'Buy package for the customer'
    }
}

//first reducers for action
//(prevState, action) => newState


// single object
const initialState = {
    numOfPackagesBought: 0
}

const buyPackageReducer = (state = initialState, action) => {
    //your state may contain more than one property so it is safer to create a copy 
    //of the state object and then only change the property that is needed

    switch(action.type) {
        case BUY_PACKAGE: return {
            numOfPackagesBought: state.numOfPackagesBought + 1
        }

        default: return state
    }
}

//Redux Store
//allows access to state via getState()
//allows state to be updated via dispatch(action)
//registers listeners via subscribe(listener)
//also unsubscribe the listeners via functions

const store = createStore(buyPackageReducer)
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
console.log('Initial State', store.getState())
store.dispatch(buyPackage())
unsubscribe()