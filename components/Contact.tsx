import React, { useState, useContext } from "react";
import useThemeStyles from "../hooks/useThemeStyles";
import styles from "./Contact.module.css";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext

const Contact = () => {
  const darkTheme = useContext(ThemeContext);
  const { textClass } = useThemeStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        alert("Thank you! Your message has been successfully sent.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission failed", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className={styles.contactContainer}>
      <h2 className={`text-3xl font-semibold mb-4 ${textClass}`}>CONTACT</h2>
      <p className={darkTheme ? styles.textDark : styles.textLight}>
        Have a question or want to work together?
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.formField} ${
            darkTheme ? styles.formFieldDark : styles.formFieldLight
          }`}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.formField} ${
            darkTheme ? styles.formFieldDark : styles.formFieldLight
          }`}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={`${styles.formField} ${
            darkTheme ? styles.formFieldDark : styles.formFieldLight
          }`}
          required
        />
        <button
          type="submit"
          className={`${styles.submitButton} ${
            darkTheme ? styles.submitButtonDark : styles.submitButtonLight
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
