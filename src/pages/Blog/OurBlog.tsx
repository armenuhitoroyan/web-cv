import React from "react";
import styles from "../../style/BlogDetails2.module.css";
import Footer from "../../components/footer/Footer";
import ParticlesContainer from "../../components/ParticlesContainer";
import bgImage from "../../assets/images/fog.png";

import Input from "../../components/form/Input";
import News from "../../components/News";

import Category from "../../components/Categories";
import { useTitle } from "../../hooks/useTitle";

const Pagination: React.FC = () => {
  return (
    <div className="flex items-start justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      {/* Mobile Navigation */}
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            {/* Previous */}
            <a
              href="#"
              className={`relative bg-indigo-600 z-30 inline-flex items-center rounded-full px-6 py-3 text-gray-400 ring-1   ${styles.prev}`}
              style={{ width: "100px", height: "50px" }} // Ellipse style
            >
              <span>prev</span>
            </a>

            {/* Page Numbers */}
            <a
              href="#"
              aria-current="page"
              className="relative inline-flex items-center px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-none rounded-lg"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-none rounded-lg"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-none rounded-lg md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-5 py-3 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset rounded-lg">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-white-50 focus:z-20 focus:outline-none rounded-lg md:inline-flex"
            >
              16
            </a>

            {/* Next */}
            <a
              href="#"
              className={`relative bg-indigo-600 z-30 inline-flex items-center rounded-full px-6 py-3 text-gray-400 ring-1   ${styles.next}`}
            >
              <span>next</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

const OurBlog: React.FC = () => {
  useTitle("Our Blog");
  return (
    <div
      className={`w-full  flex-col items-center justify-center md:flex-row ${styles.container}`}
    >
      <div className={styles.menu}>
        <ParticlesContainer title="Our Blog" ref="blog" img={bgImage} />
      </div>

      <div className="w-full  flex flex-col  justify-center md:flex-row">
        <div
          style={{ width: "65%" }}
          className={` ${styles.blog_container} flex justify-start items-center`}
        >
          <div className={`${styles.blog_content}  flex-col  md:flex-row`}>
            <div>
              <img
                src="https://afsu.tohidur.com/img/zoom-3.jpg"
                alt="Image not found!"
              />

              <div className={`flex items-center gap-10 ${styles.post}`}>
                <span>December 5, 2023</span>
                <img
                  src="https://afsu.tohidur.com/img/45.jpg"
                  alt="Image not found!"
                />
                <h6>Willimes Marker</h6>
              </div>

              <div className={styles.blog_paragraph}>
                <h2>Professionals with a Global Mindset</h2>

                <p style={{ margin: "0 auto" }}>
                  ipsum dolor sit amet soufflé. I love liquorice oat cake
                  biscuit tiramisu jelly danish Caramels its chorice sw eet roll
                  tart. Jelly fruitcake tart caramels marzipan. Brownie I love
                  chocolate that bar sesliquorice. I love to otsie roll dragée
                  bonbon croisnt. Chupa chups loream sesame snaps jelly
                  tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit
                  jesms tiramisu jelly dash Caramels chocolatsweet roll tart.
                  Jelly-o fruitcake ta rt caramels marzipan Brownie I love
                  chocolate bar. Cake I love liquorice n’t act so surprised,
                  Your Highnes You weren’t on any mercy mison this time to this
                  shp before me.
                </p>
              </div>
              <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
                Select Now
              </button>
            </div>
            <div>
              <img
                src="https://afsu.tohidur.com/img/zoom-1.jpg"
                alt="Image not found!"
              />

              <div className={`flex items-center gap-10 ${styles.post}`}>
                <span>December 5, 2023</span>
                <img
                  src="https://afsu.tohidur.com/img/45.jpg"
                  alt="Image not found!"
                />
                <h6>Willimes Marker</h6>
              </div>

              <div className={styles.blog_paragraph}>
                <h2>Professionals with a Global Mindset</h2>

                <p style={{ margin: "0 auto" }}>
                  ipsum dolor sit amet soufflé. I love liquorice oat cake
                  biscuit tiramisu jelly danish Caramels its chorice sw eet roll
                  tart. Jelly fruitcake tart caramels marzipan. Brownie I love
                  chocolate that bar sesliquorice. I love to otsie roll dragée
                  bonbon croisnt. Chupa chups loream sesame snaps jelly
                  tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit
                  jesms tiramisu jelly dash Caramels chocolatsweet roll tart.
                  Jelly-o fruitcake ta rt caramels marzipan Brownie I love
                  chocolate bar. Cake I love liquorice n’t act so surprised,
                  Your Highnes You weren’t on any mercy mison this time to this
                  shp before me.
                </p>
              </div>
              <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
                Select Now
              </button>
            </div>
            <div>
              <img
                src="https://afsu.tohidur.com/img/zoom-2.jpg"
                alt="Image not found!"
              />

              <div className={`flex items-center gap-10 ${styles.post}`}>
                <span>December 5, 2023</span>
                <img
                  src="https://afsu.tohidur.com/img/45.jpg"
                  alt="Image not found!"
                />
                <h6>Willimes Marker</h6>
              </div>

              <div className={styles.blog_paragraph}>
                <h2>Professionals with a Global Mindset</h2>

                <p style={{ margin: "0 auto" }}>
                  ipsum dolor sit amet soufflé. I love liquorice oat cake
                  biscuit tiramisu jelly danish Caramels its chorice sw eet roll
                  tart. Jelly fruitcake tart caramels marzipan. Brownie I love
                  chocolate that bar sesliquorice. I love to otsie roll dragée
                  bonbon croisnt. Chupa chups loream sesame snaps jelly
                  tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit
                  jesms tiramisu jelly dash Caramels chocolatsweet roll tart.
                  Jelly-o fruitcake ta rt caramels marzipan Brownie I love
                  chocolate bar. Cake I love liquorice n’t act so surprised,
                  Your Highnes You weren’t on any mercy mison this time to this
                  shp before me.
                </p>
              </div>
              <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
                Select Now
              </button>
            </div>
            <div>
              <img
                src="https://afsu.tohidur.com/img/profile-1.jpg"
                alt="Image not found!"
              />

              <div className={`flex items-center gap-10 ${styles.post}`}>
                <span>December 5, 2023</span>
                <img
                  src="https://afsu.tohidur.com/img/45.jpg"
                  alt="Image not found!"
                />
                <h6>Willimes Marker</h6>
              </div>

              <div className={styles.blog_paragraph}>
                <h2>Professionals with a Global Mindset</h2>

                <p style={{ margin: "0 auto" }}>
                  ipsum dolor sit amet soufflé. I love liquorice oat cake
                  biscuit tiramisu jelly danish Caramels its chorice sw eet roll
                  tart. Jelly fruitcake tart caramels marzipan. Brownie I love
                  chocolate that bar sesliquorice. I love to otsie roll dragée
                  bonbon croisnt. Chupa chups loream sesame snaps jelly
                  tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit
                  jesms tiramisu jelly dash Caramels chocolatsweet roll tart.
                  Jelly-o fruitcake ta rt caramels marzipan Brownie I love
                  chocolate bar. Cake I love liquorice n’t act so surprised,
                  Your Highnes You weren’t on any mercy mison this time to this
                  shp before me.
                </p>
              </div>
              <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
                Select Now
              </button>
            </div>
            <div>
              <img
                src="https://afsu.tohidur.com/img/profile-2.jpg"
                alt="Image not found!"
              />

              <div className={`flex items-center gap-10 ${styles.post}`}>
                <span>December 5, 2023</span>
                <img
                  src="https://afsu.tohidur.com/img/45.jpg"
                  alt="Image not found!"
                />
                <h6>Willimes Marker</h6>
              </div>

              <div className={styles.blog_paragraph}>
                <h2>Professionals with a Global Mindset</h2>

                <p style={{ margin: "0 auto" }}>
                  ipsum dolor sit amet soufflé. I love liquorice oat cake
                  biscuit tiramisu jelly danish Caramels its chorice sw eet roll
                  tart. Jelly fruitcake tart caramels marzipan. Brownie I love
                  chocolate that bar sesliquorice. I love to otsie roll dragée
                  bonbon croisnt. Chupa chups loream sesame snaps jelly
                  tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit
                  jesms tiramisu jelly dash Caramels chocolatsweet roll tart.
                  Jelly-o fruitcake ta rt caramels marzipan Brownie I love
                  chocolate bar. Cake I love liquorice n’t act so surprised,
                  Your Highnes You weren’t on any mercy mison this time to this
                  shp before me.
                </p>
              </div>
              <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
                Select Now
              </button>
            </div>
            <Pagination />
          </div>
        </div>
        {/* Part 2 */}
        <div style={{ width: "35%" }}>
          <div className={`w-full md:w-2/5 ${styles.categories}`}>
            {/* Recent News */}
            <div className={`${styles.card} mt-4`}>
              <h2 className={styles.cardTitle}>Recent News</h2>
              <div className={styles.divider}></div>
              {[1, 2, 3, 4].map((_, index) => (
                <News
                  key={index}
                  img={`https://afsu.tohidur.com/img/showcase-${index + 1}.jpg`}
                  date="December 5, 2023"
                  title="Interview Photographer Mark Seliger"
                />
              ))}
            </div>

            {/* Categories */}
            <div className={`${styles.card} mt-4`}>
              <h2 className={styles.cardTitle}>Categories</h2>
              <div className={styles.divider}></div>
              {[
                "Graphic Design",
                "UI/UX Design",
                "Creative Studio",
                "Mobile Application",
              ].map((category, index) => (
                <div key={index} className="mt-4">
                  <Category linkRef={category} refNumber="10" />
                </div>
              ))}
            </div>

            {/* Meta Links */}
            <div className={`${styles.card} mt-4`}>
              <h2 className={styles.cardTitle}>Meta Links</h2>
              <div className={styles.divider}></div>
              {["Log in", "Entries RSS", "Comments RSS", "WordPress.org"].map(
                (link, index) => (
                  <div key={index} className="mt-4">
                    <a style={{ color: "black" }} href="#">
                      {link}
                    </a>
                  </div>
                )
              )}
            </div>

            {/* Gallery Photos */}
            <div className={`${styles.card} mt-4`}>
              <h2 className={styles.cardTitle}>Gallery Photos</h2>
              <div className={styles.divider}></div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[5, 6, 7, 8, 9, 10].map((num, index) => (
                  <img
                    style={{ borderRadius: "15px" }}
                    key={index}
                    className={styles.galleryImage}
                    src={`https://afsu.tohidur.com/img/showcase-${num}.jpg`}
                    alt="Image not found"
                  />
                ))}
              </div>
            </div>

            {/* Subscribe Newsletter */}
            <div className={`${styles.card} mt-4`}>
              <h2 className={styles.cardTitle}>Subscribe Newsletter</h2>
              <div className={styles.divider}></div>
              <p
                style={{ color: "black", marginBottom: "15px" }}
                className="text-gray-500 mt-4"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Input
                type="text"
                name=""
                value=""
                placeholder="Enter your email..."
                onChange={() => console.log("Email entered")}
              />

              <div className="mt-4">
                <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurBlog;
