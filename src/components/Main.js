import React from 'react';
import restaurantfood from './images/restauranfood.jpg'
import restaurant from './images/restaurant.jpg'
import MarioAdrian from './images/Mario and Adrian A.jpg'
import salad from './images/greek salad.jpg'
import bruch from './images/bruchetta.svg'
import lemon from  './images/lemon dessert.jpg'
import cart from './images/cart.png'
import profile1 from './images/profile1.jpg'
import profile2 from './images/profile2.jpg'
import profile3 from './images/profile3.jpg'
import profile4 from './images/profile4.jpg'
import stars from './images/starts.png'

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
                     <img className='img-restfood' src={restaurantfood} height="300px" width="300px"   alt="restaurant food"/>
                    </div>
                </section>
            </section>
            <section className='main-sectionB'>
                <div className='headings'>
                    <h1>Specials</h1>
                    <button>Online Menu</button>
                </div>
                <div className='cards'>
                    <aside  className='card-A'>
                        <img src={salad}  height={200} width={300} alt="this is greek salad"/>
                        <h2>Greek Salad <span>$12.99</span></h2>
                        <p>The famous greek salad of crispy lettuce, peppers, 
                            olives and our Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <h3>Order Delivery <img width={25} src={cart} alt="cart"/></h3>
                    </aside>

                    <aside className='card-B'>
                        <img src={bruch}  height={200} width={300} alt="this is Bruschetta"/>
                        <h2>Bruschetta <span>$5.00</span></h2>
                        <p>Our Bruschetta is made from homemade grilled bread that has been 
                            smeared with garlic and seasoned with salt and olive oil. 
                            Topped with fresh vegetables.
                        </p>
                        <h3>Order Delivery <img width={25} src={cart} alt="cart"/></h3>
                    </aside>

                    <aside className='card-C'>
                        <img src={lemon}  height={200} width={300} alt="this is Bruschetta"/>
                        <h2>Lemon Cake <span>$3.50</span></h2>
                        <p>This comes straight from grandma’s recipe book, every last ingredient
                             has been sourced and is as authentic as can be imagined.
                        </p>
                        <h3>Order Delivery <img width={25} src={cart} alt="cart"/></h3>
                    </aside>
                </div>
            </section>

            <section className='container-secC'>
                <div className='main-sectionC'>
                    <h1 className='testimonial'>Testimonial</h1>
                   
                    <div className='frame-c'>
                    <div className='frame'>
                        <div className='stars'> <img src={stars} alt="starts" width={100} /> </div> 
                        <div className='profile'>
                            <img src={profile1}  width={60} alt='this is profile 1'/>
                        </div>
                        <h2>Selam Kassa</h2>
                        <p>"Really enjoyed the atmosphere."</p>
                    </div>

                    <div className='frame'>
                        <div className='stars'> <img src={stars} alt="starts" width={100} /> </div> 
                        <div className='profile'>
                            <img src={profile2}  width={60} alt='this is profile 1'/>
                        </div>
                        <h2>Solomon Mamo</h2>
                        <p>"The greek salad was excellent!"</p>
                    </div>

                    <div className='frame'>
                        <div className='stars'> <img src={stars} alt="starts" width={100} /> </div> 
                        <div className='profile'>
                            <img src={profile3}  width={60} alt='this is profile 1'/>
                        </div>
                        <h2>Henock Kebede</h2>
                        <p>"You have to try the Greek Salad!"</p>
                    </div>

                    <div className='frame'>
                        <div className='stars'> <img src={stars} alt="starts" width={100} /> </div> 
                        <div className='profile'>
                            <img src={profile4}  width={60} alt='this is profile 1'/>
                        </div>
                        <h2>Abeba Haile</h2>
                        <p>"Awesome place peaceful atmosphere with delicious food."</p>
                    </div>

                    </div>

                </div>

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