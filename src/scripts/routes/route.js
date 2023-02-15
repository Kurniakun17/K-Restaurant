import Catalogue from '../pages/catalogue';
import Detail from '../pages/detail';
import Favorite from '../pages/favorite';
import Home from '../pages/home';

const routes = {
  '/': Home,
  '/detailed/restaurant/:id': Detail,
  '/detailed/food/:id': Detail,
  '/favorite': Favorite,
  '/catalogue': Catalogue,
};

export default routes;
