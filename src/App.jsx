import React, { useEffect } from 'react';
import Skills from './components/Skills';

/* ---------- Projects component ---------- */
function Projects() {
  const projects = [
    {
      title: "TravelX",
      description: "Responsive travel booking landing with Bootstrap; search filters and optimized images.",
      image: "/assets/project1.jpg",
      link: "https://github.com/siddusid73/TRAVELX-main"
    },
    {
      title: "Yum Bites",
      description: "Recipe CRUD app with local storage and responsive UI.",
      image: "/assets/project2.png",
      link: "https://github.com/siddusid73/my-recipe-app"
    },
    {
      title: "My Portfolio",
      description: "This portfolio built with Vite + React + Bootstrap + AOS.",
      image: "/assets/project3.jpg",
      link: "https://github.com/yourusername/myportfolio"
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <p className="text-muted text-center mb-5">A selection of my recent work — click to view code or demo.</p>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <div className="mt-auto d-grid">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const forms = document.querySelectorAll('.needs-validation');
    const handlers = [];

    forms.forEach((form) => {
      const handler = function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          alert('Thanks! Your message was sent. (This is a demo alert)');
          form.reset();
        }
        form.classList.add('was-validated');
      };
      form.addEventListener('submit', handler);
      handlers.push({ form, handler });
    });

    return () => {
      handlers.forEach(h => h.form.removeEventListener('submit', h.handler));
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm" data-aos="fade-down">
        <div className="container">
          <a className="navbar-brand" href="#"><strong>SHAIK SIDDU</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>

              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <img src="/assets/profile.jpg" alt="Profile photo" className="profile-img mb-3" />
              <h1 className="mb-1">Hi, I'm <span className="text-primary">Siddu</span></h1>
              <p className="lead text-muted">Frontend Developer — Because your brand deserves a better front door. Pixels, performance, and a pinch of magic.</p>

              <div className="d-flex gap-2 mt-3">
                <a className="btn btn-primary" href="/assets/myresume" download>Download CV</a>
                <a className="btn btn-outline-primary" href="#contact">Contact Me</a>
              </div>

              <div className="mt-4">
                <a className="me-3 text-muted" href="https://github.com/siddusid73" aria-label="github"><i className="bi bi-github fs-4"></i></a>
                <a className="me-3 text-muted" href="https://www.linkedin.com/in/siddu-shaik-23844634a/" aria-label="linkedin"><i className="bi bi-linkedin fs-4"></i></a>
                <a className="me-3 text-muted" href="https://x.com/Siddu_sid73" aria-label="twitter"><i className="bi bi-twitter fs-4"></i></a>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">

  {/* New Warm Intro Above Quick Info */}
  <div className="mb-4 p-4 shadow-sm border-0 bg-light rounded">
    <h5 className="mb-2 text-primary">💡 My Mission</h5>
    <p className="mb-0 text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
      I don’t just code websites — I craft experiences.  
      I believe great websites don’t just work,they feel alive. My goal is to create 
      interfaces that speak to people, spark curiosity, and leave a lasting impression.  
      For me, a great interface is like a warm handshake — it welcomes, it connects, it lasts.
    </p>
  </div>

  {/* Existing Quick Info Card */}
  <div className="card border-0 shadow-sm p-4">
    <h5 className="mb-3">Quick Info</h5>
    <ul className="list-unstyled mb-0">
      <li><strong>Location:</strong> India</li>
      <li><strong>Availability:</strong> Open to work</li>
      <li><strong>Role:</strong> Frontend Developer / UI Engineer</li>
    </ul>
    <hr />
    <h6 className="mb-2">Phone num: 6302774477</h6>
    <p className="mb-0 text-muted">Email: <a href="mailto:shaiksiddu630@gmail.com">shaiksiddu630@gmail.com</a></p>
  </div>
</div>

          </div>
        </div>
      </header>

      <main className="main">
        {/* ABOUT */}
        <section id="about" className="py-5" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6">
                <h2>About Me</h2>
                <p className="text-muted">"Hello there!" I craft modern, responsive websites with a focus on clean UI, accessibility and performance. I enjoy turning UI/UX designs into fast front-end code and iterating rapidly with design & engineering teams.</p>
                <p><strong>Tools I use:</strong> VS Code, Git, GitHub, Chrome DevTools, Bootstrap, Figma, Postman.</p>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <h5 className="mb-3">Highlights</h5>
                <ul>
                  <li>Built keyboard-friendly, screen-reader-ready components because everyone deserves a smooth web experience.</li>
                  <li>Designed interfaces that guide users naturally — no manual required</li>
                  <li>Love to collabrate with designers & developers to bring ideas from concept to live, polished product.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS COMPONENT */}
        <Skills />

        {/* PROJECTS COMPONENT */}
        <Projects />

        {/* CONTACT */}
        <section id="contact" className="py-5" data-aos="fade-up">
          <div className="container">
            <h2>Contact</h2>
            <p className="text-muted">Send a message — I reply within 48 hours.</p>
            <div className="row">
              <div className="col-lg-7">
                <form id="contactForm" className="needs-validation" noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-control" required />
                    <div className="invalid-feedback">Please enter your name.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" required />
                    <div className="invalid-feedback">Please enter a valid email.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" className="form-control" rows="5" required></textarea>
                    <div className="invalid-feedback">Please enter a message.</div>
                  </div>
                  <button className="btn btn-primary" type="submit">Send Message</button>
                </form>
              </div>

              {/* PROFESSIONAL SIDE CARD */}
              <div className="col-lg-5" data-aos="fade-left">
                <div className="card p-4 shadow-sm border-0 bg-light">
                  <h5 className="mb-3">Why Work With Me</h5>
                  <p className="text-muted mb-3">I combine strong technical expertise with a commitment to delivering results that meet both business and user needs.</p>
                  <ul className="list-unstyled">
                    <li><strong>Speed Without the Mess:</strong> Delivering projects without compromising quality.</li>
                    <li><strong>Attention to Detail:</strong> Writing clean, maintainable, and scalable code.</li>
                    <li><strong>Team Player Mode:</strong> Always On – Easy to work with, whether it’s designers, developers, or decision-makers.</li>
                    <li><strong>Tech Chameleon:</strong> Quickly learning new technologies and workflows.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* WARM CLOSING SECTION */}
      <section 
        className="py-5 text-center text-dark"
        style={{
          background: "linear-gradient(270deg, #f8f9fa, #ffffff, #f8f9fa)",
          backgroundSize: "600% 600%",
          animation: "gradientShift 12s ease infinite"
        }}
        data-aos="fade-up"
      >
        <div className="container">
          <h4 className="mb-3" style={{ fontWeight: '600' }}>
            Thanks for Stopping By
          </h4>
          <p className="text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Every project is more than just code — it’s a chance to create something meaningful. 
            If you’ve come this far, I’d love to connect and see how we can bring your ideas to life.
          </p>
          <a href="#contact" className="btn btn-outline-primary px-4">
            Let’s Build Something Great
          </a>
        </div>
      </section>

      {/* Gradient Animation CSS */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* FOOTER */}
      <footer data-aos="fade-up">
        <div className="container d-flex justify-content-between align-items-center">
          <div>&copy; {new Date().getFullYear()} Siddu</div>
          <div className="text-muted small">
            • <a href="/privacy-policy.html" className="ms-2" target="_blank" rel="noopener noreferrer">Privacy</a> • 
            <a href="/terms-and-conditions.html" className="ms-1" target="_blank" rel="noopener noreferrer">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
