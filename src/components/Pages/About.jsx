import img from '/assets/about.jpg';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section className="about">
            <div>
              <h1>What's the purpose of this?</h1>
              <p>Laleo is the greek word for "to speak", and it is the etymology of my name, which is pretty accurate because I never shut up. My life's mission is to chatter away in as many languages I can until the world gets dark. This website collects the various sites, apps and resources that I used and continue to use in my journey. At the moment, the languages supported are Korean and Japanese. Maybe the project will grow to include other ones as I keep learning new languages.</p>

              <p>In the <Link to="/tips">tips</Link> section you'll find all the strategies that have helped me learn a new language. They are basically my method of language learning, and they are the same no matter the language, so I hope you'll find something useful even if you're not learning Japanese or Korean.</p>
              <p>Keep chattering, and have fun!</p>
            </div>

            <img src={img} alt="illustration of character studying"/>
        </section>
    )
}