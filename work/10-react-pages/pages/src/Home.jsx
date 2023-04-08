import './Home.css';
function Home() {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <h2 className="card__title">American Shorthair</h2>
                    <img className="card__pic" src="http://placekitten.com/g/180/180"
                         alt="a picture of American Shorthair cat with 180*180"/>
                    <p className="cars__text">The American Shorthair (ASH) is a breed of domestic cat believed to be
                        descended from European cats brought to North America by early settlers to protect valuable
                        cargo from mice and rats According to the Cat Fanciers' Association.</p>
                    <a className="card__link" href="#">Read more about ASH</a>
                </div>
                <div className="card">
                    <h2 className="card__title">British Shorthair</h2>
                    <img className="card__pic" src="http://placekitten.com/180/180/"
                         alt="a picture of British Shorthair cat with 180*180"/>
                    <p className="card__text">The British Shorthair is the pedigreed version of the traditional British
                        domestic cat, with a distinctively stocky body, dense coat, and broad face.The most familiar
                        colour variant is the "British Blue".</p>
                    <a className="card__link" href="#">Read more about BSH</a>
                </div>
                <div className="card">
                    <h2 className="card__title">Ragdoll</h2>
                    <img className="card__pic" src="http://placekitten.com/g/180/181"
                         alt="a picture of Ragdoll cat with 180*181"/>
                    <p className="card__text">The Ragdoll is a breed of cat with a distinct color coat and blue eyes.
                        Its morphology is large and weighty, and it has a semi-long and silky soft coat. American
                        breeder Ann Baker developed Ragdolls in the 1960s.</p>
                    <a className="card__link" href="#">Read more about Ragdoll</a>
                </div>
            </div>
        </>
    );
}
export default Home;