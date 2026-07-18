'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 800 }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const color = useMemo(() => new THREE.Color(), [])

  // Generate initial random data and colorful vertex colors
  const particles = useMemo(() => {
    const temp = []
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
      
      // Vibrant color palette: Electric Blue, Cyan, Purple, Magenta
      const hue = 0.5 + Math.random() * 0.45 
      color.setHSL(hue, 0.9, 0.6)
      color.toArray(colors, i * 3)
    }
    return { data: temp, colorArray: colors }
  }, [count, color])

  useFrame((state) => {
    if (!mesh.current) return

    // Convert mouse coordinates to world coordinates roughly
    const mouseX = (state.mouse.x * state.viewport.width) / 2
    const mouseY = (state.mouse.y * state.viewport.height) / 2

    particles.data.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      
      // Calculate base float position
      const x = Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10
      const y = Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10
      const z = Math.cos(t) + Math.sin(t * 3) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      
      // Calculate distance to cursor
      const dx = mouseX - x
      const dy = mouseY - y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      // Apply repulsion force if near cursor
      const interactionRadius = 8
      if (distance < interactionRadius) {
        const force = (interactionRadius - distance) / interactionRadius
        particle.mx -= (dx / distance) * force * 0.5
        particle.my -= (dy / distance) * force * 0.5
      }
      
      // Dampen momentum to return to normal float
      particle.mx *= 0.92
      particle.my *= 0.92
      
      dummy.position.set(x + particle.mx, y + particle.my, z)
      
      const s = Math.cos(t)
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      mesh.current!.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]}>
        <instancedBufferAttribute attach="attributes-color" args={[particles.colorArray, 3]} />
      </dodecahedronGeometry>
      <meshBasicMaterial vertexColors transparent opacity={0.7} />
    </instancedMesh>
  )
}

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ fov: 75, position: [0, 0, 30] }}>
        <Particles />
      </Canvas>
    </div>
  )
}
