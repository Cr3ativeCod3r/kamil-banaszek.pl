import React, { useRef, useEffect } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';



const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    vantaEffect.current = WAVES({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });

    return () => {
      vantaEffect.current?.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-25" />;
};

export default VantaBackground;