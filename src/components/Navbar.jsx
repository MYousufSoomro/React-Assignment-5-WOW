import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="nav-conatainer">
      <div className="logo-area">
        <Logo />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Mens</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="cart-area">
        <p>Cart</p>
        <p>Search</p>
      </div>
    </div>
  );
};

export default Navbar;
