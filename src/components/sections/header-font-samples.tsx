"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';

const HeaderFontSamples = () => {
  const [fullscreenSample, setFullscreenSample] = useState<number | null>(null);

  const samples = [
    {
      id: 1,
      name: 'Κλασικό Constantia',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: 'none',
        letterSpacing: '2px'
      }
    },
    {
      id: 2,
      name: 'Με Outline/Stroke',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        WebkitTextStroke: '2px #0c06f7',
        WebkitTextFillColor: 'white',
        letterSpacing: '2px'
      }
    },
    {
      id: 3,
      name: 'Με 3D Shadow',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: '3px 3px 0px rgba(12, 6, 247, 0.3), 6px 6px 0px rgba(12, 6, 247, 0.2), 9px 9px 10px rgba(0, 0, 0, 0.1)',
        letterSpacing: '2px'
      }
    },
    {
      id: 4,
      name: 'Με Italic & Gradient',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '64px',
        fontWeight: '900',
        fontStyle: 'italic',
        backgroundImage: 'linear-gradient(135deg, #0c06f7 0%, #5555ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '1px'
      }
    },
    {
      id: 5,
      name: 'Elegant Serif + Λευκή Περίγραμμα',
      style: {
        fontFamily: 'Palatino, \'Palatino Linotype\', serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: '0 0 0 2px white, 0 0 0 3px #0c06f7',
        letterSpacing: '3px'
      }
    },
    {
      id: 6,
      name: 'Bold με Glow Effect',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: '0 0 10px rgba(12, 6, 247, 0.8), 0 0 20px rgba(12, 6, 247, 0.5), 0 0 30px rgba(12, 6, 247, 0.3)',
        letterSpacing: '2px'
      }
    },
    {
      id: 7,
      name: 'Artistic με Double Outline',
      style: {
        fontFamily: 'Garamond, serif',
        fontSize: '64px',
        fontWeight: '900',
        color: 'white',
        textShadow: '0 0 0 3px #0c06f7, 0 0 0 6px #5555ff',
        letterSpacing: '2px'
      }
    },
    {
      id: 8,
      name: 'Modern + Underline',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textDecoration: 'underline',
        textDecorationColor: '#5555ff',
        textDecorationThickness: '4px',
        textUnderlineOffset: '8px',
        letterSpacing: '1px'
      }
    },
    {
      id: 9,
      name: 'Chrome/Metallic',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        backgroundImage: 'linear-gradient(180deg, #e8e8e8 0%, #a8a8a8 50%, #5a5a5a 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        letterSpacing: '2px'
      }
    },
    {
      id: 10,
      name: 'Neon Glow',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: '0 0 5px #0c06f7, 0 0 10px #0c06f7, 0 0 20px #0c06f7, 0 0 30px #5555ff, 0 0 40px #5555ff',
        letterSpacing: '2px'
      }
    },
    {
      id: 11,
      name: 'Embossed Effect',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: '-2px -2px 2px rgba(255, 255, 255, 0.8), 2px 2px 2px rgba(0, 0, 0, 0.3)',
        letterSpacing: '2px'
      }
    },
    {
      id: 12,
      name: 'Heavy Drop Shadow',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: '5px 5px 15px rgba(0, 0, 0, 0.4), 8px 8px 0px rgba(12, 6, 247, 0.2)',
        letterSpacing: '1px'
      }
    },
    {
      id: 13,
      name: 'Comic Bold Effect',
      style: {
        fontFamily: 'Comic Sans MS, cursive, sans-serif',
        fontSize: '64px',
        fontWeight: '900',
        color: 'white',
        textShadow: '0 0 0 4px #0c06f7, 0 0 0 5px #5555ff',
        letterSpacing: '1px'
      }
    },
    {
      id: 14,
      name: 'Vintage/Old English',
      style: {
        fontFamily: 'Times New Roman, serif',
        fontSize: '72px',
        fontWeight: 'bold',
        fontVariant: 'small-caps',
        color: '#3d3d3d',
        textShadow: '2px 2px 4px rgba(12, 6, 247, 0.2)',
        letterSpacing: '3px'
      }
    },
    {
      id: 15,
      name: 'Rainbow Gradient',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        backgroundImage: 'linear-gradient(90deg, #0c06f7, #5555ff, #ff00ff, #ff0099, #5555ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '2px'
      }
    },
    {
      id: 16,
      name: 'Layered Shadows Effect',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: '1px 1px 0 #5555ff, 2px 2px 0 #0c06f7, 3px 3px 0 #5555ff, 4px 4px 10px rgba(0, 0, 0, 0.3)',
        letterSpacing: '2px'
      }
    },
    {
      id: 17,
      name: 'Glitch Art Style',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: '-3px 0 0 #ff00ff, 3px 0 0 #00ffff, 0px 0px 30px rgba(12, 6, 247, 0.5)',
        letterSpacing: '2px'
      }
    },
    {
      id: 18,
      name: 'Frosted Glass',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: 'rgba(12, 6, 247, 0.9)',
        textShadow: '0px 2px 8px rgba(0, 0, 0, 0.1), inset -1px -1px 3px rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        letterSpacing: '2px'
      }
    },
    {
      id: 19,
      name: 'Deep Navy with Gold',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#001a4d',
        textShadow: '0 0 0 2px #d4af37, 3px 3px 10px rgba(0, 0, 0, 0.3)',
        letterSpacing: '2px'
      }
    },
    {
      id: 20,
      name: 'Soft Blur Effect',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: '0 0 20px rgba(12, 6, 247, 0.4), 0 0 40px rgba(12, 6, 247, 0.2)',
        filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1))',
        letterSpacing: '1px'
      }
    },
    {
      id: 21,
      name: 'Retro Neon 80s',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#ff00ff',
        textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #00ffff, 0 0 40px #00ffff',
        letterSpacing: '3px'
      }
    },
    {
      id: 22,
      name: 'Sunset Gradient',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        backgroundImage: 'linear-gradient(90deg, #ff6b35 0%, #ff8c42 25%, #ffd93d 50%, #ff6b35 75%, #ff4757 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '2px'
      }
    },
    {
      id: 23,
      name: 'Engraved Style',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0c06f7',
        textShadow: '2px 2px 0 rgba(255, 255, 255, 0.9), -1px -1px 0 rgba(0, 0, 0, 0.3)',
        letterSpacing: '2px'
      }
    },
    {
      id: 24,
      name: 'Holographic',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        backgroundImage: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #00ff00, #ff00ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))',
        letterSpacing: '2px'
      }
    },
    {
      id: 25,
      name: 'Underwater',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#006b9e',
        textShadow: '0 0 20px rgba(0, 150, 200, 0.6), 0 0 40px rgba(100, 200, 255, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.4)',
        letterSpacing: '2px'
      }
    },
    {
      id: 26,
      name: 'Film Noir',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '68px',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '0 0 0 1px #000, 0 0 0 2px #0c06f7, 0 0 0 3px #000',
        letterSpacing: '3px'
      }
    },
    {
      id: 27,
      name: 'Cyberpunk',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#ff0080',
        textShadow: '-3px 0 0 #00ffff, 3px 0 0 #ff0080, 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(255, 0, 128, 0.3)',
        letterSpacing: '2px'
      }
    },
    {
      id: 28,
      name: 'Forest Green & Gold',
      style: {
        fontFamily: 'Palatino, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#1a472a',
        textShadow: '0 0 0 2px #d4af37, 0 0 15px rgba(212, 175, 55, 0.4), 3px 3px 8px rgba(0, 0, 0, 0.3)',
        letterSpacing: '2px'
      }
    },
    {
      id: 29,
      name: 'Blue Watercolor',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        backgroundImage: 'linear-gradient(135deg, #0066cc 0%, #0099ff 50%, #00ccff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'drop-shadow(0 4px 8px rgba(0, 102, 204, 0.3))',
        letterSpacing: '2px'
      }
    },
    {
      id: 30,
      name: 'Deep Ocean Blue',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#001a4d',
        textShadow: '0 0 20px rgba(0, 102, 204, 0.6), 0 0 40px rgba(0, 150, 255, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
        letterSpacing: '2px'
      }
    },
    {
      id: 31,
      name: 'Royal Blue Elegance',
      style: {
        fontFamily: 'Palatino, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#4169e1',
        textShadow: '0 0 0 2px #ffffff, 0 0 0 4px #4169e1, 0 0 20px rgba(65, 105, 225, 0.4)',
        letterSpacing: '3px'
      }
    },
    {
      id: 32,
      name: 'Sky Blue Mist',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#1e90ff',
        textShadow: '0 0 10px rgba(30, 144, 255, 0.5), 0 0 20px rgba(70, 180, 255, 0.3), 0 0 30px rgba(100, 200, 255, 0.2)',
        letterSpacing: '2px'
      }
    },
    {
      id: 33,
      name: 'Artistic Brush Stroke',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '66px',
        fontWeight: '900',
        color: '#0066cc',
        textShadow: '0 0 0 3px #5555ff, 0 0 15px rgba(0, 102, 204, 0.5), -2px 3px 0px rgba(0, 0, 0, 0.1)',
        letterSpacing: '1px'
      }
    },
    {
      id: 34,
      name: 'Blue Velvet',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0044aa',
        textShadow: '0 0 0 2px #00ccff, 2px 2px 8px rgba(0, 68, 170, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
        letterSpacing: '2px'
      }
    },
    {
      id: 35,
      name: 'Crystalline Blue',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0088ff',
        textShadow: '0 0 5px #0088ff, 0 0 10px #0066cc, 0 0 20px #0044aa, 3px 3px 15px rgba(0, 68, 170, 0.4)',
        letterSpacing: '2px'
      }
    },
    {
      id: 36,
      name: 'Periwinkle Dream',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        backgroundImage: 'linear-gradient(45deg, #6a7fd1 0%, #0066cc 50%, #00ccff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'drop-shadow(0 3px 6px rgba(0, 102, 204, 0.4))',
        letterSpacing: '1px'
      }
    },
    {
      id: 37,
      name: 'Azure Marble',
      style: {
        fontFamily: 'Constantia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0077cc',
        textShadow: '0 0 0 1px #5555ff, 0 0 0 2px #0066cc, 0 0 15px rgba(0, 119, 204, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2)',
        letterSpacing: '2px'
      }
    },
    {
      id: 38,
      name: 'Sapphire Glow',
      style: {
        fontFamily: 'Georgia, serif',
        fontSize: '64px',
        fontWeight: 'bold',
        color: '#0055ff',
        textShadow: '0 0 10px #0055ff, 0 0 20px #0066cc, 0 0 30px #0088ff, 0 0 40px rgba(0, 85, 255, 0.3)',
        letterSpacing: '2px'
      }
    }
  ];

  return (
    <div className="w-full bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#0c06f7' }}>
          Font & Style Samples για Hero Section
        </h2>
        <p className="text-gray-600 mb-8">
          Επιλέξτε το στυλ που σας αρέσει περισσότερο
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samples.map((sample) => (
            <div 
              key={sample.id} 
              className="rounded-lg shadow-md border-2 border-gray-100 hover:border-blue-300 transition-colors overflow-hidden cursor-pointer hover:shadow-lg"
              onClick={() => setFullscreenSample(sample.id)}
            >
              <h3 className="text-sm font-semibold text-gray-600 p-4 bg-white">{sample.name}</h3>
              
              {/* Display area with hero image background */}
              <div 
                className="relative h-[200px] flex items-start justify-start overflow-hidden"
                style={{
                  backgroundImage: `url('/hero_section.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Slight overlay for better readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
                
                {/* Text overlay - positioned at top-left quarter */}
                <div className="relative z-10 p-4 pt-6 pl-6">
                  <span style={sample.style as React.CSSProperties}>
                    Well
                  </span>
                </div>
              </div>
              
              {/* Info section */}
              <div className="p-4 bg-white">
                <details className="cursor-pointer">
                  <summary className="text-xs text-gray-500 hover:text-gray-700 font-mono">
                    CSS (ID: {sample.id})
                  </summary>
                  <pre className="text-xs bg-gray-100 p-3 mt-2 rounded overflow-x-auto text-gray-700">
                    {JSON.stringify(sample.style, null, 2)}
                  </pre>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenSample !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenSample(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setFullscreenSample(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close fullscreen"
            >
              <X size={24} className="text-gray-700" />
            </button>

            {/* Fullscreen Content */}
            {samples.find(s => s.id === fullscreenSample) && (
              <div>
                <h2 className="text-2xl font-bold p-6 bg-gray-50 border-b">
                  {samples.find(s => s.id === fullscreenSample)?.name}
                </h2>
                
                {/* Large Display */}
                <div 
                  className="relative w-full h-[70vh] flex items-start justify-start overflow-auto"
                  style={{
                    backgroundImage: `url('/hero_section.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
                  
                  <div className="relative z-10 p-12">
                    <span style={samples.find(s => s.id === fullscreenSample)?.style as React.CSSProperties}>
                      Well
                    </span>
                  </div>
                </div>

                {/* CSS Details */}
                <div className="p-6 bg-gray-50 border-t max-h-[20vh] overflow-auto">
                  <h3 className="font-semibold text-gray-700 mb-3">CSS Style (ID: {fullscreenSample})</h3>
                  <pre className="text-xs bg-white p-4 rounded border border-gray-200 overflow-x-auto text-gray-700">
                    {JSON.stringify(samples.find(s => s.id === fullscreenSample)?.style, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderFontSamples;
