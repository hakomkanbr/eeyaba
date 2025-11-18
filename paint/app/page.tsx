import AboutUs from '@/components/home/about-us';
import Banner from '@/components/home/banner';
import Blog from '@/components/home/blog';
import Contact from '@/components/home/Contact';
import Gallery from '@/components/home/gallary';
import Services from '@/components/home/services';

export default async function Home() {
    return (
        <>
            <Banner />
            <AboutUs />
            <Services />
            <Gallery />
            <Blog />
            <Contact />
        </>
    )
}
