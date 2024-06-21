import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "footerContact", ...this.state }),
    })
      .then(() => alert("Thanks for your message, we'll respond soon!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ width: "100%" }}
        className="footerContact"
      >
        <div className="input-ne">
          <label className="s-input-container">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={name}
              className="s-text-input"
              onChange={this.handleChange}
            />
          </label>

          <label className="s-input-container">
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              className="s-text-input"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <p>
          <label className="s-input-container">
            <span>Brief description of what it is about...</span>
            <textarea
              name="message"
              value={message}
              className="s-text-input-b"
              onChange={this.handleChange}
            />
          </label>
        </p>
        <button type="submit" className="learn-more-r">
          <span className="circle-r" aria-hidden="true">
            <span className="icon-r arrow-r"></span>
          </span>
          <span style={{ color: "white" }} className="button-text">
            SEND
          </span>
        </button>
      </form>
    );
  }
}
export default ContactForm;
