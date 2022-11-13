import {Link} from "react-router-dom";

function Header () {
    return (
        <header>
            <h2>Hi,</h2>
            <h2>I'm Pavel!</h2>
            <h4>Welcome to my landing page</h4>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit.
                 Quis accusamus qui soluta 
                architecto tempore eius,
                nesciunt dolor accusantium,
                laudantium corporis magni
                deleniti quia ipsa at ut
                earum expedita harum
                nemo!
            </p>
            <Link to="/about">
                <button className="btn">Read more...</button>
            </Link>
        </header>
    );
}

export default Header