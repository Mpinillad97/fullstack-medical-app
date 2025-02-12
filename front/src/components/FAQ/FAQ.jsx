import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const questions = [
    {
      question: "Why Should i use Medical Care?",
      answer: "A big reason we're so popular is our prices. We've cut the middlemen, salespeople and agents, and passed the savings onto you. On top of that, our doctor are fully qualified, registered with the relevant bodies and fully veted, giving you the peace of mind that we're the right people to help.",
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. Please contact us to verify coverage.",
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment online through our website or by calling our office directly.",
    },
    {
        question: "How long are appointments valid for?",
        answer: "Appointments are valid for the specified date and time. If you need to reschedule, please inform us at least 24 hours in advance.",
    },
    {
        question: "What services do you offer?",
        answer: "We provide a wide range of medical services including general checkups, diagnostic testing, and specialized consultations.",  
    },
    {
        question: "Are the doctors qualified?",
        answer: "Absolutely! All our doctors are highly qualified and hold certifications in their respective fields. They are also regularly trained on the latest medical advancements.",
    },
  ];

return (
    <div className={styles.faqContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        {questions.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/faqBanner.png"
          alt="FAQ banner"
          className={styles.image}
        />
      </div>
    </div>
  );
};

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.questionContainer} ${isOpen ? styles.open : ""}`}
    >
      <button onClick={toggleAnswer} className={styles.question}>
        {question}
      </button>
      <div className={styles.answer}>{answer}</div>
    </div>
  );
};

export default FAQ;
