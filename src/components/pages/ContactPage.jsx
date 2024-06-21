import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", telephone: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactPage", ...this.state }),
    })
      .then(() => alert("Thanks for your message, we'll respond soon!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, telephone, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="next-inner">
        <div className="input-left">
          <p>
            <label className="input-container">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={name}
                className="text-input"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label className="input-container">
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                className="text-input"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label className="input-container">
              <span>Telephone (if we need to call you)</span>
              <input
                type="number"
                name="telephone"
                className="text-input"
                value={telephone}
                onChange={this.handleChange}
              />
            </label>
          </p>
        </div>
        <div className="input-left">
          <label className="input-container">
            <span>Brief description of what it is about...</span>
            <textarea
              name="message"
              value={message}
              className="text-input-b"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className="learn-more-r">
            <span className="circle-r" aria-hidden="true">
              <span className="icon-r arrow-r"></span>
            </span>
            <span style={{ color: "white" }} className="button-text">
              SEND
            </span>
          </button>
        </div>
      </form>
    );
  }
}
export default ContactPage;
