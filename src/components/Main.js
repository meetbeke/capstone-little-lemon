import React from 'react';
import restaurantfood from './images/restauranfood.jpg'

function Main(){
    return(
        <main className='main-container'>
            <section className='main-sectionA'>
                <h3 className='main-title'>Little Lemon</h3>
                <h4 className='main-sub-title'>Chicago</h4>
                <p className='main-text'>We are family owned Medetranian restaurant, focused on traditional receipes
                    served with a modern twist.
                </p>
                <button className='btn-reserve'>Reserve a Table</button>
                <img src={restaurantfood} height="200px" width="200px"   alt="restaurant food"/>
            </section>
            
        </main>
    );
}
export default Main;