import React from 'react';
import { Award, Globe, Rocket, Target, CheckCircle } from 'lucide-react';
import './about_us.css';

const About = () => {
  return (
    <div className="about-container">
        <div className="about-header">
          <h1>About QAirline</h1>
          <p>Transforming Global Connectivity, One Flight at a Time</p>
        </div>

      <section className="story">
        <div className="content">
          <h2>Our Remarkable Journey</h2>
          <div className="line">
            <div className="point">
              <span className="date">2005</span>
              <h3>Visionary Beginnings</h3>
              <p>SkyVoyage Airlines emerged from a bold vision to revolutionize air travel in Southeast Asia. Founded by a group of aviation enthusiasts and entrepreneurial leaders, we started with just two aircraft and an audacious dream of connecting people across vast distances. Our initial fleet may have been small, but our ambition was immense – to create an airline that prioritizes passenger experience, safety, and technological innovation.</p>
            </div>
            <div className="point">
              <span className="date">2012</span>
              <h3>Expansion and Global Reach</h3>
              <p>Seven years after our inception, we marked a significant milestone by expanding our fleet and launching our first international routes. This period of growth was not just about adding more aircraft, but about building a robust network that bridged cultures, economies, and communities. We invested heavily in training our personnel, upgrading our technological infrastructure, and developing strategic partnerships with global airlines to enhance our connectivity and service quality.</p>
            </div>
            <div className="point">
              <span className="date">2020</span>
              <h3>Digital Transformation</h3>
              <p>The global pandemic became a catalyst for our most ambitious digital transformation. While many airlines struggled, we saw an opportunity to reimagine air travel. We integrated cutting-edge technologies like AI-driven customer service, contactless check-in processes, advanced health screening technologies, and personalized travel experiences. Our commitment to innovation ensured not just survival, but a leap forward in how modern aviation could serve travelers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="goals">
        <h2>Our Strategic Vision</h2>
        <div className="list">
          <div className="item">
            <Target className="mark" />
            <h3>Ambitious Goals</h3>
            <p>Our primary objective is to establish SkyVoyage Airlines as the premier aviation brand in Southeast Asia. We are dedicated to creating an unparalleled flying experience that combines cutting-edge technology, exceptional safety standards, and genuine human connection. By 2030, we aim to expand our route network to cover over 50 international destinations, introduce a fleet of next-generation, environmentally sustainable aircraft, and set new industry benchmarks for passenger comfort and service excellence.</p>
          </div>
          <div className="item">
            <Rocket className="mark" />
            <h3>Meaningful Mission</h3>
            <p>Beyond transportation, we see ourselves as connectors of human potential. Our mission transcends mere travel – we aim to bridge cultures, facilitate business opportunities, and create meaningful interactions that transform lives. Every flight is an opportunity to break down geographical barriers, support economic growth, and contribute to global understanding. We invest in training programs, support local communities in our operational regions, and maintain a commitment to sustainable and responsible aviation practices.</p>
          </div>
          <div className="item">
            <Globe className="mark" />
            <h3>Future Vision</h3>
            <p>Looking ahead, we envision SkyVoyage Airlines as a technology-driven, customer-centric organization that leads the aviation industry's evolution. We are actively exploring and investing in emerging technologies such as artificial intelligence for predictive maintenance, machine learning for personalized customer experiences, and exploring sustainable aviation fuel alternatives. Our vision extends beyond profit – we want to be a catalyst for positive change in the global transportation ecosystem, setting new standards for efficiency, sustainability, and human-centric service.</p>
          </div>
        </div>
      </section>

      <section className="promises">
        <h2>Our Foundational Commitments</h2>
        <div className="list">
          <div className="item">
            <CheckCircle className="mark" />
            <h4>Uncompromising Safety</h4>
            <p>Safety is not just a protocol for us – it's our fundamental promise. We exceed international aviation safety standards through continuous training, state-of-the-art aircraft maintenance, rigorous staff screening, and advanced technological monitoring. Our safety team comprises international experts who continuously update our procedures, ensuring that every aspect of our operation meets and often surpasses global benchmarks. We invest millions annually in safety research, training, and technological upgrades.</p>
          </div>
          <div className="item">
            <Award className="mark" />
            <h4>Service Excellence</h4>
            <p>Our service philosophy goes beyond traditional hospitality. We believe in creating personalized, memorable experiences for every passenger. Our staff undergo extensive training not just in technical skills, but in emotional intelligence, cultural sensitivity, and proactive problem-solving. From our ground staff to our flight crew, each team member is empowered to go above and beyond, turning each journey into a unique, comfortable, and delightful experience that reflects our commitment to exceptional customer care.</p>
          </div>
          <div className="item">
            <Rocket className="mark" />
            <h4>Technological Leadership</h4>
            <p>We are relentless in our pursuit of technological innovation. Our R&D team continuously explores emerging technologies to enhance every aspect of air travel. This includes developing AI-powered booking systems, implementing blockchain for secure transactions, utilizing big data for predictive customer service, and exploring autonomous ground operations. We collaborate with tech startups, research institutions, and global technology leaders to stay at the forefront of aviation technology, ensuring our passengers always experience the future of travel.</p>
          </div>
        </div>
      </section>

      <section className="call">
        <div className="box">
          <h2>Your Journey Begins Here</h2>
          <p>Experience the future of air travel. Discover comfort, innovation, and global connectivity with SkyVoyage Airlines.</p>
          <button className="btn">Explore Destinations</button>
        </div>
      </section>
    </div>
  );
};

export default About;