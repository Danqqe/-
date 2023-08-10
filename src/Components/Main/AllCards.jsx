import {Card, Stack} from 'react-bootstrap';
import './AllCards.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

function AllCards() {
    
    return <>
          <h2 className='textofglav'>Наши рецепты</h2>
    <br></br>  
      <CardGroup >
        <Card className='you'>
          <Card.Img variant="top" src='https://w.forfun.com/fetch/24/24b55ad18e660908f00cdcefe9a84a9c.jpeg' className='photo'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Пирог с клубникой</Card.Title>
            </div>
            <Card.Text>

                <Link to="/komms1"><img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img1' ></img></Link>
                <img src='https://cdn-icons-png.flaticon.com/128/2589/2589197.png' className='img1'></img>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='you'>
          <Card.Img variant="top" src='https://avatars.dzeninfra.ru/get-zen_doc/9759668/pub_645541f832e3665fb212d146_64554346f20fcc6a45ddc5cd/scale_1200'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Паста Карбонара</Card.Title>
            </div>
            <Card.Text>

                <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img1'></img>
                <img src='https://cdn-icons-png.flaticon.com/128/2589/2589197.png' className='img1'></img>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='you'>
          <Card.Img variant="top" src='https://sizo-11-noginsk.fsin-marketplace.ru/upload/iblock/4a0/33hav8pylaka3zitarmui4eai1ms2473.jpg'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Борщ &nbsp; &nbsp; &nbsp; &nbsp;</Card.Title>
            </div>
            <Card.Text>

                <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img1'></img>
                <img src='https://cdn-icons-png.flaticon.com/128/2589/2589197.png' className='img1'></img>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup >
      <CardGroup className='group'>
        <Card className='you'>
          <Card.Img variant="top" src='https://w.forfun.com/fetch/f4/f444456806e8d31b42c8591037405c37.jpeg'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Лазанья с говядиной</Card.Title>
            </div>
            <Card.Text>

                <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img1'></img>
                <img src='https://cdn-icons-png.flaticon.com/128/2589/2589197.png' className='img1'></img>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='you'>
          <Card.Img variant="top" src='https://это-важно.рф/upload/iblock/267/59.jpg'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Оливье на сметане</Card.Title>
            </div>
            <Card.Text>

                <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img1'></img>
                <img src='https://cdn-icons-png.flaticon.com/128/2589/2589197.png' className='img1'></img>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='you'>
          <Card.Img variant="top" src='http://klublady.ru/uploads/posts/2022-02/1644978651_1-klublady-ru-p-tort-tiramisu-foto-1.jpg'/>
          <Card.Body>
            <div className='your'>
            <Card.Title className='glav'>Тирамису(личного пр.)</Card.Title>
            </div>
            <Card.Text>

                <img src='https://cdn-icons-png.flaticon.com/128/13/13673.png' className='img1'></img>
                <img src='https://cdn-icons-png.flaticon.com/128/2589/2589197.png' className='img1'></img>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      
      </>
  }
  
  export default AllCards;