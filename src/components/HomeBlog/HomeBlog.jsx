// import CSS
import "./homeBlog.css";

// import Images
import heroBg from "/Images/assets/hero/hero1.jpg";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";
import LinkButton from "../LinkButton/LinkButton";

const HomeBlog = () => {
  const allBlogs = Array(4).fill(0);

  return (
    <section className="homeBlog_section" id="homeBlog">
      <main>
        <SectionHeader title="Blogs" subtitle="What We Publish" />

        <div className="blogCards_wrapper">
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
        </div>

        <LinkButton link="/blogs" text="Read More" color="dark" />
      </main>
    </section>
  );
};

export default HomeBlog;
