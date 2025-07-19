import React from 'react';
import './cube.css';

interface CubeProps {
  size?: number; // Default: 50
}

const Cube: React.FC<CubeProps> = ({ size = 50 }) => {
  const styleVars = {
    '--cube-size': `${size}px`,
  } as React.CSSProperties;

  return (
    <div className="cube-wrapper" style={styleVars}>
      <div className="container">
        {[...Array(3)].map((_, cubeIndex) => (
          <div className="cube" key={cubeIndex}>
            {[-1, 0, 1].map((x) => (
              <div
                className="column"
                key={x}
                style={{ '--x': x, '--y': 0 } as React.CSSProperties}
              >
                {[3, 2, 1].map((i) => (
                  <span key={i} style={{ '--i': i } as React.CSSProperties} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cube;
