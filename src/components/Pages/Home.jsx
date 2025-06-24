import img from '/assets/home.jpg';

export default function Home() {
    return (
        <section className="home">
            <div>
              <h1>Laleo</h1>
              <p>a collection of free resources to learn languages by yourself</p>
            </div>
            
            <img src={img} alt="illustration of a character speaking many languages"/>
        </section>
    )
}