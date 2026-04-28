import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useConfigurator } from "../contexts/Configurator";
import * as THREE from "three";

export function Table(props) {
  const { nodes, materials } = useGLTF('./models/Table.gltf')
  const { legs, legsColor,tableWidth } = useConfigurator();

  const metalMaterial = new THREE.MeshStandardMaterial({
    color: legsColor,
    metalness: 1,
    roughness: 0.3,
  });
  const tableWidthScale = tableWidth / 100;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Plate.geometry}
        material={materials.Plate}
        castShadow
        scale={[tableWidthScale, 1, 1]}
      />

      {legs === 0 && (
        <>
          <mesh
            castShadow
            geometry={nodes.Legs01Left.geometry}
            material={metalMaterial}
            position={[-1.5, 0, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Legs01Right.geometry}
            material={metalMaterial}
            position={[1.5, 0, 0]}
          />
        </>
      )}

      {legs === 1 && (
        <>
          <mesh
            castShadow
            geometry={nodes.Legs02Left.geometry}
            material={metalMaterial}
            position={[-1.5, 0, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Legs02Right.geometry}
            material={metalMaterial}
            position={[1.5, 0, 0]}
          />
        </>
      )}

      {legs === 2 && (
        <>
          <mesh
            castShadow
            geometry={nodes.Legs03Left.geometry}
            material={metalMaterial}
            position={[-1.5, 0, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Legs03Right.geometry}
            material={metalMaterial}
            position={[1.5, 0, 0]}
          />
        </>
      )}
    </group>
  )
}

useGLTF.preload('./models/Table.gltf')