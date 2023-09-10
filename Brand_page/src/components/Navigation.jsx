const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img
          src="/images/brand_logo.png"
          alt="Brand logo"
          height={58}
          width={76}
        />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
