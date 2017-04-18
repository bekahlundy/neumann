import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import Avatar from 'material-ui/Avatar'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'

const styles = {
  headline: {
    color: '#B3B7B7',
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const Footer = () => {
    return (
    <div id='footer'>
      <Tabs>
        <Tab label='What is Neumann?'>
          <div className='tab'>
            <p className="copy-text-headline" style={styles.headline}>Neumann allows Turing students and alumni to search for companies that have hired graduates.
            Find company reviews from alumni, or leave your own.
            Get information on the hiring process at companies that have employed grads.</p>

              <h3 className="copy-subtext">
                Select a state from the dropdown menu to begin your search! Log in to contribute to Neumann.
              </h3>
          </div>
        </Tab>
        <Tab label='Who is Neumann?'>
          <div className='tab'>
            <p className="copy-text-headline"
            style={styles.headline}>
            John von Neumann was a Hungarian-American mathematician who worked with Alan Turing to build the first stored-program computer.
            Neumann used Turing's idea of a single machine that can be used to compute any computable sequence.
            He is considered to be one of the true fathers of computing.</p>
          </div>
        </Tab>
        <Tab label='Who are we?' >
          <div className='tab'>
            <div className="about-us-container">
              <div className="gabi">
                <a href="https://www.turing.io/alumni/gabi-procell">
                <img
                className="team" src="https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/gabrielle_procell_1024.jpg?itok=d4yChcTt"
                />
              </a>
                <p><a
                  href="https://www.turing.io/alumni/gabi-procell" className="team-member-name">Gabi Procell</a></p>
              </div>
              <div className="elijah">
                <a href="https://www.turing.io/alumni/elijah-williams">
                <img
                className="team" src="https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/Headshot_2.jpg?itok=aIK-3Hgy"
                />
                </a>
                <p><a
                  href="https://www.turing.io/alumni/elijah-williams" className="team-member-name">Elijah Williams
                </a></p>
              </div>
              <div className="devin">
                <a href="https://www.turing.io/alumni/devin-beliveau">
                <img
                className="team" src="https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/IMG_2112%20%281%29.jpg?itok=VOY6RwGz"
                />
                </a>
                <p><a
                  href="https://www.turing.io/alumni/devin-beliveau" className="team-member-name">Devin Beliveau</a></p>
              </div>
              <div className="bekah">
                <a href="https://www.turing.io/alumni/bekah-lundy"><img
                className="team" src="https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/Rebekah%20Lundy.jpg?itok=pxqR9NyJ"
                />
                </a>
                <p><a
                  href="https://www.turing.io/alumni/bekah-lundy" className="team-member-name">Bekah Lundy</a></p>
              </div>
              <div className="anna">
                <a
                href="https://www.turing.io/alumni/annastasia-psitos"><img
                className="team" src="https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/headshot%20%281%29.jpg?itok=OMn_qZas"
                />
                </a>
                <p><a
                href="https://www.turing.io/alumni/annastasia-psitos" className="team-member-name">Annastasia Psitos</a></p>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
    );
  }

  export default Footer
