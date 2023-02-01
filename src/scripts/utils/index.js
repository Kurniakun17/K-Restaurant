// import config from '../globals/config';

const SendReview = () => {
  const nama = document.getElementsByClassName('nama').value;
  const review = document.getElementsByClassName('review').value;
  console.log('nama :', nama);
  console.log('review :', review);
  // fetch(`${config.base_url}/review`, {

  // });
};

export default SendReview;
