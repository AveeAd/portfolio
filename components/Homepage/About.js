const About = () => {
  return (
    <section id="about" className="m-4 p-16 bg-white">
      <div className="flex flex-col justify-center items-center">
        <img className="h-32 mb-8" src="/images/about.svg" alt="" />
        <p className="bg-clip-text text-5xl font-medium text-transparent bg-gradient-to-br from-indigo-600 to-pink-600 my-2">
          Hello
        </p>
        <p className="text-center text-xl bg-clip-text font-medium text-transparent bg-gradient-to-br from-indigo-600 to-pink-600">
          I am Kumar Adhikari, web developer, spending my whole day learning and
          experimenting with HTML, CSS and JavaScript from front-end(ReactJs,
          NextJs) to back-end(NodeJs/ExpressJs) development.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-64 justify-center items-center mt-8">
          <img className="h-24 mt-8" src="/images/reactjs.svg" alt="" />
          <img className="h-24 mt-8" src="/images/nextjs.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
