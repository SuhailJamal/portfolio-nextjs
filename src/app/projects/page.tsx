import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Funder - Empowering Crowdfunding for Meaningful Causes",
      description: `Funder is a seamless crowdfunding platform where individuals can raise money for causes that matter. 
         Users can create campaigns,  and receive donations (dummy). 
         Funder connects those in need with supporters worldwide.`,
      tags: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS"],
      link: "https://funder-platform.vercel.app/",
    },
    {
      title: "News MERN - A Dynamic Full-Stack News Platform",
      description: `News MERN is a full-stack news platform that delivers real-time news. 
     Users can explore various news topics such as politics, entertainment etc. while staying informed about global events. `,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      link: "https://newshub-app.vercel.app/",
    },
    {
      title: "House Price Prediction Model",
      description: `This machine learning model predicts house prices based on various factors such as location, square footage, and amenities. 
         Leveraging machine learning techniques, the model provides accurate price estimations to assist buyers and sellers 
         in making informed real estate decisions.`,
      tags: ["Python", "Scikit-Learn", "Regression", "Data Science"],
      link: "https://github.com/yourusername/house-price-prediction",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love building innovative projects. Here, you will find a curated
            collection of my work in Web Development and Data Science. Each
            project reflects my passion for problem-solving, creativity, and
            continuous learning. Explore how I integrate technology to build
            impactful solutions.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
