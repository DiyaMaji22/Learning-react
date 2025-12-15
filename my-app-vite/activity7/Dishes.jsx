import React from 'react'

const Dishes = () => {
    const Products = [ 
        { id: 1, name: 'Pizza', price: 10 },
        { id: 2, name: 'Burger', price: 5 },
        { id: 3, name: 'Pasta', price: 8 },
        { id: 4, name: 'Salad', price: 6 },
        { id: 5, name: 'Sushi', price: 12 }
    ];
  return (
   
    <div>
        <h1>Menu</h1>
        <ul>
            {Products.map((product) => (
                <li key={product.id}>
                    {product.name} - ${product.price}
                       
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Dishes