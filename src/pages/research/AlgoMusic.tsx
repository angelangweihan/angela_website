import React from 'react';

type Props = {};

const AlgoMusic = (props: Props) => {
  return (
    <div>
      <h1>Algorithmic Music</h1>
      <p>Research conducted as part of the <i>Sonic Arts: Interacting with Sound</i> Level 4 Coursework, at the <i>University of Glasgow</i>. The project
      was awarded the <b>Honourable Mention, Best Individual Assessed Work Prize</b>, recognised as the second-best honours-curriculum work in the School.</p>

      <h2>Generative Gamelan-style Music Using Pure Data (Pd).</h2>
      <h3>Assessor's Comment</h3>
      <p>This commentary is exemplary, a model of how to create a commentary for sonic arts at undergraduate level.  The writing is clear and structured, and you 
        outline the intention behind your project with detail but also deliberately limit its scope.  Existing literature is explored and evaluated with flair and 
        the steps taken in your project have been documented clearly. This document is of publishable quality.</p>

      <h3>Abstract</h3>
      <p>This composition work aims to generate music that mimics music of the Indonesian Gamelan tradition through the use of the Pure Data (Pd) 
        visual programming language. An algorithmic composition is generated through randomised note selection that is held in place by structures and 
        definitions that closely follow that of music from the Indonesian Gamelan tradition. This work aims to evaluate the effectiveness of the Pure 
        Data algorithm in doing so. The music generated through this algorithmic function has shown some similarities to the music of the Indonesian Gamelan 
        tradition, most particularly in the colotomic structure, rhythmic stratification, and improvisatory nature through the picking of random pitches. 
        Some sounds generated, such as the bass part and the highest-range part, greatly resemble the gongs and the gender of the Gamelan ensemble respectively. 
        As there is limited research on the algorithmic generation of traditional classical music of various traditions, this study contributes the possibility 
        of pursuing further research in this areas.</p>
    </div>
  );
};

export default AlgoMusic;