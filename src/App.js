import React from 'react';
// import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import { Routes, Route} from 'react-router-dom';
const App = ()=>{
    return (
        <div className='App'>
        <Header/>
        <Routes>
            <Route path="/" element={<Body />}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="contactus" element={<ContactUs/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
        </div>
        
    )
}
// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children:[
          
//             {
//                 path: "about",
//                 element: <About />,
//             },
//             {
//                 path: "contactus",
//                 element: <ContactUs />,
//             },
//             {
//                 path:"",
//                 element: <Body />,
//             },
//         ],
//         errorElement: <Error />,
//     },
   
// ]);
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={appRouter} />)
export default App;