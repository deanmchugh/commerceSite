import React from 'react'
import {ItemCard} from './ItemCard/itemCard'

export default function home() {
    return (
        <div>
            <ItemCard name={'item 1'} 
                price={20.30} 
                info={'item info'} 
                image={'an image'}/>
        </div>
    )
}