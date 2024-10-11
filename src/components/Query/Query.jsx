// import CSS
import "./query.css";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const Query = () => {
  return (
    <section className="query_section" id="query">
      <main className="query_main">
        <SectionHeader
          title="Submit Your Query"
          subtitle="Let's Discuss"
          color="light"
        />

        <form>
          <div className="name_contact">
            <input type="text" placeholder="Enter Fullname" />
            <input type="text" placeholder="Enter Contact Number" />
          </div>
          <input type="email" placeholder="Enter Email" />
          <textarea placeholder="Enter Your Query" />

          <button>Submit</button>
        </form>

        <div className="query_note">
          <span>Note:</span> 24 Chambers shall endeavour to contact you within
          24 hours in response to your query.
        </div>
      </main>
    </section>
  );
};

export default Query;
