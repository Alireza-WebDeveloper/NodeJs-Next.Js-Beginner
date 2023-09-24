import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <div className="flex flex-wrap justify-between items-center p-2 bg-gray-50">
        <Navigation />
        <Logo />
      </div>
    </header>
  );
};

export default Header;
