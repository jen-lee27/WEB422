import TalentCard from "./TalentCard"

export default function Talent() {
    const names = ["Steve Jobs", "Bill Gates", "Jeff Bezos", "Elon Musk", "Warren Buffet"];
    const jobs = ["Data Scientist", "ML Engineer", "Front End Developer", "Java Developer", "Database Admin"];
    const rates = ["$100 - 120/hr", "$150 - 175/hr", "$80 - 90/hr", "$110 - 120/hr", "$70 - 80/hr"];
    const images = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg"];
    
    return (
      <div className="container-fluid py-4">
        <h3>Trending Talents</h3>
        <div className="section d-flex justify-content-around">
          {names.map((name, i) => {
            return <TalentCard key={i} imgSrc={images[i]} name={name} role={jobs[i]} pay={rates[i]}/>
          })}
        </div>
      </div>
    );
}