import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <section className="about-section">
        <h1>About Us</h1>
        <p className="description">
          Welcome to the Resume Builder App, a seamless and intuitive tool
          designed to help you create professional and visually stunning resumes
          effortlessly. Whether you're a seasoned professional, a fresh
          graduate, or someone re-entering the workforce, our app empowers you
          to craft resumes that leave a lasting impression.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
