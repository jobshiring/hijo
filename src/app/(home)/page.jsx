import Footer8 from "@/components/footer/Footer8";
import Header2 from "@/components/header/Header2";
import Hero2 from "@/components/hero/Hero2";
import BrowserCategory2 from "@/components/section/BrowserCategory2";
import OurBlog1 from "@/components/section/OurBlog1";
import OurCta1 from "@/components/section/OurCta1";
import LatestJob1 from "@/components/section/LatestJob1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Home 1",
};

export default function page() {
    return (
        <>
            <div className="wrapper ovh">
                <Header2 />
                <Hero2 />
                <BrowserCategory2 />
                <LatestJob1 />
                <OurBlog1 />
                <OurCta1 />
                <Footer8 />
            </div>
        </>
    );
}
