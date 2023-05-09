// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav>
          <a href="/" className="logo">
            Gummi
          </a>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <button className="cta-button">Get Started</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>The Best E-commerce Solution for Your Business</h1>
          <p>
            Gummi provides an all-in-one platform to help you create, manage, and grow your online store.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="https://example.com/hero-image.png" alt="Gummi Landing Page" />
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-card">
          <img src="https://example.com/feature-1.png" alt="Feature 1" />
          <h3>Responsive Design</h3>
          <p>
            Gummi provides beautiful and responsive designs that ensure your store looks great on any device.
          </p>
        </div>
        <div className="feature-card">
          <img src="https://example.com/feature-2.png" alt="Feature 2" />
          <h3>Easy Customization</h3>
          <p>
            Customize every aspect of your store, from the layout to colors and fonts, to match your brand identity.
          </p>
        </div>
        <div className="feature-card">
          <img src="https://example.com/feature-3.png" alt="Feature 3" />
          <h3>Powerful Analytics</h3>
          <p>
            Gain valuable insights into your store's performance with Gummi's powerful analytics tools.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Gummi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
