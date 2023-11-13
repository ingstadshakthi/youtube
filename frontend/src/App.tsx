import Header from './components/Header';
import { Fragment } from 'react';
import SideBar from './components/SideBar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const windowWidth = useRef(window.innerWidth);
  const [isMenuActive, setIsMenuActive] = useState(
    windowWidth.current > 560 ? true : false
  );

  function updateMenuState() {
    setIsMenuActive((prev) => !prev);
  }

  let className =
    'absolute pt-14 w-screen flex items-start flex-col pl-40 mx-2';
  if (isMenuActive === false) {
    className = 'mx-2 w-screen pt-14 absolute';
  }

  return (
    <Fragment>
      <Header setMenu={updateMenuState} />

      {isMenuActive === true && <SideBar />}
      <div className={className}>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default App;
