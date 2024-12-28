import "./blogCard.css";

const BlogCard = ({ data }) => {
  console.log(data);
  return (
    <div key={data.id} className="blog_card_wrapper">
      <div className="blog_image">
        <img src={data.image} alt={data.altText} />
      </div>
      <div className="blog_card_title"> {data.title.substring(0, 50)}...</div>
      <div className="blog_card_details">
        <div className="blog_practiceArea">
          <span>Practice Area : </span>
          {data.practiceArea}
        </div>
        <div className="blog_author">
          <span>Author : </span>
          {data.author}
        </div>
        <div className="blog_publishedDate">
          <span>Published Date : </span>
          {data.publishedDate}
        </div>
      </div>
      <a className="blog_button" href={data.href} target="_blank">
        READ MORE
      </a>
    </div>
  );
};

export default BlogCard;