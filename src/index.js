import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import pic from './pic.png';
import nsp from './No-spiders.jpg';
import eco from './pngwing.png';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-links-container">
        <a href="#problems">Проблемы с пауками?</a>
        <a href="#spiders">Я их съем!</a>
        <a href="#solve">Контакты</a>
      </div>
    </nav>
  );
};

const listSpiders = [
  {
    spider: "Большой паук",
    paymentPerOne: 100
},
  {
    spider: "Маленький паук",
    paymentPerOne: 200
  },
  {
    spider: "Волосатый паук",
    paymentPerOne: 75
  },
  {
    spider: "Прыгающий паук",
    paymentPerOne: 250
},
];

function Spiders(props) {
  const listSpiders = props.list.map((item, index) =>
    <SpiderItem key={index} spider={item.spider} paymentPerOne={item.paymentPerOne} />
  );
  return (
    <div className="spider">
      <h2>{props.title} </h2>
      <ul>
        {listSpiders}
      </ul>
    </div>
  )
}

function SpiderItem(props) {
  const [isOpen, setOpenClose] = React.useState(false);
  const [text, textChange] = React.useState('');
  const press = () => {
    setOpenClose(!isOpen);
  }

  const textOnChange = (event) =>{
    if(!isNaN(parseInt(event.target.value)) && parseInt(event.target.value)>=0 
    && Number(event.target.value)%1===0){
      textChange(parseInt(event.target.value));
    }
    else{
       textChange('');      
    }
  }
  
  return (
    <li>
      <span className="left">{props.spider}</span>
      <span className="right" onClick={press}>{isOpen ? "×" : "+"}</span>
      {isOpen &&
        <div>
        Введите количество пауков: <br/>
        <input type="number" onChange={textOnChange} value={text}></input>
        Стоимость: {props.paymentPerOne* (text===''? 0 : text)}
      </div>
      }
    </li>
  )
}

function Picture(props) {
  return (
    <div className="photo">
    <img src={pic} alt="photo" />
    <p> Олег Артёмович <br/> заслуженный поедатель пауков </p>
    </div>
  );
};

function Problems() {
  return (
    <div id="problems"  class="problems">
      <Spiders title="Я СЪЕМ их всех!" list={listSpiders} />
      <Picture />
  </div>
  );
}
  
const Contact = () => {
  return (
    <div id="solve">
      <img src={eco} class="no-spider"/>
      <p>"Хруст паука на моих зубах даёт смысл моей жизни"</p>
      <h1>Больше никаких пауков</h1>
      <h2>3воните:<br/>
      8-800-522-77-77</h2>
    </div>
  );
};


function Content() {
  return (
    <>
      <Navbar />
      <img src={nsp} class="no-spider"/>
      <h1>ПРОБЛЕМЫ С ПАУКАМИ?</h1>
      <Problems />
      <Contact />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Content/>
);