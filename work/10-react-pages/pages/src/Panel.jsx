import './Panel.css';

function Panel() {
    return(
        <>
            <div className="box__top">
                <div className="box__top--image">
                    <img src="http://placekitten.com/200/200?image=3"
                         alt="a black and white cat picture with 200*200px"/>
                </div>
                <div className="box__top--content">
                    <h2>
                        They’re the boss
                    </h2>
                    <h3>
                        No matter what your cat wants (or does not want), they make sure you know it. Head scratch? They’ll stick their head right under your hand. Hungry? They’ll meow loudly while standing over an empty food dish until you pause Netflix and come to see what’s up.<br/>
                        Ready to play at 4 am? Zooooooooom! Your sleep schedule doesn’t matter to them. Cats are some of the most independent creatures, and they have us humans well-trained to take care of their every desire.<br/>
                        Bugs? Rodents? Flying feather wand? Your cat is always on pawtrol, looking out to make sure your house is safe from anything that might be dangerous (like that sock you left hanging off the side of the hamper. Got it!). Hopefully, they won’t share their late night prey with you. No one should experience that before coffee.
                    </h3>
                    <p> cite:
                        <cite>https://www.cathealthy.ca/blog/all-cats/10-reasons-cats-rule-the-world-or-at-least-our-hearts/</cite>
                    </p>
                </div>
            </div>
        </>
    );
}
export default Panel;