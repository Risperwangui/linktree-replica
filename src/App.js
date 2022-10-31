import logo from './logo.svg';
import './App.css';
import { Tooltip, Box } from '@mantine/core';
 

function App() {
  return (
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

   
    <div class="main">
      <div className="container">
        <div  className="main_section">
          <div className="content">
            <div id="profile-section">
              <img src="profile_picture2.jpeg" alt="profile" id="profile__img"></img>
              <div className="twitter">
                <p id="twitter"> Wangui Resper</p>
              </div>
              <p id="slack"> Risper Ndungu </p>
              <div className="avatar">
                <div className="avatar_content">
                  <div className="share">
                    <img id='share_svg' src='share.svg'></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="Link-section">
              <div className="links">
                <Tooltip.Floating label="My twitter handle" color="gray">
                  <div className="link-frame">
                    <a target="_blank" href="https://www.twitter.com/WanguiResper" id="btn__twitter">Twitter link</a>
                  </div>
                </Tooltip.Floating>
              </div>
              <div className="links">
                <Tooltip.Floating label="Welcome to Zuri team" color="gray">
                  <div className="link-frame">
                    <a target="_blank" href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
                  </div>
                </Tooltip.Floating>
              </div>
              <div className="links">
                <Tooltip.Floating label="This where to find boooks on design and coding" color="gray">
                  <div className="link-frame">
                    <a target="_blank" href="http://books.zuri.team" id="books">Zuri Books</a>
                  </div>
                </Tooltip.Floating>
              </div>
              <div className="links">
                <Tooltip.Floating multiline width={400} label="If you're thinking of embarking on your journey in Python,this is the book for you!You cannot afford to miss this!Grab yours today!" color="gray">
                  <div className="link-frame">
                    <a target="_blank" href="https://books.zuri.team/python-for-beginners?ref_id=<Risper Ndungu>" id="book__python">Python Books</a>
                  </div>
                </Tooltip.Floating>
              </div>
              <div className="links">
                <Tooltip.Floating  multiline width={300} label="Need background checks done on your coders?Here is the place for you! " color="gray">
                  <div className="link-frame">
                    <a target="_blank" href="https://background.zuri.team " id="pitch">Background Check for coders</a>
                  </div>
                </Tooltip.Floating>
              </div>
              <div className="links">
                <Tooltip.Floating multiline width={400} label="Tested and Proven! This is hands on the best design book you could ever find! And what's even better? Here at Zuri we offer it for free!Grab yours today!" color="gray">
                  <div className="link-frame">
                    <a target="_blank" href="https://books.zuri.team/design-rules " id="book__design">Design books</a>
                  </div>
                </Tooltip.Floating>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App;
