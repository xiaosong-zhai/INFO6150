import './Home.css';

function Home() {
    return (
        <>
            <a href="#maincontent" className="skiptomaincontent" aria-label="tap here to the top main content">skip to
                main content</a>
            <div className="cards" id="maincontent">
                <div className="card1">
                    <div className="card1__content">
                        <h2 className="card__title">Loyal</h2>
                        <p className="card__text">
                            "You've been following the wrong stars all your life, and your loyalty is both a blessing and a curse."<br/>
                            "I gave you all I had."---Arthur Morgan <br/>
                        </p>
                        <a className="card__link" href="http://129.146.74.103:7791/i/2023/04/18/643e57b4d203b.jpg" target = '_blank'>Show Picture</a>
                    </div>
                </div>
                <div className="card2">
                    <div className="card2__content">
                        <h2 className="card__title">Ambivalent</h2>
                        <p className="card__text">
                            "Blue heron leaves the northern sky, Trust the journey to new highs."<br/>
                            "The price of freedom is high...it always has been."<br/>
                        </p>
                        <a className="card__link" href="http://129.146.74.103:7791/i/2023/04/18/643e57cf46946.jpg" target = '_blank'>Show Picture</a>
                    </div>
                </div>
                <div className="card3">
                    <div className="card3__content">
                        <h2 className="card__title">Redemption</h2>
                        <p className="card__text">
                            "No matter when I meet you, you are always helping others, with a smile on your face."<br/>
                            "I don't talk about him much...but I think about him"<br/>
                        </p>
                        <a className="card__link" href="http://129.146.74.103:7791/i/2023/04/18/643e57eb46b31.jpg" target = '_blank'>Show Picture</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;