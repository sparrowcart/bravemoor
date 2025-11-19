

import Layout from "@/components/layout/Layout"

// import About1 from "@/components/sections/About1"
// import Blog5 from "@/components/sections/Blog5"
// import Hero5 from "@/components/sections/Hero5"
import Herom from "@/components/sections/Herom"
import Counter1 from "@/components/sections/Counter1"
import Service5 from "@/components/sections/Service5"


// import Marquee4 from '@/components/sections/Marquee4'
import Project4 from "@/components/sections/Project4"
import Testimonial2 from "@/components/sections/Testimonial2"
// import Video from "@/components/sections/Video"
// import Skill1 from "@/components/sections/Skill1"
import Service2 from "@/components/sections/Service2"
// import Service from "@/components/sections/Service2"
// import Project2 from "@/components/sections/Project2"
// import Team1 from "@/components/sections/Team1"
// import Testimonial1 from "@/components/sections/Testimonial1"
// import Blog2 from "@/components/sections/Blog2"
import Blog1 from "@/components/sections/Blog1"
// import Partner1 from "@/components/sections/Partner1"
import Faq1 from "@/components/sections/Faq1"
import MetaTags from "@/components/MetaTags";


export default function Home5() {



    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                  <MetaTags />

                <Herom />
                <Service5/>
                <Counter1 />
                <Project4 />
                <Service2/>
                <Testimonial2 />
                <Blog1 />
                <Faq1 />
                
                {/* <Skill1/> */}
                {/* <Team1/> */}
                {/* <Faq1 /> */}
                {/* <Partner1 /> */}
                {/* <Project2/> */}
                {/* <Testimonial1/> */}

                {/* <About1 /> */}
                {/* <Video /> */}

                {/* <Marquee4 /> */}
            </Layout>
        </>
       
    )
}