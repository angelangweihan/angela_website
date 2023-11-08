import React from 'react';

type Props = {};

const MusicxAI = (props: Props) => {
  return (
    <div>
      <h1>Music Performance x AI</h1>
      <p>Research conducted as part of the <i>Piano Music Performance Evaluation System</i> Team, at the <i>Seoul National University Graduate School of
        Data Science, Applied Machine Learning Laborator</i>. The project was supervised by <i>Prof. Wen-Syan Li</i> and <i>Prof. Jonghwa Park</i> from 2021 to 2022. For
        more information on the Team project, visit the Lab Website <a href="https://aml.gsds.snu.ac.kr/projectssubpages/music">here</a>. A part of the research was undertaken
        independetly as part of a Computing Science Dissertation Project, entitled <i>How will your machine evaluate music? A study comparing a machine's and humans' evaluation 
        of performed music</i>.</p>

      <h2>How will your machine evaluate music? A study comparing a machine's and humans' evaluation of performed music.</h2>
      <h3>Assessor's Comment</h3>
      <p>The dissertation presents an impressive amount of work in terms of successive quantitative and qualitative experiments studying the potential of AI for 
        musical evaluation. The experiments follow established standards and use interesting set-ups (e.g. SHAP values for assessing features importance).</p>
      <h3>Abstract</h3>
      <p>The use of Artificial Intelligence (AI) for personalised education in music is a nascent area. Music, being a traditionally aurally taught discipline, 
        coupled with the challenges in developing artistic capabilities in AI, are large reasons for the lack of progress in this area. This study aims to explore 
        the possibility of having a machine evaluate music through the features of MIDI data, and comparing that with the way in which humans, both musicians and 
        the general public, evaluate music. For the machine aspect, a Random Forest Regression Model and a Regression Chain Model were explored. As for the human 
        aspect, two surveys were conducted: one with piano majors, and another with the general public. As there are no prior studies in this area, the machine 
        learning results cannot be compared to pre-existing models. Nonetheless, the model accuracy, measured by the mean squared error value, shows that having a 
        machine to predict listener satisfaction scores is viable. This is further confirmed through analysing the responses in the surveys. The study thus finds 
        that it is possible to utilizing AI for assisted-learning in music performance.</p>
    </div>
  );
};

export default MusicxAI;