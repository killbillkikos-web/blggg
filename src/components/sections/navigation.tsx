"use client";
import React from 'react';

const Navigation = () => {
  // Navigation tabs data from content and HTML structure
  const tabs = [
    { label: "Articles", href: "/category/articles", active: false },
    { label: "Healthy Life Style", href: "/category/healthy-life-style", active: false },
    { label: "Συνταγές Δύναμης", href: "/category/syntagés-dýnamis", active: false },
    { label: "Sensitiv Imago", href: "/p/sensitiv-imago", active: false },
  ];

  return (
    <div className="tabs-outer relative w-full">
      {/* Decorative cap-top as seen in HTML structure */}
      <div className="tabs-cap-top h-0 absolute top-0 left-0 right-0 overflow-hidden" />
      
      <div className="fauxborder-left tabs-fauxborder-left">
        <div className="fauxborder-right tabs-fauxborder-right"></div>
        <div className="region-inner tabs-inner">
          <div className="tabs section" id="crosscol">
            <div className="widget PageList" id="PageList1">
              {/* Screen reader only heading as it's an h2 in structure but hidden/sized small in screenshots */}
              <h2 className="sr-only">SENSITIV IMAGO</h2>
              
              <div 
                className="widget-content"
                style={{
                  backgroundColor: 'transparent',
                  padding: '0'
                }}
              >
                <ul 
                  className="flex flex-wrap list-none m-0 p-0 border-t border-[#DDDDDD]"
                    style={{
                    backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d22d1fc9-067a-4c79-9954-b33dd595b3db-well-being-blogspot-com/assets/images/tabs_gradient_light-20.png")',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'left bottom',
                    backgroundColor: '#F9F9F9'
                  }}
                >
                  {tabs.map((tab, index) => (
                    <li 
                      key={index} 
                      className={`relative border-r border-[#CCCCCC] ${tab.active ? 'selected shadow-sm' : ''}`}
                      style={{
                        backgroundColor: tab.active ? '#888888' : 'transparent',
                      }}
                    >
                      <a 
                        href={tab.href}
                        className={`block px-4 py-[10px] text-[13px] font-bold font-sans no-underline hover:underline decoration-white cursor-pointer transition-colors duration-200`}
                        style={{
                          color: tab.active ? '#FFFFFF' : '#666666',
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          lineHeight: '1.2'
                        }}
                      >
                        {tab.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="clear-both"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative cap-bottom as seen in HTML structure */}
      <div className="tabs-cap-bottom h-0 absolute bottom-0 left-0 right-0 overflow-hidden" />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .tabs-inner .widget li.selected a {
          color: #ffffff !important;
        }
        .tabs-inner .widget li a:hover {
          background-color: #888888;
          color: #ffffff !important;
          text-decoration: none !important;
        }
      `}} />
    </div>
  );
};

export default Navigation;