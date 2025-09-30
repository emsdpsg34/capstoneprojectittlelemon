
import './App.css';

function App() {
  return (
    <>
    <title>Little Lemon</title>
    <meta name="Little Lemon app" content="A little lemon app for a restaurant"/>
    <meta name="og.description" content="Little Lemon is a Mediterranean cuisine restaurant"/>
    <Header>
      <img src="2ba9f4c8b-1d3a-4e0c-8f0e-5f2d6f3e6c3b_200x200.png" alt="Little Lemon Logo" />
      <meta name="og:image" content="2ba9f4c8b-1d3a-4e0c-8f0e-5f2d6f3e6c3b_200x200.png"/>
      <nav>
        <ul>
         <li><a href="home">Home</a></li>
          <li><a href="AboutUs">About Us</a></li>
          <li><a href="Our Menu">Menu</a></li>
          <li><a href="Reservations">Reservations</a></li>
          <li><a href="Log In">Log In</a></li>
        </ul>
      </nav>
    </Header>
    <Main></Main>
    <Footer>
      <p>© 2024 Little Lemon</p>
    </Footer>
    </>
  );
}

export default App;
