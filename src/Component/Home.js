import React from 'react';
import bg from '../Image/background-image.png'
import Meals from './Meals';
import style from './home.module.css'

const Home = () => {
    console.log(window.innerWidth)
    return ( 
        <div className={style.container}>
        <img src={bg} className={style.background}/> 
        <div className={style.content}>
          <h1 className={style.header}>Vegetarian Dinners</h1>
          <h3 className={style.subHeader}>5 Best Weaknight dinners</h3>
          <div className={style.flexContainer}>
            <Meals 
                header='Spicy Kale and Coconut Fried Rice'
                subheader='This recipe turned my friend’s one-year-old baby into a kale fan.'
                icon='fas fa-seedling fa-2x'
            />
            <Meals 
                header='Classic Minestrone Soup'
                subheader='“Very tasty and satisfying soup. Turned out great with no changes. '
                icon='fas fa-lemon fa-2x'
            />
            <Meals 
                header='Caprese Pasta Salad'
                subheader='It’s a super simple burst cherry tomato pasta dish with little mozzarella balls.'
                icon='fas fa-utensils fa-2x'
            />
            <Meals 
                header='Spaghetti Squash Burrito Bowls'
                subheader='Hearty burrito bowls made with a base of perfectly roasted spaghetti squash.'
                icon='fas fa-carrot fa-2x'
            />
            <Meals 
                header='Vegetarian Tortilla Soup'
                subheader='Homemade tortilla soup that’s even better than the restaurant versions I enjoyed before giving up chicken.'
                icon='fas fa-cheese fa-2x'
            />
          </div>
        </div>
     </div>
     );
}
 
export default Home;