import WelcomeCard from "./WelcomeCard"

export default function Welcome(props) {
    return (
      <div className="container-fluid py-4">
        <h2>Hi, {props.userName}</h2>
        <div className="card section">
          <div className="d-flex justify-content-between py-3 px-4">
            <WelcomeCard cardClass="card col-4 mx-2" title="Welcome to Hire4U" desc="As a premium employer, you have full access to all the premium features of this portal. Please feel navigate through various components of this portal to get maximum benefit. Do not hesitate to contact us if you have any queries."/>
            <WelcomeCard cardClass="card col mx-2 text-center bg-green" title="Hire Talent" desc="Hire from the pool of talents from all over the world." buttonClass="btn btn-dark" link="Browse Talent"/>
            <WelcomeCard cardClass="card col mx-2 text-center bg-yellow" title="Refer and Earn" desc="Earn discounts on your next hire by referring to your fellows." buttonClass="btn btn-dark" link="Earn Today"/>
            <WelcomeCard cardClass="card col mx-2 text-center bg-blue" title="Join Employer's Club" desc="Get more benefits by joining a vibrant community of employers." buttonClass="btn btn-dark" link="Join Club"/>
          </div>
        </div>
      </div>
    );
}