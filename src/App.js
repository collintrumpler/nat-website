import "./App.css";
import Form from "./Email";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero path={`${process.env.PUBLIC_URL}/assets/images/image5.jpg`} />
        <About
          alt="image"
          path={`${process.env.PUBLIC_URL}/assets/images/image1.jpg`}
        />
        <Services />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="nav">
      <div className="nav-title-container">
        <h1>NAT</h1>
        <h2>PROPERTY SERVICES</h2>
      </div>
      <div className="nav-btn-container">
        <NavButton dest="#about" name="About" />
        <NavButton dest="#services" name="Services" />
        <NavButton dest="#contact" name="Contact" />
      </div>
    </header>
  );
}

function NavButton({ name, dest }) {
  return (
    <a href={dest}>
      <button className="nav-btn">{name}</button>
    </a>
  );
}

function Hero({ path }) {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Maine-based Property Services</h2>
        <p>
          At NAT's, though small, our commitment to quality is paramount. With
          meticulous attention to detail we ensure each service reflects our
          dedication to your satisfaction, creating a lasting impact on your
          property.
        </p>
        <a href="#gallery">
          <button>VIEW OUR WORK</button>
        </a>
      </div>
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${path})` }}
      ></div>
    </section>
  );
}

function About({ path, alt }) {
  return (
    <>
      <section id="about" className="about-container">
        <img src={path} alt={alt}></img>
        <div className="about-content">
          <h2>WHAT WE DO</h2>
          <p>
            Welcome to NAT's Property Services, your dedicated source for
            personalized property services based out of Saco, Maine. As a small
            team, we prioritize quality and tailor our offerings to meet your
            unique needs. From landscaping to construction and just about
            everything in between, we're committed to enhancing your space with
            attention to detail and reliable service. Experience the difference
            with us, where your property's well-being is our top priority.
          </p>
        </div>
      </section>
      <img
        className="background-design"
        src={`${process.env.PUBLIC_URL}/assets/images/about-design-1.png`}
        alt={alt}
      ></img>
    </>
  );
}

function Services() {
  return (
    <section id="services" className="services-container">
      <Service
        path={`${process.env.PUBLIC_URL}/assets/images/paint-roller.png`}
        name="Painting & Exterior"
      />
      <Service
        path={`${process.env.PUBLIC_URL}/assets/images/parquet.png`}
        name="Flooring & Carpet"
      />
      <Service
        path={`${process.env.PUBLIC_URL}/assets/images/planning.png`}
        name="Landscaping & Plowing"
      />
      <Service
        path={`${process.env.PUBLIC_URL}/assets/images/helmet.png`}
        name="New Construction & Renovation"
      />
    </section>
  );
}

function Service({ path, name }) {
  return (
    <div className="service">
      <img src={path} alt={name}></img>
      <h3>{name}</h3>
    </div>
  );
}

function Gallery() {
  return (
    <div id="gallery" className="gallery-container">
      <h3 className=" gallery-title">SOME OF OUR WORK</h3>
      <GalleryImage
        path={`${process.env.PUBLIC_URL}/assets/images/image2.jpg`}
        name="Painted Door"
      />
      <GalleryImage
        path={`${process.env.PUBLIC_URL}/assets/images/image3.jpg`}
        name="Flooring"
      />
      <GalleryImage
        path={`${process.env.PUBLIC_URL}/assets/images/image4.jpg`}
        name="Exterior"
      />
      <a
        className="gallery-btn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/profile.php?id=100063698036781&sk=photos"
      >
        <button>SEE MORE</button>
      </a>
    </div>
  );
}

function GalleryImage({ path, name }) {
  return <img src={path} alt={name}></img>;
}

function ContactForm() {
  return (
    <div id="contact" className="form-container">
      <h2>REACH OUT</h2>
      <Form />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <section>
        <div className="footer-info">
          <h3>Contact Info:</h3>
          <h4>trumplernick@yahoo.com</h4>
          <h4>(207)-756-3211</h4>
        </div>
        <div className="sm-links">
          <Social
            name="Facebook"
            path={`${process.env.PUBLIC_URL}/assets/images/facebook-logo.png`}
            link="https://www.facebook.com/profile.php?id=100063698036781"
          />
        </div>
      </section>
    </footer>
  );
}

function Social({ link, path, name }) {
  return (
    <a href={link}>
      <img className="social-media-link" src={path} alt={name}></img>
    </a>
  );
}

export default App;
