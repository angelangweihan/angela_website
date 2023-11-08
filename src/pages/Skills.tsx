import React from 'react';

type Props = {};

const Skills = (props: Props) => {
  return (
    <div>
      <h1>Skills</h1>

      <h2>Computing Models/Frameworks</h2>
      <ul>
        <li>Web Application Development: Django, React</li>
        <li>Text Data: BERT, roBERTa</li>
        <li>Statistical Analytics & Machine Learning: scikit learn, TensorFlow</li>
        <li>Data Presentation: Matplotlib</li>
        <li>Explainable AI: SHAP, LIME</li>
      </ul>

      <h2>Research Skills/Methods</h2>
      <ul>
        <li>Literature Review, Meta-analysis</li>
        <li>Working with human subjects (youths)</li>
        <li>Survey and Content Analysis</li>
        <li>Correlational Analysis</li>
        <li>Quasi-experiment</li>
        <li>Machine Learning</li>
        <li>Rule-based modelling and decision-making</li>
        <li>Visual Analytics</li>
      </ul>

    </div>
  );
};

export default Skills;