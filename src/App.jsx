import './App.css'
import {NavLink, Routes, Route, useNavigate} from 'react-router-dom'
import logoMedium from './assets/logo-medium.png'
import Home from "./pages/homePage/Home.jsx";
import Overview from "./pages/overviewPage/Overview.jsx";
import NewPost from "./pages/newPostPage/NewPost.jsx";
import PostDetails from "./pages/postDetailsPage/PostDetails.jsx";
import NotFound from "./pages/notFoundPage/NotFound.jsx";

function App() {
    const navigate = useNavigate();


    return (
        <>
            <nav>
                <div>
                    <button type='button' onClick={() => navigate('/')}>
                        <img src={logoMedium} alt='homepage link image'/>
                    </button>
                    <ul>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'}
                                     to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'}
                                     to='/posts'>Alle posts</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active-link' : 'default-link'} to='/new'>Nieuwe
                                post maken</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<NewPost/>}/>
                    <Route path="/posts" element={<Overview/>}/>
                    <Route path="/posts/:id" element={<PostDetails/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </>
    )
}


export default App
