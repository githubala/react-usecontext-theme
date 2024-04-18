import React from 'react';
import { ThemeProvider } from './themes/ThemeContext';
import ThemeToggler from './themes/ThemeToggler';
import SubHeader from './SubHeader';

  const Header =()=>{
    return(
        <ThemeProvider>
        <div  className="headerBg">this is the header
            <div>this is the also header</div>
            <SubHeader/>
        </div>
        <ThemeToggler/>
        </ThemeProvider>
    )
}

export default Header;