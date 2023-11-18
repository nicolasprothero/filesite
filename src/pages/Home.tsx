import React, { ChangeEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import illustration from '../assets/illustration.png';
import copyIcon from '../assets/copyIcon.svg';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';

const Home: React.FC = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  }

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText('KbxHth2');
  };

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const openAboutModal = () => {
    setIsAboutModalOpen(true);
  };

  const openUploadModal = () => {
    setIsUploadModalOpen(true);
  };

  return (
    <main>
    {file ? (
        <div>
          <div className = "main">
            <div id="leftSide">
                <h2>File Uploaded!</h2>
                {/* <p className='clickTextColor'>{file.name}</p> */}
                <h3>Your file has been uploaded and can be accessed here:</h3>
                <div id='codeText' onClick={copyCodeToClipboard}>
                  <img src={copyIcon} id="copyIcon"/>
                  <h1>KbxHth2</h1>
                </div>
                <p>Write this down, as if you lose it you lose your files.</p>
            </div>
            <div id="rightSide">
              <img src={illustration} id='mainIllustration'/>
            </div>
          </div>
        </div>
      ) : (
        <div className = "main">
          <div id="leftSide">
              <h2>Safely store files and retrieve them on other devices.</h2>
              <h3>Have a file you want to transfer to another computer or smartphone?</h3>
              <Button onClick={openUploadModal} label="Upload Files"/>
              <Modal isOpen = {isUploadModalOpen}>
              <h3>Upload Your Files</h3>
              <div id="modalBackground">
                <div id="uploadContent">
                  <Button onClick={handleClick} label="Add Files"/>
                  <input type="file" ref={hiddenFileInput} style={{display: 'none'}} onChange={handleFile}/>
                  <p>or drag it here.</p>
                </div>
              </div>
              </Modal>
              <p>Already have a code?</p>
              <Link to="/Download" className="clickTextColor">Download your files.</Link>
          </div>
          <div id="rightSide">
            <img src={illustration} id='mainIllustration'/>
            <p onClick={openAboutModal} className="clickText">How does it work?</p>
            <Modal isOpen = {isAboutModalOpen}>
              <h3>How it works</h3>
              <div id="aboutBackground">
                <div id="aboutContent">
                  <div className='aboutInfo'>
                    <span className="numberSquare">1</span>
                    <p>Upload a file or even a whole folder of files.</p>
                  </div>
                  <div className='aboutInfo'>
                    <span className="numberSquare">2</span>
                    <p>Write down your unique code somewhere safe.</p>
                  </div>
                  <div className='aboutInfo'>
                    <span className="numberSquare">3</span>
                    <p>Download your file on any device using your code.</p>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;

