import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTOS,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types';
//Cada reducer tiene su propio state

const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoeliminar: null,
    productoeditar: null
}

export default function (state = initialState, action ) {
    switch(action.type){
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO : 
            return{
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading:false,
                productos: [...state.productos,action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
        case PRODUCTO_EDITADO_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                productoeliminar: action.payload,
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return{
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
                productoeliminar:null
            }
        case OBTENER_PRODUCTO_EDITAR:
            return{
                ...state,
                productoeditar: action.payload
            }
        case COMENZAR_EDICION_PRODUCTOS:
            return{
                ...state
            }        
        case PRODUCTO_EDITADO_EXITO:
            return{
                ...state,
                productoeditar: null,
                productos: state.productos.map( producto => //si el producto que estamos iterando su id es igual al id que estamos pasando por el action
                    producto.id === action.payload.id ? producto = action.payload // entonces el producto actual le asignamos el producto del action que editamos
                    : producto // caso contrario me retorna el producto  
                )
            }
        default:
            return state;
    }
}