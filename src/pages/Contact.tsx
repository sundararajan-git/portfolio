import { useState, Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLocationSharp, IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { ThemeContext } from "../layouts/Provider";
import { LuExternalLink } from "react-icons/lu";

const contactItems = [
  {
    label: (
      <span className="flex items-center gap-2 text-2xl">
        <span>
          <FaSquarePhone className="text-green-600" />
        </span>
        Phone
      </span>
    ),
    href: "tel:+918148133743",
    tooltip: "Call me",
  },
  {
    label: (
      <span className="flex items-center gap-2 text-2xl">
        <span>
          <MdEmail className="text-red-600" />
        </span>
        Email
      </span>
    ),
    href: "mailto:sundararajanselvarasu@gmail.com",
    tooltip: "Send an email",
  },
  {
    label: (
      <span className="flex items-center gap-2 text-2xl">
        <span>
          <IoLocationSharp className="text-blue-600" />
        </span>
        Location
      </span>
    ),
    href: "https://maps.google.com/?q=Chennai",
    tooltip: "View location",
  },
  {
    label: (
      <span className="flex items-center gap-2 text-2xl">
        <span>
          <IoLogoLinkedin className="text-blue-600" />
        </span>
        Linkedin
      </span>
    ),
    href: "https://maps.google.com/?q=Chennai",
    tooltip: "View location",
  },
];

const SpherePoint = ({ position, item }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <Html distanceFactor={10} center>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative px-3 py-1.5 rounded-lg text-base whitespace-nowrap transition-all duration-300 font-medium`}
        >
          {item.label}
          {hovered && (
            <span
              className={` absolute bottom-[110%] left-1/2 -translate-x-1/2 bg-[#222] text-white px-2 py-1 rounded-sm text-xs whitespace-nowrap flex items-center gap-2`}
            >
              <span>{item.tooltip}</span>
              <LuExternalLink />
            </span>
          )}
        </a>
      </Html>
    </group>
  );
};

const SphereCloud = () => {
  const radius = 3;
  const count = contactItems.length;
  const angleStep = (2 * Math.PI) / count;
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* Optional sphere wireframe for visual structure */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial
          color={theme === "dark" ? "white" : "black"}
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {contactItems.map((item, i) => {
        const theta = i * angleStep;
        const x = radius * Math.cos(theta);
        const y = radius * Math.sin(theta);
        const z = radius * Math.sin(i); // add slight z-variation
        return <SpherePoint key={i} position={[x, y, z]} item={item} />;
      })}
    </>
  );
};

const ContactSphere3D = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="w-full h-[70vh] sm:h-full">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <SphereCloud />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default ContactSphere3D;
