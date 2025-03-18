import TextRotator from "./TextRotator";

 
const HeroTexts = () => {
 
  
  return (
    <>
      <h3 className="font-poppins text-2xl md:mt-[15vh] mt-5 max-sm:text-xl" >My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-5xl " >
        Suhail Jamal
      </h1>
        <TextRotator/>
     
    </>
  );
};
export default HeroTexts