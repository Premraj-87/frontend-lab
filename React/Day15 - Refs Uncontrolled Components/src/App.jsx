import { useRef } from "react";


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToSection(homeRef)}>
          Home
        </button>

        <button onClick={() => scrollToSection(aboutRef)}>
          About
        </button>

        <button onClick={() => scrollToSection(skillsRef)}>
          Skills
        </button>

        <button onClick={() => scrollToSection(projectsRef)}>
          Projects
        </button>

        <button onClick={() => scrollToSection(contactRef)}>
          Contact
        </button>
      </nav>

      <section ref={homeRef}>
        Home
      </section>

      <section ref={aboutRef}>
        About
      </section>

      <section ref={skillsRef}>
        Skills
      </section>

      <section ref={projectsRef}>
        Projects
      </section>

      <section ref={contactRef}>
        Contact
      </section>
    </>
  );
}

export default App;