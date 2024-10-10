import { Link } from "react-router-dom";

// import CSS
import "./homeBlog.css";

// import Images
import heroBg from "/Images/assets/hero/hero1.jpg";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const HomeBlog = () => {
  const allBlogs = Array(4).fill(0);

  return (
    <section className="homeBlog">
      <div className="section_wrapper homeBlog">
        {/* <div className="section_header">
          <h3 className="section_header_subtitle">What We Publish</h3>
          <h1 className="section_header_title">Blogs</h1>
        </div> */}

        <SectionHeader title="Blogs" subtitle="What We Publish" />

        <main className="homeBlog_main">
          {allBlogs.map((blog, index) => (
            <div key={index} className="blog_card">
              <img src={heroBg} alt="blog image" />

              <h4 className="blog_title">Wild Photography </h4>
              <div className="blog_time_read">
                <div className="blog_time">
                  <i className="fa-solid fa-clock" />
                  <span>24 June, 2024</span>
                </div>
                <button>Read</button>
              </div>
            </div>
          ))}
        </main>

        <div className="link_button">
          <Link to="/blogs">
            Read More <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
