import StarfieldAnimation from "react-starfield";

export default function Background() {
  return (
    <StarfieldAnimation
      style={{
        position: "absolute",
        width: "100%",
        height: "100%"
          }}
      starColor={[255, 255, 255]}
      numParticles={1000} // Lower count for a shooting/falling star vibe
      speedFactor={0.2}
    />
  );
}
