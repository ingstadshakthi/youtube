import { NavLink } from 'react-router-dom';
import {
  FaHouseChimney,
  FaFireFlameCurved,
  FaCartShopping,
  FaMusic,
  FaRegFileVideo,
  FaPodcast,
  FaGamepad,
} from 'react-icons/fa6';
import {
  FaNewspaper,
  FaPassport,
  FaRegLightbulb,
  FaShop,
} from 'react-icons/fa6';

const classNames = (isActive: boolean) => {
  let className =
    'flex justify-start items-center rounded-md h-12 px-2 text-base hover:bg-gray-200 transition-all mx-2';
  className = isActive ? className + ' bg-gray-200' : className;
  return className;
};
const SideBar = () => {
  return (
    <nav className='w-40 h-screen border-r bottom-1 border-gray-200 overflow-y-scroll overflow-x-hidden absolute top-0 left-0 pt-14 z-10 pl-2'>
      <section className='flex flex-col items-start gap-2 text-gray-700 py-2 border-b border-gray-200 w-full'>
        <span className='w-full'>
          <NavLink
            to='/'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaHouseChimney className='inline' />
            {'  '} Home
          </NavLink>
        </span>
      </section>
      <section className='flex flex-col items-start gap-2 text-gray-700 text-xl py-4 border-gray-200 w-full'>
        <p className='pl-2'>Explore</p>

        <span className='w-full'>
          <NavLink
            to='/search/:trending'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaFireFlameCurved className='inline' /> Trending
          </NavLink>
        </span>
        <span className='w-full'>
          <NavLink
            to='/search/:shopping'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaCartShopping className='inline' /> Shopping
          </NavLink>
        </span>
        <span className='w-full'>
          <NavLink
            to='/search/:music'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaMusic className='inline' /> Music
          </NavLink>
        </span>
        <span className='w-full'>
          <NavLink
            to='/search/:film'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaRegFileVideo className='inline' /> Film
          </NavLink>
        </span>
        <span className='w-full'>
          <NavLink
            to='/search/:podcast'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaPodcast className='inline' /> Podcast
          </NavLink>
        </span>
        <span className='w-full'>
          <NavLink
            to='/search/:game'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaGamepad className='inline' /> Game
          </NavLink>
        </span>
        <span className='w-full'>
          <NavLink
            to='/search/:news'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaNewspaper className='inline' /> News
          </NavLink>
        </span>
        <span className='w-full'>
          <NavLink
            to='/search/:sport'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaPassport className='inline' /> Sport
          </NavLink>
        </span>
        <span className='w-full'>
          <NavLink
            to='/search/:learning'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaRegLightbulb className='inline' /> Learning
          </NavLink>
        </span>
        <span className='w-full'>
          <NavLink
            to='/search/:fashion'
            className={(isActive) => classNames(isActive.isActive)}
          >
            <FaShop className='inline' /> Fashion
          </NavLink>
        </span>
      </section>
    </nav>
  );
};

export default SideBar;
