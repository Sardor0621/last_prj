import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layouts from './Layout';
import Uslugi from './components/uslugi';
import DropdownMenu from './Layout';
import Routes from "./routes"
import Layoutt from './Layout';
import Navbar from "./components/navbar"

export default function App() {
  return (
    <div className='containers'>
      <Routes/>
      {/* <Layoutt/> */}
          {/* <Router>
    
        <DropdownMenu />
        <Route path="/layouts" exact component={Layouts} />
        <Route path="/uslugi" component={Uslugi} />

      
    </Router> */}
       {/* <Router>
      <div>
         <Route path="/layouts" exact component={Layouts} />
        <Route path="/uslugi" component={Uslugi} />
      </div>
    </Router> */}
    </div>
  );
}




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const App = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <Router>
//       <div>
//         <select value={selectedOption} onChange={handleSelectChange}>
//           <option value="">Select an option</option>
//           <option value="option1">Option 1</option>
//           <option value="option2">Option 2</option>
//           <option value="option3">Option 3</option>
//         </select>

//         <Route path="/option1">
//           <div>Option 1 content</div>
//         </Route>
//         <Route path="/option2">
//           <div>Option 2 content</div>
//         </Route>
//         <Route path="/option3">
//           <div>Option 3 content</div>
//         </Route>
//       </div>
//     </Router>
//   );
// };

// export default App;
// import React from 'react'
// import Routes from "./routes"
// import Navbar from './components/navbar'

// export default function App() {
//   return (
//     <div>
//       {/* <Routes/> */}
//       <Navbar/>
//     </div>
//   )
// }
// import React, { useState } from 'react';
// import {  Router, Route, Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const [selectedPage, setSelectedPage] = useState('/');
//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         setSelectedPage(event.target.value);
//         navigate.push(event.target.value);
//     };

//     return (
        
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Bosh sahifa</Link>
//                         </li>
//                         <li>
//                             <Link to="/yangiliklar">Yangiliklar</Link>
//                         </li>
//                         <li>
//                             <select value={selectedPage} onChange={handleChange}>
//                                 <option value="/mahsulotlar">Mahsulotlar</option>
//                                 <option value="/mahsulotlar/kategoriya1">Kategoriya 1</option>
//                                 <option value="/mahsulotlar/kategoriya2">Kategoriya 2</option>
//                                 <option value="/mahsulotlar/kategoriya3">Kategoriya 3</option>
//                             </select>
//                         </li>
//                     </ul>
//                 </nav>

//                 <Route path="/" exact render={() => <Home />} />
//                 <Route path="/yangiliklar" render={() => <News />} />
//                 <Route path="/mahsulotlar" render={() => <Products />} />
//                 <Route path="/mahsulotlar/kategoriya1" render={() => <Category1 />} />
//                 <Route path="/mahsulotlar/kategoriya2" render={() => <Category2 />} />
//                 <Route path="/mahsulotlar/kategoriya3" render={() => <Category3 />} />
//             </div>
//         </Router>
//     );
// };

// const Home = () => (
//     <div>
//         <h2>Bosh sahifa</h2>
//     </div>
// );

// const News = () => (
//     <div>
//         <h2>Yangiliklar</h2>
//     </div>
// );

// const Products = () => (
//     <div>
//         <h2>Mahsulotlar</h2>
//     </div>
// );

// const Category1 = () => (
//     <div>
//         <h2>Kategoriya 1</h2>
//     </div>
// );

// const Category2 = () => (
//     <div>
//         <h2>Kategoriya 2</h2>
//     </div>
// );

// const Category3 = () => (
//     <div>
//         <h2>Kategoriya 3</h2>
//     </div>
// );

// export default Navbar;


