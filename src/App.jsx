import React, { useState, useEffect, useRef } from "react";
// import BIRDS from "vanta/dist/vanta.birds.min";
import Birds from "vanta/dist/vanta.birds.min";

// BIRDS	vanta/dist/vanta.birds.min
// CLOUDS	vanta/dist/vanta.clouds.min
// FOG	vanta/dist/vanta.fog.min
// GLOBE	vanta/dist/vanta.globe.min
// HALO	vanta/dist/vanta.halo.min
// NET	vanta/dist/vanta.net.min
// RINGS	vanta/dist/vanta.rings.min
// TOPOLOGY	vanta/dist/vanta.topology.min
// TRUNK	vanta/dist/vanta.trunk.min
// WAVES	vanta/dist/vanta.waves.min

import Movie from "./components/Movie";

const App = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        Birds({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} style={{ minHeight: "100vh" }}>
      <Movie />
    </div>
  );
};

export default App;
