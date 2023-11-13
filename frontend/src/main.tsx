import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './components/Home';
import Search from './components/Search';
import VideoPlayer from './components/VideoPlayer';
const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', index: true, element: <Home /> },
      { path: '/search/:searchTerm', index: true, element: <Search /> },
      { path: '/player/:url', index: true, element: <VideoPlayer /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
