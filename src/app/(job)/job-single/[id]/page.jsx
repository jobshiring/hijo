import Breadcumb10 from "@/components/breadcumb/Breadcumb10";
import Breadcumb13 from "@/components/breadcumb/Breadcumb13";
import Header2 from "@/components/header/Header2";
import JobDetail1 from "@/components/section/JobDetail1";
import TabSection1 from "@/components/section/TabSection1";
import Footer8 from "@/components/footer/Footer8";

export const metadata = {
    title: "This Job is Hiring Now",
};

export default function page() {
    return (
        <>
            <Header2 />
            <TabSection1 />
            <Breadcumb10 path={["Home", "Jobs", "Listing"]} />
            <Breadcumb13 />
            <JobDetail1 />
            <Footer8 />
        </>
    );
}
