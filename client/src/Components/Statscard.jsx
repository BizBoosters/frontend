import React from 'react'

const Statscard = ({ percentage, statsName, value, icon:Icon, bgImage, color}) => {
  // Utility to convert hex color to RGB for rgba() use
  function hexToRgb(hex) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }

  return (
    <div className="p-6 flex flex-col h-32 justify-between gap-2 rounded-lg transition-shadow duration-300 text-white"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    // Dynamic hover shadow style
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0px 4px 15px rgba(${hexToRgb(color)}, 0.6)`}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
    >
      <h4 className="text-lg font-semibold">{statsName}</h4>

      <div className='flex flex-row flex-wrap items-center justify-between'>
        <p className="text-2xl font-bold">{value}</p>
        <div className='bg-white rounded-full size-7 flex items-center justify-center' style={{color: color}}>
          <Icon className='h-4 w-4'/>
        </div>
      </div>
      
    </div>
  );
};

export default Statscard;