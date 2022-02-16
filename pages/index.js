import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import styles from "../styles/Home.module.css";
import photo from "../public/img/mahbub.jpg";
import mobile from "../public/img/ai.png";
import web from "../public/img/web.png";
import svg from "../public/img/project.gif";
import codingPhoto from "../public/img/aboutPhoto.gif";
export default function Home() {
  return (
    <>
      <Head>
        <title>Walcome to my protfolio</title>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <header className={styles.headerBg}>
        <nav className={styles.navItems}>
          <Link href="#about" passHref>
            <a>About</a>
          </Link>
          <Link href="#services" passHref>
            <a>Services</a>
          </Link>
          <Link href="#project" passHref>
            <a>Project</a>
          </Link>
          <Link href="#contact" passHref>
            <a>Contact</a>
          </Link>
        </nav>
        <div className={styles.profile}>
          <div
            className={styles.profileInfo}
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <strong style={{ display: "block" }}>Hi,</strong>
            <strong style={{ color: "#96D4D4" }}>I&apos;m Mahbub Hasan</strong>
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Full-Stock Developer",
                  "Bloger",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <div style={{ marginTop: "20px" }}>
              <Link href="#contact" passHref>
                <a className={styles.btn}>Hire Me</a>
              </Link>
              <Link href="#" passHref>
                <a className={styles.btn}>My CV</a>
              </Link>
            </div>
          </div>
          <div
            className={styles.profilePhoto}
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <Image
              className={styles.photo}
              src={photo}
              alt="Mahbub"
              height={200}
              width={200}
              quality={100}
            />
          </div>
        </div>
      </header>
      <main>
        <section id="about">
          <h1>About Me</h1>
          <div
            className={styles.about}
            data-aos="flip-down"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <Image
                className={styles.photo}
                src={codingPhoto}
                alt="About"
                height={800}
                width={800}
                quality={100}
              />
            </div>
            <div>
              <p style={{ padding: "10px" }}>
                Hi, I am a Software Engineer from Bangladesh. I have completed
                my graduation in Seotware Engineering from Daffodil
                International University, Dhanmondi, Dhaka. I am a fresher and
                have strong skill in problem solving, data structure and
                algorithm.During my varsity I have learn lots of technology like
                C, Java, JavaScript, PHP, HTML, CSS, Node JS, Express JS, React
                JS, Next JS, ReactNative, MySql, prisma ORM, Mongodb , mongoose,
                clear OOP concept and more. Now, I can freely work with
                JavaScript in mobile and web development. I can adapt with new
                technology easyly and I like to update my knowdge with newest
                technology my self.Now I finding a plce where I can apply my
                knoladge to make my skills more effcient.
              </p>
              <strong style={{ color: "#19232F", padding: "10px" }}>
                I like to keep simple everything{" "}
                <i
                  className="far fa-comment-smile"
                  style={{ color: "#4B9963", fontSize: "35px" }}
                ></i>
              </strong>
            </div>
          </div>
        </section>
        <section id="services">
          <h1>Services</h1>
          <div className={styles.services}>
            <div
              className={styles.mobile}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <h2>Mobile App</h2>
              <Image
                className={styles.photo}
                src={mobile}
                alt="mobile"
                height={300}
                width={300}
                quality={100}
              />
            </div>
            <div
              className={styles.web}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <h2>Web App</h2>
              <Image
                className={styles.photo}
                src={web}
                alt="Web"
                height={300}
                width={300}
                quality={100}
              />{" "}
            </div>
          </div>
        </section>

        <section id="project">
          <h1>Projects</h1>
          <div className={styles.project}>
            <div
              className={styles.svg}
              data-aos="fade-up-right"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <h2 style={{ color: "#6DD2CE" }}>Full-Stock Developer</h2>
              <Image
                src={svg}
                alt="mobile"
                height={400}
                width={370}
                quality={100}
              />
            </div>
            <div
              className={styles.topProject}
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <div className={styles.projectItems}>
                <div className={styles.projectItemsPhoto}>
                  <Image
                    className={styles.photo}
                    src={codingPhoto}
                    alt="c project"
                    height={90}
                    width={90}
                    quality={100}
                  />
                </div>
                <div className={styles.projectItemsInfo}>
                  <strong style={{ color: "white" }}>
                    Mobile Shope Management System Developed in C programming
                    language
                  </strong>
                  <br></br>
                  <div style={{ marginTop: "20px" }}>
                    <Link href="" passHref>
                      <a className={styles.gitNLiveBtn}>
                        <i className="fas fa-video"></i> Live
                      </a>
                    </Link>
                    <Link
                      href="https://github.com/mahbubswe/c-project.git"
                      passHref
                    >
                      <a className={styles.gitNLiveBtn}>
                        <i className="fab fa-github"></i> Source
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.projectItems}>
                <div className={styles.projectItemsPhoto}>
                  <Image
                    className={styles.photo}
                    src={codingPhoto}
                    alt="JS project"
                    height={90}
                    width={90}
                    quality={100}
                  />
                </div>
                <div className={styles.projectItemsInfo}>
                  <strong style={{ color: "white" }}>
                    Pizza and drinks selling system through online developed in
                    JavaScript and PHP
                  </strong>
                  <br></br>
                  <div style={{ marginTop: "20px" }}>
                    <Link href="" passHref>
                      <a className={styles.gitNLiveBtn}>
                        <i className="fas fa-video"></i> Live
                      </a>
                    </Link>
                    <Link
                      href="https://github.com/mahbubswe/html-css-bootstrap-js-ajax-php-mySql.git"
                      passHref
                    >
                      <a className={styles.gitNLiveBtn}>
                        <i className="fab fa-github"></i> Source
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.projectItems}>
                <div className={styles.projectItemsPhoto}>
                  <Image
                    className={styles.photo}
                    src={codingPhoto}
                    alt="react project"
                    height={90}
                    width={90}
                    quality={100}
                  />
                </div>
                <div className={styles.projectItemsInfo}>
                  <strong style={{ color: "white" }}>
                    React Shopping cart
                  </strong>
                  <br></br>
                  <div style={{ marginTop: "20px" }}>
                    <Link href="" passHref>
                      <a className={styles.gitNLiveBtn}>
                        <i className="fas fa-video"></i> Live
                      </a>
                    </Link>
                    <Link
                      href="https://github.com/mahbubswe/react-shopping-cart.git"
                      passHref
                    >
                      <a className={styles.gitNLiveBtn}>
                        <i className="fab fa-github"></i> Source
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h1
            data-aos="fade-up"
            data-aos-offset="2"
            data-aos-delay="50"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            Contact
          </h1>
          <div
            className={styles.contact}
            data-aos="zoom-in"
            data-aos-offset="2"
            data-aos-delay="50"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <a
              href="https://api.whatsapp.com/send?phone=+8801623218618"
              className="fab fa-whatsapp"
              data-aos="fade-up-right"
              data-aos-offset="0"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            ></a>{" "}
            <a
              href="mailto:programmermahbub@gmail.com"
              className="far fa-envelope"
            ></a>
          </div>
        </section>
        <div style={{ fontSize: "35px", textAlign: "right", padding: "15px" }}>
          <Link href="#" passHref>
            <a
              className="fas fa-arrow-circle-up"
              style={{ color: "#75D3CF" }}
            ></a>
          </Link>
        </div>

        <div className={styles.blog}>
          <strong>Blog site:</strong>{" "}
          <Link href="www.https://devprogrammer.com" passHref>
            <a>https://devprogrammer.com</a>
          </Link>
        </div>
      </main>
    </>
  );
}
