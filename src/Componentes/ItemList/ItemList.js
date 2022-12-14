import Item from "../ItemList/Item"


const ItemList = ( {productos = []} ) => {

    return (
        <>
        <div className="item-list">
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
        </>
    )
}

export default ItemList