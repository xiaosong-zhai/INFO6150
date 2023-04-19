import './Comments.css';
import comment1 from './comment1.JPG'
import comment2 from './comment2.JPG'
import comment3 from './comment3.JPG'

function Comments() {
    return (
        <>
            <a href="#maincontent" className="skiptomaincontent" aria-label="tap here to the top main content">skip to
                main content
            </a>

            <div className="box__panel" id="maincontent">
                <div className="box__panel--image">
                    <img src={comment1}
                         alt="a screenshot of red dead redemption 2 with 2 man"/>
                </div>
                <div className="box__panel--content">
                    <h2>
                        The Best Art
                    </h2>
                    <h3>
                        Riding through the purple sea of flowers at the Greyhound pasture, Valentine's damp muddy path,
                        the snowy mountains of Plowman's village, and the plain of the heart of the world, it was a long
                        journey that witnessed a gang struggling on the border between barbarism and civilization, but
                        ultimately unable to stop the surging tide of history. It also witnessed the internal divisions
                        and betrayals that gradually emerged over time. This is a sad and returning-to-ordinary story
                        that will make you feel powerless about that era and feel the struggle of Arthur making choices
                        at the fork in the road. "I'm scared." "There's nothing to be afraid of, Mr. Morgan."
                    </h3>
                </div>
            </div>

            <div className="box__panel" id="maincontent">
                <div className="box__panel--image">
                    <img src={comment2}
                         alt="a man named author riding a house in a city street"/>
                </div>
                <div className="box__panel--content">
                    <h2>
                        For Author
                    </h2>
                    <h3>
                        Farewell Arthur, you said seeking revenge is what fools do, but how can blood debts not be repaid in blood.
                        I wish I could have gone fishing with you more while you were still alive, and had a chance to chat with John and the gang.
                        When you dragged your weakened body to protect your brothers, facing an army of enemies, facing Dutch's ignorance and foolishness, and watched your beloved horse get shot down, the helplessness wasn't just yours, but also that of the players watching in front of the screen.
                        You always said you weren't a good person, yet you sincerely helped the unlucky souls and strangers you met along the way, doing everything in your power to assist those in need.
                        The world no longer needs outlaws like you, and in conversations with the people in the camp, you expressed your confusion more than once. But in bidding farewell to Abigail and sacrificing your life to protect John's escape, you remained true to yourself and achieved your redemption.
                        In other words, if death is the only way to obtain so-called redemption, then death is not so frightening.
                        Thank you, Rockstar, for allowing me to experience Arthur's tumultuous but meaningful life.
                        Cheers to a good man, Arthur Morgan.
                    </h3>
                </div>
            </div>

            <div className="box__panel" id="maincontent">
                <div className="box__panel--image">
                    <img src={comment3}
                         alt="a screenshot od a man named author riding a house in grassland"/>
                </div>
                <div className="box__panel--content">
                    <h2>
                        The Best Game of my Life
                    </h2>
                    <h3>
                        I have a thousand words to say, but I don't know where to start. "I don't talk about him
                        much,but I think about him" I suddenly understood John. No matter how fast you ride, you cannot
                        escape the tide of the times. No matter how big your backpack is, you cannot accommodate the
                        longing for the West. Chopping wood, feeding horses, and hunting, if you spend your life like
                        this, I don't know your name. Passing by the rain-sheltered eaves, seeing you sitting on the
                        redwood steps in front of the door, holding that strange and familiar diary in your hand, you
                        seem to be recording something, but from the constantly lifting gaze, I can see that you are
                        hand-drawing the scene before you. I wonder if I, who pass by in a hurry, will stay in this
                        moment forever. How can I express that I love all of this, but I also suffer because of it.
                        Because all of this will eventually disappear silently, just like it came.
                    </h3>
                </div>
            </div>
        </>
    );
}

export default Comments;