import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { Project } from '../data/projects';

interface Props {
  projects: Project[];
}

function ProjectCard({ project, angle }: { project: Project; angle: number }) {
  return (
    <group position={[Math.sin(angle) * 5.5, 0, Math.cos(angle) * 5.5]} rotation={[0, -angle, 0]}>
      <mesh
        onPointerOver={(e) => {
          const mesh = e.object;
          mesh.scale.setScalar(1.1);
        }}
        onPointerOut={(e) => {
          const mesh = e.object;
          mesh.scale.setScalar(1);
        }}
        onClick={() => window.open(project.url, '_blank')}
      >
        <planeGeometry args={[3.2, 1.8]} />
        <meshBasicMaterial color="#1a1a1a" opacity={0.95} transparent />
      </mesh>
    </group>
  );
}

function CarouselScene({ projects }: { projects: Project[] }) {
  const angleStep = (2 * Math.PI) / projects.length;

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={-0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
      {projects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          angle={angleStep * i}
        />
      ))}
    </>
  );
}

export default function ProjectCarousel3D({ projects }: Props) {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mb-8">
        <h2 className="text-3xl font-bold text-center text-white mb-4">All Projects</h2>
        <p className="text-gray-400 text-center">Drag to spin • Click cards to visit</p>
      </div>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        style={{ height: '500px', width: '100%' }}
        gl={{ antialias: true }}
      >
        <CarouselScene projects={projects} />
      </Canvas>
    </section>
  );
}