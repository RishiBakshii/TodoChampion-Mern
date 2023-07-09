import React from 'react'
import Navbar from '../components/Navbar'
import './css/about/About.css'

function About() {
  return (
    <>
    <Navbar/>

    <main className="main">

      <div className="about-card">
        <h1>About- TodoChampion</h1>
        <p>Todo chamption is a mern stack application which uses REACT as a frontend framework
        Express js as a backend and MongoDB as a database to store your data securely
        </p>
      </div>
      <div className="about-card">
        <h1>Password Security - Bcrypt - Even we can't see your passwords</h1>
        <p>
        Bcrypt is a widely used cryptographic algorithm specifically designed for secure password hashing. It is designed to be computationally expensive and slow, intentionally slowing down the hashing process to make it more resistant to brute-force attacks. Bcrypt incorporates a salt, which is a randomly generated value unique to each password, to prevent the use of precomputed hash tables, or rainbow tables, for password cracking. Additionally, bcrypt allows for easy scalability by providing a work factor that can be adjusted to increase the computational cost of hashing as computing power advances. Overall, bcrypt provides a robust and efficient method for securely storing and verifying passwords, enhancing the overall security of systems that employ it.
        </p>
      </div>

    </main>

    </>
  )
}

export default About