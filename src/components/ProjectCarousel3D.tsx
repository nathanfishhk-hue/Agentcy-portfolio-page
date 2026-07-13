import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import type { Project } from '../data/projects';
import ProjectCard2D from './ProjectCard';

interface Props {
  projects: Project[];
}

function CarouselCard({ project, angle }: { project: Project; angle: number }) {
  const x = Math.sin(angle) * 5.5;
  const z = Math.cos(angle) * 5.5;

  return (
    <group position={[x, 0, z]} rotation={[0, -angle, 0]}>
      <Html
        transform
        occlude
        geometry={<planeGeometry args={[4, 2.5]} />}
        style={{
          width: '280px',
          height: '180px',
          pointerEvents: 'auto',
        }}
        distanceFactor={1.5}
      >
        <div className="w-[280px] h-[180px]">
          <ProjectCard2D project={project} featured={false} />
        </div>
      </Html>
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
        <CarouselCard
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