import React from "react";
import Navbar from "../components/Navbar";
import "./css/about/About.css";

function About() {
  return (
    <>
      <Navbar />

      <main className="main">
        <div className="about-card">
          <h1>About- TodoChampion</h1>
          <p>
            Todo chamption is a mern stack application which uses REACT as a
            frontend framework Express js as a backend and MongoDB as a database
            to store your data securely
          </p>
        </div>

        <div className="about-card">
          <h1>Password Security - Bcrypt - Even we can't see your passwords</h1>
          <p>
            Bcrypt is a widely used cryptographic algorithm specifically
            designed for secure password hashing. It is designed to be
            computationally expensive and slow, intentionally slowing down the
            hashing process to make it more resistant to brute-force attacks.
            Bcrypt incorporates a salt, which is a randomly generated value
            unique to each password, to prevent the use of precomputed hash
            tables, or rainbow tables, for password cracking. Additionally,
            bcrypt allows for easy scalability by providing a work factor that
            can be adjusted to increase the computational cost of hashing as
            computing power advances. Overall, bcrypt provides a robust and
            efficient method for securely storing and verifying passwords,
            enhancing the overall security of systems that employ it.
          </p>
        </div>

        <div className="about-card">
          <h1>Know More about MERN STACK🎉</h1>
          <br />
          <h1>MongoDB</h1>
          <p>
            MongoDB is a NoSQL database that provides a flexible and scalable
            way to store data. It uses a document-based model, where data is
            stored in JSON-like documents. Key Points: NoSQL database JSON-like
            document storage Flexible and scalable
          </p>
        </div>

        <div className="about-card">
          <h1>Express.js</h1>
          <p>
            Express.js is a minimalist web application framework for Node.js. It
            provides a set of features for building web applications and APIs.
            Key Points: Web application framework for Node.js Minimalist and
            lightweight Enables routing, middleware, and HTTP utilities
          </p>
        </div>

        <div className="about-card">
          <h1>React.js</h1>
          <p>
            React.js is a JavaScript library for building user interfaces. It
            allows developers to create reusable UI components and efficiently
            manage the application's state. Key Points: JavaScript library for
            building UI Component-based architecture Virtual DOM for efficient
            rendering
          </p>
        </div>

        <div className="about-card">
          <h1>Node.js</h1>
          <p>
            Node.js is a JavaScript runtime environment that allows running
            JavaScript on the server-side. It provides event-driven,
            non-blocking I/O operations, making it suitable for building
            scalable web applications. Key Points: JavaScript runtime for
            server-side Event-driven and non-blocking I/O Enables building
            scalable applications
          </p>
        </div>
        <div className="about-card">
          <h1>Wrapping it all up</h1>
          <p>
            MERN stack applications utilize these technologies together to build
            full-stack JavaScript applications. Here are a few key aspects of
            MERN stack applications: Full-Stack JavaScript: MERN stack allows
            developers to use JavaScript for both the frontend (React.js) and
            backend (Node.js) development, providing a consistent programming
            language throughout the application. Single Page Applications (SPA):
            React.js enables the creation of single-page applications where the
            content is dynamically loaded, providing a smooth and interactive
            user experience. RESTful APIs: Express.js, combined with Node.js,
            allows developers to build RESTful APIs for communication between
            the frontend and backend, enabling data retrieval and manipulation.
            Scalability and Performance: The MERN stack supports scalability by
            leveraging Node.js's event-driven architecture and MongoDB's
            flexibility for handling large amounts of data. Flexibility: With
            MongoDB's NoSQL structure, developers have the freedom to evolve and
            modify the data schema without strict constraints.
          </p>
        </div>
      </main>
    </>
  );
}

export default About;
