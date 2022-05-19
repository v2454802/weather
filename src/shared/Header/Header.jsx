import React from 'react';
import Select from 'react-select';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import { Theme } from '../../changeTheme/context/ThemeContext';
import useTheme from '../../changeTheme/hooks/useTheme';
import style from './Header.module.scss';

function Header() {
  const theme = useTheme();

  const options = [
    { value: 'city-1', label: 'Москва' },
    { value: 'city-2', label: 'Санкт-Петербург' },
    { value: 'city-3', label: 'Брянск' },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  }

  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id="headerLogo" />
        </div>
        <div className={style.title}>ПОГОДА</div>
      </div>
      <div className={style.wrapper}>
        <div
          onClick={() => changeTheme()}
          className={style.theme}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
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
