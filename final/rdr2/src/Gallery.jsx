import './Gallery.css'

function Gallery() {
    return (
        <>
            <a href="#maincontent" className="skiptomaincontent" aria-label="tap here to the top main content">skip to
                main content</a>

            <section className="gallery__frame" id="maincontent">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </>
    );
}

export default Gallery;