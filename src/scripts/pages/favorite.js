import favDatas from '../data/fav-datas';

const Favorite = {
  async render() {
    return (
      `
      <div class="content"></div>
    `);
  },

  async afterRender() {
    const data = favDatas.getAllDatas('restaurants');
    console.log(data);
  },
};

export default Favorite;
