//parent component for all da component routes
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">

        <Outlet />
          <br />
      </div>
    </div>
  )
}

export default Layout

//<span className="tags top-tags">&lt;body&gt;</span>

/*
<span className="tags bottom-tags">
  &lt;/body&gt;*/
