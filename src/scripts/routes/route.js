import Detail from '../pages/detail';
import Home from '../pages/home';

const routes = {
  '/': Home,
  '/detailed/restaurant/:id': Detail,
  '/detailed/food/:id': Detail,
};

export default routes;
