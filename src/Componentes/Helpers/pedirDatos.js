import { stock } from "../BDProductos/BaseProductos"

export const pedirDatos = ([]) => {
    return new Promise( (resolve, reject) => {
            // cuerpo de la promesa
            setTimeout(() => {
                resolve(stock)
            }, 3000)
        } )
}
 