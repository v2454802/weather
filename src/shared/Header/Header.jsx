import React from 'react';
import Select from 'react-select';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import style from './Header.module.scss';

function Header() {
  const options = [
    { value: 'city-1', label: 'Москва' },
    { value: 'city-2', label: 'Санкт-Петербург' },
    { value: 'city-3', label: 'Брянск' },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,

    }),
  };

  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id="headerLogo" />
        </div>
        <div className={style.title}>WEATHER</div>
      </div>
      <div className={style.wrapper}>
        <div className={style.theme}>
          <GlobalSvgSelector id="headerTheme" />
        </div>
        <div>
          <Select
            defaultValue={options[0]}
            styles={colourStyles}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
