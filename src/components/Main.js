import React from 'react';
import restaurantfood from './images/restauranfood.jpg'

function Main(){
    return(
        <main className='main-container'>
            <section className='main-sectionA'>
                <h3 className='main-title'>Little Lemon</h3>
                <h4 className='main-sub-title'>Chicago</h4>
                <p className='main-text'>We are family owned Medetranian restaurant, focused on
                 traditional receipes
                    served with a modern twist.
                    The menu at Little Lemon features a variety of dishes, including small plates, 
                    entrees, and desserts. Some of the popular dishes include the hummus, 
                    the grilled octopus, and the lemon chicken. 
                    The restaurant also has a good selection of wines and cocktails. 
                    Little Lemon is a great place to go for a casual meal or a special occasion. 
                    The restaurant is also a good choice for people with dietary restrictions, 
                    as it has a number of vegetarian and gluten-free options.

                </p>
                <button className='btn-reserve'>Reserve a Table</button>
                <img src={restaurantfood} height="200px" width="200px"   alt="restaurant food"/>
            </section>
            
        </main>
    );
}
export default Main;