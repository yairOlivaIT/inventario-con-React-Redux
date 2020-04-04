import { createStore , applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // te permite usar funciones asincronas
import reducer from './reducers';


const store = createStore(
    reducer,
    compose( applyMiddleware(thunk), // apply se requiere por que utilizamos thunk sino no se requiere
    // De  esta forma a continuar funcion cuando tengamos instalado la extension ReduxDev Tools, asi tambien como no lo tengamos instalados en las extensiones del buscador
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )

);

//exportamos se requiere en el componente principal para que fluya los datos a lo largo del proyecto
export default store;