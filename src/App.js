import React, { useState } from "react";
import questions from "./questions";
import Question from "./ShowInfo";

const App = () => {
  const [faqs] = useState(questions);

  return (
    <>
      <div className="container">
        <h2>questions and answers about login</h2>
        <section className="whiteBox">
          {faqs.map((faq) => {
            return <Question key={faq.id} {...faq}></Question>;
          })}
        </section>
      </div>
    </>
  );
};

export default App;
