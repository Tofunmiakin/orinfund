import "./App.css";
import OrinLogo from "./Assets/OrinLogo.png";
import money from "./Assets/money.png";
import create from "./Assets/create.png";
import profit from "./Assets/profit.png";
import ellipse from "./Assets/ellipse.png";
import rectangle from "./Assets/rectangle.png";

function App() {
  return (
    <div className="App mx-10">
      <div id="Home">
        <div className="flex justify-between mt-5">
          <a href="/" className="">
            <img src={OrinLogo} alt="logo" className="w-36" />
          </a>
          <div className="space-x-16 text-xl my-auto font-normal">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Product">Product</a>
          </div>
          <button className="bg-primary text-base text-white px-5 font-bold">
            Get Funded Now
          </button>
        </div>
        <div>
          <p className="text-8xl font-bold mt-20">
            A Marketplace <br />
            for Intellectual <br />
            Property Funding
          </p>
          <p className="text-4xl mt-12">
            Financing the African Creative Industries
          </p>
          <button className="bg-primary text-base text-white px-6 mt-12 py-2 font-bold">
            See Options
          </button>
        </div>
        <div className="bg-primary mt-20 relative">
          <img src={ellipse}></img>
          <img className="absolute right-0 bottom-0 " src={rectangle}></img>
          <div className="flex justify-between -mt-10 mx-56 text-4xl text-white">
            <div className="space-y-5 mb-48">
              <img src={money} className="mx-auto"></img>
              <p>Get Money</p>
            </div>
            <div className="space-y-5 mb-48">
              <img src={create} className="mx-auto"></img>
              <p>Create</p>
            </div>
            <div className="space-y-5 mb-48">
              <img src={profit} className="mx-auto"></img>
              <p>Make Profit</p>
            </div>
          </div>
        </div>
      </div>

      <div id="About" className="mt-20">
        <div className="flex">
          <p className="text-6xl font-bold">About</p>
          <img src={OrinLogo} className="my-auto w-48 ml-4" />
        </div>
      </div>
    </div>
  );
}

export default App;
