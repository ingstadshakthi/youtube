import { FaBars, FaMagnifyingGlass } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  setMenu: () => void;
}

const Header = ({ setMenu }: HeaderProps) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const searchHandler = function (e: React.SyntheticEvent) {
    e.preventDefault();
    if (search !== '') {
      navigate('/search/' + search);
    }
  };

  return (
    <header className='flex justify-between items-center h-14 px-3 fixed w-full top-0 z-30 bg-white border-b '>
      <div>
        <span className='flex items-center justify-center'>
          <FaBars
            className='inline mx-2 cursor-pointer'
            onClick={() => {
              setMenu();
            }}
          />
          <Link to='/' className='text-xl flex justify-center items-center'>
            My Tube
          </Link>
        </span>
      </div>
      <div className='w-2/5 flex border-2 rounded-2xl border-gray-300 bg-gray-200'>
        <form className='flex w-full' onSubmit={searchHandler}>
          <input
            type='text'
            name='search'
            className='w-full h-10 rounded-l-2xl px-3 outline-none '
            placeholder='Search Here...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className='border-l-2 border-solid border-gray-300 outline-none px-2 md:px-4 lg:px-6'>
            {' '}
            <FaMagnifyingGlass />
          </button>
        </form>
      </div>
      <div>
        <button className='flex justify-center items-center'></button>
      </div>
    </header>
  );
};

export default Header;
