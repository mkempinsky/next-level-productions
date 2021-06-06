import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Gallery from '../Gallery';

const images = [
    '/galleryImages/gallery-01.jpg',
    '/galleryImages/gallery-02.jpg',
    '/galleryImages/gallery-03.jpg',
    '/galleryImages/gallery-04.jpg',
    '/galleryImages/gallery-05.jpg',
    '/galleryImages/gallery-06.jpg',
    '/galleryImages/gallery-07.jpg',
    '/galleryImages/gallery-08.jpg',
    '/galleryImages/gallery-09.jpg',
    '/galleryImages/gallery-10.jpg',
];

const SectionGallery = (props) => {
    return (
        <section id="section-gallery">
            <Container>
                <SectionHeader title="Gallery" subtitle="Take A Look Inside!" />
                <Gallery images={images} />
            </Container>
            <style jsx>
                {`
                    #section-gallery {
                        background: var(--gray-100);
                    }
                `}
            </style>
        </section>
    );
};
export default SectionGallery;
