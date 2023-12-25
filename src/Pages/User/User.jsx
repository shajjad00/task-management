const User = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl border-b-2 border-[#e69f9a] max-w-lg mx-auto text-gray-700 font-bold text-center pb-7 mb-8 w-fit">
        Who Uses Our Task Management Platform?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 border-2 border-[#e69f9a]">
          <h2 className="text-2xl text-[#e69f9a] font-semibold mb-4">
            Entrepreneurs & Startups
          </h2>
          <p className=" text-gray-700">
            Entrepreneurs juggling multiple tasks, projects, and deadlines rely
            on our platform to streamline their workflow, prioritize tasks, and
            efficiently manage their ventures.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 border-2 border-[#e69f9a]">
          <h2 className="text-2xl font-semibold mb-4 text-[#e69f9a]">
            Small Business Owners
          </h2>
          <p className=" text-gray-700">
            Small business owners find our platform indispensable for organizing
            team tasks, tracking progress, and ensuring every aspect of their
            business operates smoothly.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 border-2 border-[#e69f9a]">
          <h2 className="text-2xl font-semibold mb-4 text-[#e69f9a]">
            Project Managers & Teams
          </h2>
          <p className=" text-gray-700">
            Project managers and teams benefit from our collaborative features,
            allowing seamless communication, task delegation, and effective
            project coordination.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 border-2 border-[#e69f9a]">
          <h2 className="text-2xl font-semibold mb-4 text-[#e69f9a]">
            Students & Educators
          </h2>
          <p className=" text-gray-700">
            Students and educators use our platform to manage study schedules,
            group projects, assignments, and educational tasks efficiently.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 border-2 border-[#e69f9a]">
          <h2 className="text-2xl font-semibold mb-4 text-[#e69f9a]">
            Remote Workers & Professionals
          </h2>
          <p className=" text-gray-700">
            Remote workers and professionals rely on our platform to stay
            organized, manage tasks across different time zones, and maintain
            productivity while working remotely.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 border-2 border-[#e69f9a]">
          <h2 className="text-2xl font-semibold mb-4 text-[#e69f9a]">
            Busy Individuals & Families
          </h2>
          <p className=" text-gray-700">
            Busy individuals and families utilize our platform to coordinate
            household tasks, manage personal to-do lists, and maintain a
            balanced schedule.
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
