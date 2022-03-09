import "./header.scss";

const Header = () => {
  return (
    <>
      <header>
        <h1 className='header__title'>
          We are launching<span> soon!</span>
        </h1>
        <p className='header__subtitle'>Subscribe and get notified</p>
      </header>
    </>
  );
};

export default Header;
