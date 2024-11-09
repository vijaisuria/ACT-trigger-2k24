import React from "react";
import EmailJS from "@emailjs/browser";
import Button from "../Button";
import styles from "./styles.module.scss";
import SUCCESS from "../../assets/Check.svg";
import ERROR from "../../assets/Error.svg";

const ContactSection = () => {
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState({
    Name: false,
    Email: false,
    Subject: false,
    Message: false,
  });
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertDetails, setAlertDetails] = React.useState({});

  const validateEmail = (value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value);

  const sendMail = () => {
    EmailJS.init("p9TYtceKgqAHtKs_j");
    const templateParams = {
      from_email: email,
      to_email: "contact.actmit@gmail.com",
      name: name,
      subject: subject,
      message: message,
    };

    EmailJS.send("service_trigger_website", "template_trigger_query", templateParams)
      .then(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setShowAlert(true);
        setAlertDetails({
          message: "Your query has been sent successfully",
          icon: SUCCESS,
          type: "success",
        });
        setTimeout(() => setShowAlert(false), 6000);
      })
      .catch(() => {
        setShowAlert(true);
        setAlertDetails({
          message: "Oops! Unable to send your query",
          icon: ERROR,
          type: "error",
        });
        setTimeout(() => setShowAlert(false), 6000);
      });
  };

  const submit = (e) => {
    e.preventDefault();

    let isError = false;
    const errorCopy = {
      Name: false,
      Email: false,
      Subject: false,
      Message: false,
    };

    if (name === "") {
      errorCopy.Name = true;
      isError = true;
    }

    if (email === "" || !validateEmail(email)) {
      errorCopy.Email = true;
      isError = true;
    }

    if (subject === "") {
      errorCopy.Subject = true;
      isError = true;
    }

    if (message === "") {
      errorCopy.Message = true;
      isError = true;
    }

    setError(errorCopy);

    if (isError) {
      setShowAlert(true);
      setAlertDetails({
        message: "One or more values is incorrect",
        icon: ERROR,
        type: "error",
      });
      setTimeout(() => setShowAlert(false), 6000);
    } else {
      sendMail();
    }
  };

  return (
    <div className={styles.contact_section} id="support">
      {showAlert && <Alert alert={alertDetails} />}
      <div className={styles.left}>
        <div>
          <h1>ANY QUERIES?</h1>
          <h1>WE ARE HERE</h1>
          <h1>TO HELP.</h1>
        </div>
      </div>
      <div className={styles.right}>
        <h2>CONTACT US</h2>
        <p>
        For any kind of queries related to the event, reach out to us any time by filling the form or contacting the event organizers
        </p>
        <form onSubmit={submit}>
          <div className={styles.col_2}>
            <Input
              type="text"
              label="Name"
              value={name}
              onChange={(value) => setName(value)}
              isError={error.Name}
            />
            <Input
              type="text"
              label="Email"
              value={email}
              onChange={(value) => setEmail(value)}
              isError={error.Email}
            />
          </div>
          <Input
            type="text"
            label="Subject"
            value={subject}
            onChange={(value) => setSubject(value)}
            isError={error.Subject}
          />
          <Input
            type="textarea"
            label="Message"
            value={message}
            onChange={(value) => setMessage(value)}
            isError={error.Message}
          />
          <Button type="submit" label="Submit Query" />
        </form>
      </div>
    </div>
  );
};

const Input = (props) => {
  const classList = [styles.input_group];

  if (props.isError === true) classList.push(styles.error);

  if (props.type === "textarea")
    return (
      <div className={classList.join(" ")}>
        <textarea
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.label}
          value={props.value}
        />
        <span />
      </div>
    );
  else
    return (
      <div className={classList.join(" ")}>
        <input
          value={props.value}
          type={props.type}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.label}
        />
        <span />
      </div>
    );
};

const Alert = (props) => {
  return (
    <div className={styles.alert + " " + styles[props.alert.type]}>
      <span>{props.alert.message}</span>
      <img src={props.alert.icon} alt="error icon" />
    </div>
  );
};

export default ContactSection;
