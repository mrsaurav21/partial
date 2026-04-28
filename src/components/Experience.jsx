import { OrbitControls, Stage } from "@react-three/drei";
import { Table } from "./Table";
import { useConfigurator } from "../contexts/Configurator";

export const Experience = () => {
  const {legs} = useConfigurator();
  return (
    <>
      <Stage
        intensity={1.5}
        environment={null} // 🔥 FIX (no internet dependency)
        shadows={{
          type: "accumulative",
          color: "#85ffbd",
          colorBlend: 2,
          opacity: 0.2,
        }}
        adjustCamera={2}
      >
        <Table />
      </Stage>

      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};