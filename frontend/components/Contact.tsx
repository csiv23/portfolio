import React, { useState } from "react";
import useThemeStyles from "../hooks/useThemeStyles";
import styles from "./Contact.module.css";

const Contact = () => {
  const { textClass } = useThemeStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          apikey: "07197a62-f470-448c-bde6-e7a47f4b8a3b",
        }),
      });

      if (response.ok) {
        setSubmissionStatus("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSubmissionStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission failed", error);
      setSubmissionStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className={styles.contactContainer}>
      <h2 className={`text-3xl font-bold mb-4 ${textClass}`}>Contact</h2>
      <p>Have a question or want to work together?</p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.formField}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.formField}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={styles.formField}
          required
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
      {submissionStatus && <p>{submissionStatus}</p>}
    </div>
  );
};

export default Contact;
