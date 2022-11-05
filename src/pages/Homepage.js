/*import logo from './logo.svg';*/
import './Homepage.css';
import { Tooltip, Box } from '@mantine/core';
import {BrowserRouter, Routes, Route}from 'react-router-dom'

/*import Contact from './pages/Contact'; */
import Footer from './Footer';

function Homepage() {
    return(
    <div class="main">
        <div className="containerr">
            <div  className="main_section">
            <div className="content">
                <div id="profile-section">
                <img src="profile_picture2.jpeg" alt="profile" id="profile__img"></img>
                <div className="twitter">
                    <p id="twitter"> Wangui Resper</p>
                </div>
                <p id="slack">Risperndungu</p>
                <div className="avatar">
                    <div className="avatar_content">
                    <div className="share">
                        <img id='share_svg' src='share.svg'></img>
                    </div>
                    <div className="share2">
                        <img id='share2_svg' src='share2.svg'></img>
                    </div>
                    </div>
                </div>
                </div>
                <div className="Link-section">
                <div className="links">
                    <Tooltip.Floating label="My twitter handle" color="gray">
                        <a target="_blank" href="https://www.twitter.com/WanguiResper" id="btn__twitter"><span className="btn-twitter">Twitter link</span></a>
                    
                    </Tooltip.Floating>
                </div>
                <div className="links">
                    <Tooltip.Floating label="Welcome to Zuri team" color="gray">
                        <a target="_blank" href="https://training.zuri.team/" id="btn__zuri"><span class="btn-zuri">Zuri Team</span></a>
                    </Tooltip.Floating>
                </div>
                <div className="links">
                    <Tooltip.Floating label="This where to find boooks on design and coding" color="gray">
                        <a target="_blank" href="http://books.zuri.team" id="books"><span class="btn-books">Zuri Books</span></a>
                    </Tooltip.Floating>
                </div>
                <div className="links">
                    <Tooltip.Floating multiline width={400} label="If you're thinking of embarking on your journey in Python,this is the book for you!You cannot afford to miss this!Grab yours today!" color="gray">
                        <a target="_blank" href="https://books.zuri.team/python-for-beginners?ref_id=<Risper Ndungu>" id="book__python"><span class="btn-python">Python Books</span></a>
                    </Tooltip.Floating>
                </div>
                <div className="links">
                    <Tooltip.Floating  multiline width={300} label="Need background checks done on your coders?Here is the place for you! " color="gray">
                        <a target="_blank" href="https://background.zuri.team " id="pitch"><span class="btn-pitch">Background Check for coders</span></a>
                    </Tooltip.Floating>
                </div>
                <div className="links">
                    <Tooltip.Floating multiline width={400} label="Tested and Proven! This is hands on the best design book you could ever find! And what's even better? Here at Zuri we offer it for free!Grab yours today!" color="gray">
                        <a target="_blank" href="https://books.zuri.team/design-rules " id="book__design"><span class="btn-design">Design books</span></a>
                    </Tooltip.Floating>
                </div>
                <div className="links">
                    <Tooltip.Floating multiline width={400} label="Contact me here!!" color="gray">
                        <a href="/contact" id="contact"><span class="btn-contact">Contact Me</span></a>
                    </Tooltip.Floating>
                </div>
                </div>
            </div>
            </div>
            <div className='social-section'>
            <div className='container-social'>
                <div className='content-social'>
                <div className='social-icons'>
                    <div className='slack'>
                    <a href="https://www.slack.com" target="_blank">
                        <img src="slack.svg"></img>
                    </a>
                    </div>
                    <div className='github'>
                    <a href="https://www.github.com"  target="_blank">
                    <img src="github.svg"></img>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
  }

  export default Homepage;