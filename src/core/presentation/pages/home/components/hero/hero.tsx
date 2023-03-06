function HeroComponent() {
  return (
    <div>
      <p className='text-base font-light text-white'>Hey, I'm</p>
      <h1 className='bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 bg-clip-text text-transparent text-6xl font-semibold w-510px sm:w-full sm:text-4xl'>
        Vinicius Anchieta
      </h1>
      <div className='text-lg font-light text-white text-justify flex flex-col gap-4'>
        <p>
          I'm a software engineer with skills in HTML, CSS, JavaScript, and
          TypeScript, and proficient in using ReactJS, NextJS, React Native,
          Material-UI, and Tailwind CSS for creating attractive and intuitive
          user interfaces. I am also proficient in unit testing.
        </p>
        <p>
          I'm passionate about innovation and always seeking to learn new
          technologies to provide creative and efficient solutions for projects.
          I strive to create an excellent user experience, whether on a mobile
          or desktop device.
        </p>
      </div>
    </div>
  );
}

export default HeroComponent;
