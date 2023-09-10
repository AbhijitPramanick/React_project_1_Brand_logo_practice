const HeroSection = () => {
  return (
    <div className="hero-section container">
      <div className="hero-main">
        <h1>Step into Durga Puja 2023 with Style!</h1>
        <p>
          Elevate your festive look with our exquisite collection of women's
          shoes. From traditional juttis to trendy heels, we have it all to make
          you shine this Durga Puja season. Don't miss out on the perfect pair
          to complement your attire. Shop now!
        </p>
        <div className="heroBtn">
          <button>Shop Now</button>
          <button id="secondary-btn">Category</button>
        </div>

        <p id="shopping">Also available on</p>
        <div className="brand-idols">
          <img src="/images/flipkart.png" alt="Flikart img" />
          <img src="/images/amazon.png" alt="Amazon img" />
        </div>
      </div>
      <div className="hero-image">
        <img
          src="/images/shoeslady_image.png"
          alt="Lady shoes image"
          height="500px"
          width="500px"
        />
      </div>
    </div>
  );
};

export default HeroSection;
