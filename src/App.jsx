import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Taskboard from "./Task/Taskboard";
const App = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <Taskboard />
      </div>
      <Footer />
    </div>
  );
};

export default App;
