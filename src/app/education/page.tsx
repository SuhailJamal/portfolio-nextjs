import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            August 2022 - 2025
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Science Information Technology, <br /> Lovely
              Professional University Phagwara, Punjab
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I am currently pursuing a Bachelor of Science in Information
              Technology with a specialization in Data Science from Lovely
              Professional University. The program has provided me with a
              well-rounded education, covering both theoretical foundations and
              practical applications of computer science. While my academic
              focus has been on Data Science, I have also independently learned
              React, Next.js, Node.js, and Express.js, allowing me to build
              scalable full-stack applications. Additionally, I have hands-on
              experience in IoT, having worked on projects that integrate
              hardware and software solutions. My expertise spans full-stack web
              development, data science, and IoT, enabling me to build
              data-driven applications, develop machine learning models, and
              create intelligent, connected systems.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
