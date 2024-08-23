import React, { useEffect } from 'react';

function Dark() {
  
  let darkmode = localStorage.getItem('darkmode');

  
  const enableDark = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
  };

  const disableDark = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
  };


  useEffect(() => {
    if (darkmode === 'active') enableDark();

    const themeSwitch = document.getElementById('theme-switch');


    themeSwitch.addEventListener('click', () => {
      darkmode = localStorage.getItem('darkmode');
      darkmode !== 'active' ? enableDark() : disableDark();
    });

    return () => {
      themeSwitch.removeEventListener('click', () => {});
    };
  }, [darkmode]);

  return (
    <div className="dark-mode">
      <button className="toggle" id="theme-switch">Switch Theme</button>
    </div>
  );
}

export default Dark;

