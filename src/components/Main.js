import React from 'react';
import restaurantfood from './images/restauranfood.jpg'
import restaurant from './images/restaurant.jpg'
import MarioAdrian from './images/Mario and Adrian A.jpg'

function Main(){
    return(
        <main className='main-container'>
            <section className='container-secA'>
                <section className='main-sectionA'>
                    <div>
                        <h1 className='main-title'>Little Lemon</h1>
                        <h3 className='main-sub-title'>Chicago</h3>
                        <p className='main-text'>We are family owned Medetranian restaurant, focused on
                            traditional receipes served with a modern twist.
                        </p>
                        <button className='btn-reserve'>Reserve a Table</button>
                    </div>
                    <div>
                     <img src={restaurantfood} height="300px" width="300px"   alt="restaurant food"/>
                    </div>
                </section>
                
            </section>
            
            <section className='main-sectionD'>
                <div className='group-A'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                     <p>The menu at Little Lemon features a variety of dishes, including small plates,
                        entrees, and desserts. Some of the popular dishes include the hummus
                        the grilled octopus, and the lemon chicken. The restaurant also has a
                        good selection of wines and cocktails. Little Lemon is a great place to go
                        for a casual meal or a special occasion. The restaurant is also a good choice
                        for people with dietary restrictions, as it has a number of vegetarian and
                        gluten-free options.</p>
                </div>
                <div className='group-B'>
                    <img className='cafe' src={restaurant} height={300} width={300} alt='restaurant' />
                </div>
                <div className='group-C'>
                     <img className='cheife' src={MarioAdrian} height={300} width={300} alt='Cheif Mario and Adrian' />
                </div>

            </section>
        </main>
    );
}
export default Main;