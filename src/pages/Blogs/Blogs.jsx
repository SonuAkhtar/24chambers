import { useState } from "react";

// import CSS
import "./blogs.css";

// appData
import { blogsData } from "../../../appData";
import { useEffect } from "react";

const Blogs = () => {
  const [blogsCount, setBlogsCount] = useState(4);
  const [totalBlogs, setTotalBlogs] = useState(blogsData.slice(0, 4));

  useEffect(() => {
    const initialBlogs = blogsData.slice(0, blogsCount);
    setTotalBlogs(initialBlogs);
  }, [blogsCount]);

  const handleSeeMoreClick = () => {
    if (blogsCount < blogsData.length) {
      setBlogsCount((prev) => prev + 4);
    }
  };

  return (
    <div className="blogs">
      <div className="blogs_wrapper">
        <h1>Blogs</h1>
        <main>
          {totalBlogs?.map((data) => (
            <a key={data.id} href={data.href} className="blog_card">
              <div className="image">
                <img src={data.image} alt={data.altText} />
              </div>
              <div className="blog_card_details">
                <div className="blog_title">{data.title}</div>
                <div className="blog_date">{data.time}</div>
              </div>
            </a>
          ))}
        </main>
        <button className="blogs_button" onClick={handleSeeMoreClick}>
          See More
        </button>
      </div>
    </div>
  );
};

export default Blogs;
