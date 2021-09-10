import React from 'react'
import Item from './Item'

const Itemslist = ({productList,click}) => {
   
    return (
        <div>
            {
                productList.map(
                    (el,i) => (
                        <Item  product={el} key={i}  clickMe={click}/>
                    )
                )
            }
        </div>
    )
}

export default Itemslist
