import Lottie from "lottie-react";
import aboutAnimation from "../../assets/animation/about.json";

const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8 border-b-2 max-w-xs mx-auto border-[#e69f9a] pb-6">
        About Us
      </h1>
      <div className="container max-w-2xl flex flex-col md:flex-row mx-auto py-5">
        <div>
          <Lottie
            className="w-72"
            animationData={aboutAnimation}
          ></Lottie>
        </div>
        <div className="mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            <span className=" text-red-300 text-6xl mr-2">At</span> TaskSync
            Hub, we believe that effective task management is the cornerstone of
            productivity and success. Our task management platform is
            meticulously crafted to offer individuals, teams, and businesses a
            seamless solution to organize tasks, collaborate efficiently, and
            achieve remarkable results.
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          <span className=" text-red-300 text-6xl">Our</span> journey began with
          a simple idea: to create a user-friendly, feature-rich task management
          tool that adapts to the diverse needs of our users. With a focus on
          innovation and usability, we continue to evolve, introducing new
          features and enhancements to meet the ever-changing demands of modern
          work environments.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          <span className=" text-red-300 text-6xl">Driven</span> by a passion
          for empowering our users, we are dedicated to providing a platform
          that simplifies complex workflows, fosters effective communication,
          and promotes a culture of productivity. Our team is committed to
          supporting you on your journey to achieving your goals, one task at a
          time.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Thank you for choosing TaskSync Hub. We are honored to be a part of
          your success story.
        </p>
      </div>
    </div>
  );
};

export default About;
