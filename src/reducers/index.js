import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';


//de esta forma puedo tener multiples reducer y cada uno va a tener su state, y cuando pasamos al store le pasamos un solo reducer que en este caso es combineReducers
export default combineReducers({
    productos: productosReducer,
    alerta : alertaReducer
});