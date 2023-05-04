import React from 'react'
import Navbar from '../src/Navbar'
import Card from '../src/Card'
import data from './data'


export default function App(){
        const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
             {cards}
        </div>
    )
}
