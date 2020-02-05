import React from 'react'
import {ItemCard} from './ItemCard/itemCard'

export default function home() {
    return (
        <div>
            <ItemCard name={'PS2'} 
                price={150.00} 
                image={'an image'}
                info={`The PlayStation 2 (officially branded as PS2) is a home video game 
                console developed and marketed by Sony Computer Entertainment. It was 
                first released in Japan on March 4, 2000, in North America on October 
                26, 2000, and in Europe and Australia on November 24, 2000, and is the 
                successor to the original PlayStation, as well as the second installment 
                in the PlayStation console line-up. A sixth-generation console, it 
                competed with Sega's Dreamcast, Nintendo's GameCube, and Microsoft's 
                original Xbox.`} />
        </div>
    )
}