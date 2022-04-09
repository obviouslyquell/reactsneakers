import Header from "./Components/Header/Header";
import Drawer from "./Components/Drawer/Drawer";
import Card from "./Components/Card/Card";

const arr = [
  {
    title:'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    url:'img/green_blazer.png'
  },
  {
    title:'Мужские Кроссовки Nike Air Max 270',
    price: 15999,
    url:'img/airmax.png'
  },
  {
    title:'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    url:'img/white_blazer.png'
  }
]

function App() {
  return (
    <div className="wrapper clear">
      
        <Drawer/>

      
        
       <Header/>

        <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
            <h1 className="">Все кроссовки</h1>
            <div className="search-block">
              <img src='img/search.svg' alt='search' />
              <input placeholder="Поиск"></input>
            </div>
          </div>
          
          <div className="d-flex">
            {
              arr.map(i=>
                <Card 
                title={i.title} 
                price={i.price} 
                img={i.url}
                onClickPlus = {()=>{console.log(i)}}
                />
                
              )
            }
          </div>

          
        </div>
    </div>
  );
}

export default App;


