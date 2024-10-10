// import CSS
import "./query.css";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const Query = () => {
  return (
    <section className="query">
      <div className="section_wrapper query">
        <SectionHeader title="Query" subtitle="Want to Siscuss" color="light" />

        <main className="query_main">
          <form>
            <div className="name_contact">
              <input type="text" placeholder="Enter Fullname" />
              <input type="text" placeholder="Enter Contact Number" />
            </div>
            <input type="email" placeholder="Enter Email" />
            <textarea placeholder="Enter Your Query" />

            <button>Submit</button>
          </form>
        </main>

        <div className="query_note">
          <span>Note:</span> 24 Chambers shall endeavour to contact you within
          24 hours in response to your query.
        </div>
      </div>
    </section>
  );
};

export default Query;
