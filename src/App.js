import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import BrandStories from './BrandStories';
import Page6 from './Page6';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faInstagram, faFacebook, faTwitter, faYoutube, faArrowRight);


function App() {
  return (
    <div className="App">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <BrandStories />
      <Page6 />
    </div>
  );
}

export default App;
