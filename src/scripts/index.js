import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './restaurantArticles'
import Datas from '../DATA.json'
import FoodDatas from '../FOODDATA.json'

// restaurant datas
const restaurantList = document.getElementById('restaurant-list')

Datas = Datas.restaurants

Datas.map(data => {
  const restaurantArticle = document.createElement('restaurant-article')
  restaurantArticle.data = data;

  restaurantList.appendChild(restaurantArticle)
})

// Foods Datas


// Hamburger
const hamburger = document.getElementById("hamburger")
const drawer = document.getElementById("drawer")


hamburger.addEventListener('click', (event) =>{ 
  drawer.classList.toggle('open')
  event.stopPropagation()
})

window.addEventListener('load', event => {
  
})