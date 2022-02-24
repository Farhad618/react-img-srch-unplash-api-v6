import logo from './logo.svg';
import './App.css';
// import { LoadImages, SearchImages } from './components/Api';
import { SearchImages } from './components/Api';
import Image from './components/Image';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  // const data = LoadImages();

  
 
  let srchBtnPress = () => {
    //console.log(query);
    //return query;
    setSearch(query);
  }
const data2 = SearchImages(search);
  // console.log(data2);
  return (
    <div className="App">
      <div className='container d-flex my-3'>
        <input onChange={(e)=> setQuery(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={srchBtnPress} className="btn btn-outline-success" type="submit">Search</button>
      </div>
      <div className='container'>
        {/* <div className='row'> */}
        <div className='containts'>
          {data2.map((img, key)=>(
            <Image src={img.urls.thumb} key={key} imageId={img.id} modalImgUrl={img.urls.regular} saveAs={img.links.download} 
            profileImg={(img.user.profile_image.large)?img.user.profile_image.large:logo}
            uname={img.user.username}
            fname={img.user.name}/>
          ))}
        </div>
          
        {/* </div> */}

        
      </div>
    </div>
  );
}

export default App;
