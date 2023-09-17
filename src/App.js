import "./App.css";

function App() {
  return (
    <div className="App">
      <model-viewer
        ar
        modes="scene-viewer quick-look webxr"
        // image="/bg.jpg"
        src={"/benz.glb"} // AR Android/Web
        // ios-src={"/deer.usdz"} // AR iOS
        auto-rotate
        // autoplay
        shadow-intensity="1"
        camera-controls
        style={{ width: "100vw", height: "100vh" }}></model-viewer>
    </div>
  );
}

export default App;
