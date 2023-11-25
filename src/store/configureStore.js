import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import appReducer from '../reducers/app'
import loginReducer from '../reducers/login'
import { setToken } from '../services/api'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

export const initialSesstin = (tokens) => {
    setToken(tokens?.access?.token);
}

const rootReducer = combineReducers({
    auth: loginReducer,
    app: appReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}