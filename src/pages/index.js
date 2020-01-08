import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic11 from '../assets/fullsize/1.jpg';
import pic12 from '../assets/fullsize/2.jpg';
import pic13 from '../assets/fullsize/3.jpg';
import pic14 from '../assets/fullsize/4.jpg';
// import pic15 from '../assets/fullsize/5.jpg';
// import pic16 from '../assets/fullsize/6.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>Presidential Initiative</h2>
        <h3>for Artificial Intelligence & Computing (PIAIC)</h3>
        <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
        <center>Learn More</center>
        </a>
      </Scroll>
    </section>

    {/* <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      <h3>Available</h3>
                    </div>
                    <div className="project-name">
                      Artificial intelligence
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/fullsize/2.png" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      <h3>Available</h3>
                    </div>
                    <div className="project-name">
                      Cloud Native
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/fullsize/3.png" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      <h3>Available</h3>
                    </div>
                    <div className="project-name">
                      Blockchain
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assests/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      <h3>Available</h3>
                    </div>
                    <div className="project-name">
                      Internet of Things
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assests/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      <h3>Coming Soon</h3>
                    </div>
                    <div className="project-name">
                     SDN/NFV for 5G 
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="assets/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      <h3>Coming Soon</h3>
                    </div>
                    <div className="project-name">
                      Augmented Riality
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section> */}


    {/* <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Arcu aliquet vel lobortis ata nisl
            <br />
            eget augue amet aliquet nisl cep donec
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section> */}

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <p></p>
          <h2>
            President launches the PIAIC website
          </h2>
          <p>
            President Dr. Arif Alvi launching thae official website of PIAIC on December 9, 2018.From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University),President Dr. Arif Alvi, Mr. Suleman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Moulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Walfare Trust).
          </p>
        </div>
      </section>
      
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            First meeting with thae president
          </h2>
          <p>
            First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (President Saylani Welfare International Trust), Mr. Muhammad Ghazzai (COO Saylani Welfare International Trust).
          </p>
        </div>
      </section>
      
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Meeting with chief secretary sindh
          </h2>
          <p>
            Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah o December 28th, where assured the PIAIC management team of his full support for national caused and offered space at all public universities in Sindh.
          </p>
        </div>
      </section>
    </section>
    
    <p></p>
    <h2><center>Available Programs</center></h2>

    <section id="two" className="wrapper alt style2">
      
      <section className="spotlight">
        <div className="image">
            <img src={pic11} alt="" />
        </div>
        <div className="content">
          <p></p>
          <h2>
          Artificial Intelligence
          </h2>
          <p>
          Artificial Intelligence (AI) is a theory and development of computer systems able to perform tasks normally requiring human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.
           
          A one year Artificial Intelligence program desing for absolute beginners.
          Getting Pakistan ready for new era of computing enable by the rise of AI.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic12} alt="" />
        </div>
        <div className="content">
          <p></p>
          <h2>
          Cloud Native and Mobile Web Computing Specialist
          </h2>
          <p>
           Cloud-native Computing technologies are used to develop applications built with services packaged in containers, deployed as microservices and managed on elastic infrastructure through agile DevOps processes and continuous delivery workflows.
           A one year Cloud Computing program desing for absolute beginners.
           Getting Pakistan ready for new era of Microservises and Multi-Cloud Native computing.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic13} alt="" />
        </div>
        <div className="content">
          <p></p>
          <h2>
          BLOCKCHAIN SPECIALIST
          </h2>
          <p>
          “Blocks” on the blockchain are made up of digital pieces of information. Blockchain is a system in which a record of transactions made in bitcoin or another cryptocurrency are maintained across several computers that are linked in a peer-to-peer network.
          A one year Blockchain program desing for absolute beginners.
          Getting Pakistan ready for new era of Blockchain, Fintech and smart contracts.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
            <img src={pic14} alt="" />
        </div>
        <div className="content">
          <p></p>
          <h2>
           Internet of Things and AI Specialist
          </h2>
          <p>
           A system of interrelated computing devices, machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.
           A fifteen months IOT & AI program desing for absolute beginners.
           Getting Pakistan ready for new era of Internet of Things and AI.
          </p>
        </div>
      </section>
    </section>

    {/* <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
            <img src={pic14} alt="" />
        </div>
        <div className="content">
          <h2>
            President launches the PIAIC website
          </h2>
          <p>
            President Dr. Arif Alvi launching thae official website of PIAIC on December 9, 2018.From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University),President Dr. Arif Alvi, Mr. Suleman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Moulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Walfare Trust).
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic15} alt="" />
        </div>
        <div className="content">
          <h2>
            First meeting with thae president
          </h2>
          <p>
            First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (President Saylani Welfare International Trust), Mr. Muhammad Ghazzai (COO Saylani Welfare International Trust).
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic16} alt="" />
        </div>
        <div className="content">
          <h2>
            Meeting with chief secretary sindh
          </h2>
          <p>
            Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah o December 28th, where assured the PIAIC management team of his full support for national caused and offered space at all public universities in Sindh.
          </p>
        </div>
      </section>
    </section> */}
    {/* <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Available Programs</h2>
      </div>
    </section>     */}
        {/* //   <p>
            
        //   </p>
        // </header>
        // <ul className="features">
        //   <li className="icon fa-paper-plane">
        //     <h2>Artificial Intelligence</h2>
        //     <p>
        //     A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
        //     GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.
        //     </p>
        //   </li>
        //   <li className="icon solid fa-laptop">
        //     <h3>Artificial Intelligence</h3>
        //     <p>
        //       Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
        //       tincidunt nullam amet leo Aenean ligula consequat consequat.
        //     </p>
        //   </li>
        //   <li className="icon solid fa-code">
        //     <h3>Mus Scelerisque</h3>
        //     <p>
        //       Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
        //       tincidunt nullam amet leo Aenean ligula consequat consequat.
        //     </p>
        //   </li>
        //   <li className="icon solid fa-headphones-alt">
        //     <h3>Mauris Imperdiet</h3>
        //     <p>
        //       Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
        //       tincidunt nullam amet leo Aenean ligula consequat consequat.
        //     </p>
        //   </li>
        //   <li className="icon fa-heart">
        //     <h3>Aenean Primis</h3>
        //     <p>
        //       Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
        //       tincidunt nullam amet leo Aenean ligula consequat consequat.
        //     </p>
        //   </li>
        //   <li className="icon fa-flag">
        //     <h3>Tortor Ut</h3>
        //     <p>
        //       Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
        //       tincidunt nullam amet leo Aenean ligula consequat consequat.
        //     </p>
        //   </li>
        // </ul> */}
       

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>PIAIC</h2>
          <p>
          The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="https://portal.piaic.org/" target= "_blank" className="button fit ">
              HOW IT WORKS
            </a>
          </li>
          <li>
            <a href="https://www.piaic.org/howitworks" target= "_blank" className="button fit primary">
              APPLY
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
