import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Header from './components/Header';
//Gif imports
import LoadingGif from "./assets/LoadingGif.gif";
import NoResultsGif from "./assets/NoResultsGif.gif";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsLoading(false);
    })
    .catch(err => console.log(err))
  }, [term])

  return (
    <div className="container mx-auto">
      <Header/>
      <ImageSearch searchText={setTerm}/>
      {!isLoading && images.length===0 && <img className="mx-auto" src={NoResultsGif} alt="No Results" />}
      {isLoading ? <img className="mx-auto" src={LoadingGif} alt="Loading" /> : <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {images.map((image)=> (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;
