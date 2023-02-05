import React from 'react';
import gitLogo from './githubLogo.png';
import emailLogo from  './email-logo.png';


export default function Footer() {
    return (
        <div class="light-text center footer">
          <div>
            <img class="logo"src={gitLogo} alt="gitHub cat logo"/> <a href="https://github.com/efraincjr" className='glow-on-hover'> https://github.com/efraincjr</a>
          </div>
          <br></br>
          <div>
          <img class="logo"src={emailLogo} alt="email envelope logo"/> 
            <a href="mailto:efraincastrojr@gmail.com" className='glow-on-hover'> efraincastrojr@gmail.com</a>
          </div>
          <div class="vertical-fade"></div>
        </div>
    )
};
