import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I'd love to connect and explore exciting opportunities with you! Whether you have interesting projects, creative ideas, or just want to chat, please don't hesitate to reach out. My inbox is open 24/7! My Ph.No: 9346158320
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/sainath-reddy-kanimireddy-15b8b9276/");
          }}
        >
          Connect Now 🚀
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span onClick={() => {
            window.open("https://www.instagram.com/sainathreddykanimireddy/");
          }}>Sainathreddy</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;