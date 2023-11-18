import React, { ChangeEvent, useState } from 'react';
import illustration from '../assets/illustration.png';
import Button from '../components/Button/Button';
import InputBox from '../components/InputBox/InputBox';

const Download: React.FC = () => {

  const [code, setCode] = useState<string>('');
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);

  const takeInput = () => {
    console.log('Your code is:', code);
    setIsDownloaded(true);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  }

  return (
    <main>
      {isDownloaded ? (
        <div className = "main">
          {
            <div className = "main">
            <div id="rightSide">
              <img src={illustration} id='mainIllustration'/>
            </div>
            <div id="leftSide">
              <h2>Files Downloaded!</h2>
              <h3>Your files were downloaded.<br></br>You can now fully delete them.</h3>
              <Button onClick={takeInput} label="Delete Files"/>
              <p>Don't see your files?</p>
              <p className="clickTextColor">Try redownloading.</p>
            </div>
            </div>
          }
        </div>
      ) : (
        <div className = "main">
          <div id="rightSide">
            <img src={illustration} id='mainIllustration'/>
          </div>
          <div id="leftSide">
            <h2>Ready to download your stored files?</h2>
            <h3>Simply enter your unique code in below and have access to your stored files instantly.</h3>
            <InputBox placeholder="Enter Code" value={code} onChange={handleInputChange}/>
            <Button onClick={takeInput} label=">"/>
            <p>Enter your unique code here.</p>
          </div>
        </div>
      )}
    </main>
  )
};

export default Download;