import { useState } from "react";

// import CSS
import "./blogs.css";

// appData
import { blogsData } from "../../../appData";
import { useEffect } from "react";

const Blogs = () => {
  const [blogsCount, setBlogsCount] = useState(4);
  const [totalBlogs, setTotalBlogs] = useState(blogsData.slice(0, 4));
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const initialBlogs = blogsData.slice(0, blogsCount);
    setTotalBlogs(initialBlogs);
  }, [blogsCount]);

  const handleSeeMoreClick = () => {
    if (blogsCount < blogsData.length) {
      setBlogsCount((prev) => prev + 4);
    } else setShowWarning(true);
  };

  return (
    <div className="blogs">
      <div className="blogs_wrapper">
        <h1>Blogs</h1>
        <main>
          {totalBlogs?.map((data) => (
            <div key={data.id} className="blog_card">
              <div className="image">
                <img src={data.image} alt={data.altText} />
              </div>
              <div className="blog_card_details">
                <a className="blog_title" href={data.href} target="_blank">
                  {data.title.substring(0, 30)}...
                </a>
                <div className="blog_author">{data.author}</div>
              </div>
            </div>
          ))}
        </main>
        {showWarning && (
          <div className="no_moreBlogs">No more blogs to show</div>
        )}
        <button className="blogs_button" onClick={handleSeeMoreClick}>
          See More
        </button>
      </div>
    </div>
  );
};

export default Blogs;
