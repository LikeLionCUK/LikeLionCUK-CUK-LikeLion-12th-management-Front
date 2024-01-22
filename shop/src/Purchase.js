import React, { useState, useEffect} from 'react';
import './purchase.css';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Lilac from './img/Lilac.jpg';
import LovePoem from './img/LovePoem.jpg';
import Palette from './img/Palette.jpg';

const Purchase = () => {
  const { albumName } = useParams();

  // 앨범 이름에 따라 이미지 선택
  let albumImage;
  switch (albumName) {
    case 'Lilac':
      albumImage = Lilac;
      break;
    case 'LovePoem':
      albumImage = LovePoem;
      break;
    case 'Palette':
      albumImage = Palette;
      break;
    default:
      albumImage = null;
  }
  let albumSubtitle;
  if (albumImage === Lilac) 
  {
    albumSubtitle = "The 5th Album";
  } 
  else if(albumImage === LovePoem)
  {
    albumSubtitle = "The 5th Mini Album";
  }
  else
  {
    albumSubtitle = "The 4th Album";
  }
  let albumPrice = 20000;
  let discount = Math.round(albumPrice * 0.7);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // 페이지가 로드될 때 자동으로 Alert를 보이게 함
    setShowAlert(true);

    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (

   <>
    <div>
        <Alert show={showAlert} className='alert'>
          3초 안에 구매하면 30% 할인!
        </Alert>
    </div>
    <div className="purchase-container">
        {albumImage && <img className="album-image" src={albumImage} alt={albumName} />}
        <div className="album-details">
          <h1>{albumName}</h1>
          <h5>{albumSubtitle}</h5>
          <p>{showAlert ? discount.toLocaleString():albumPrice.toLocaleString()}원</p>
          <button className="order-button">주문하기</button>
        </div>
    </div>
    </>
  )
};

export default Purchase;
