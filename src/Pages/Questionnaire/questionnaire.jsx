// import React, { useState } from 'react';
// import './questionnaire.css';
// import Navbar from '../../Components/NavigBar/navbar';

// function questionnaire() {

//   const [stressLevel, setStressLevel] = useState(5);
//   const [sleepQuality, setSleepQuality] = useState('fair');
//   const [activityLevel, setActivityLevel] = useState('sometimes');
//   const [dietBalance, setDietBalance] = useState('yes');
//   const [timeManagement, setTimeManagement] = useState('good');
//   const [mood, setMood] = useState('');
//   const [exerciseSuggestions, setExerciseSuggestions] = useState([]);

//   const assessMood = () => {
//     // Determine mood based on various factors
//     if (stressLevel <= 3 && sleepQuality === 'excellent' && activityLevel === 'regularly' && dietBalance === 'yes' && timeManagement === 'excellent') {
//       setMood('Relaxed');
//     } else if ((stressLevel <= 7 && stressLevel > 3) || (sleepQuality === 'good' || sleepQuality === 'fair') && (activityLevel === 'sometimes' || activityLevel === 'regularly') && dietBalance === 'yes' && (timeManagement === 'good' || timeManagement === 'excellent')) {
//       setMood('Moderate');
//     } else {
//       setMood('Stressed');
//     }

//     // Set exercise suggestions based on mood
//     switch (mood) {
//       case 'Relaxed':
//         setExerciseSuggestions(['Yoga', 'Meditation', 'Deep Breathing Exercises', 'Tai Chi', 'Pilates']);
//         break;
//       case 'Moderate':
//         setExerciseSuggestions(['Walking', 'Mindfulness Practice', 'Listening to Calming Music', 'Swimming', 'Cycling']);
//         break;
//       case 'Stressed':
//         setExerciseSuggestions(['Jogging', 'Dancing', 'Stretching', 'Boxing', 'Kickboxing']);
//         break;
//       default:
//         setExerciseSuggestions(['Exercise regularly and stay hydrated!']);
//         break;
//     }
//   };

//   return (
//     <div >
//       <Navbar></Navbar>
//       <div className="stressContainer">
//         <h1>Stress Assessment & Mood Exercise Suggestions</h1>
//         <div id="questionnaire">
//           <h2>Stress Assessment Questionnaire</h2>
//           <p>How often do you feel stressed?</p>
//           <input type="range" min="1" max="10" value={stressLevel} onChange={(e) => setStressLevel(e.target.value)} />
//           <p>How well do you sleep?</p>
//           <select value={sleepQuality} onChange={(e) => setSleepQuality(e.target.value)}>
//             <option value="poor">Poor</option>
//             <option value="fair">Fair</option>
//             <option value="good">Good</option>
//             <option value="excellent">Excellent</option>
//           </select>
//           <p>How often do you engage in physical activity?</p>
//           <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
//             <option value="none">None</option>
//             <option value="rarely">Rarely</option>
//             <option value="sometimes">Sometimes</option>
//             <option value="regularly">Regularly</option>
//           </select>
//           <p>Do you have a balanced diet?</p>
//           <select value={dietBalance} onChange={(e) => setDietBalance(e.target.value)}>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           <p>How well do you manage your time?</p>
//           <select value={timeManagement} onChange={(e) => setTimeManagement(e.target.value)}>
//             <option value="poor">Poor</option>
//             <option value="fair">Fair</option>
//             <option value="good">Good</option>
//             <option value="excellent">Excellent</option>
//           </select>
//           <button onClick={assessMood}>Assess Mood</button>
//         </div>
//         <div id="moodResult" style={{ display: mood ? 'block' : 'none' }}>
//           <h2>Your Mood: {mood}</h2>
//           <h3>Exercise Suggestions:</h3>
//           <ul id="exerciseSuggestions">
//             {exerciseSuggestions.map((exercise, index) => (
//               <li key={index}>{exercise}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default questionnaire;



import React, { useState } from 'react';
import './questionnaire.css';
import Navbar from '../../Components/NavigBar/navbar';
import yoga from '../../assets/yoga.jpg'
import meditation from '../../assets/meditation.jpg'
import deep_breathing from '../../assets/deep_breathing.jpg'
import tai_chi from '../../assets/tai_chi.jpg'
import walking from '../../assets/walking.png'
import swimming from '../../assets/swimming.jpg'
import music from '../../assets/music.jpg'
import cycling from '../../assets/cycling.jpg'
import jogging from '../../assets/jogging.jpg'
import dancing from '../../assets/dancing.jpg'
import strtching from '../../assets/strtching.jpg'
import boxing from '../../assets/boxing.jpg'
import hydration from '../../assets/hydration.jpg'



function Questionnaire() {
  const [stressLevel, setStressLevel] = useState(5);
  const [sleepQuality, setSleepQuality] = useState('fair');
  const [activityLevel, setActivityLevel] = useState('sometimes');
  const [dietBalance, setDietBalance] = useState('yes');
  const [timeManagement, setTimeManagement] = useState('good');
  const [mood, setMood] = useState('');
  const [exerciseSuggestions, setExerciseSuggestions] = useState([]);

  const assessMood = () => {
    // Determine mood based on various factors
    if (stressLevel <= 3 && sleepQuality === 'excellent' && activityLevel === 'regularly' && dietBalance === 'yes' && timeManagement === 'excellent') {
      setMood('Relaxed');
    } else if ((stressLevel <= 7 && stressLevel > 3) || (sleepQuality === 'good' || sleepQuality === 'fair') && (activityLevel === 'sometimes' || activityLevel === 'regularly') && dietBalance === 'yes' && (timeManagement === 'good' || timeManagement === 'excellent')) {
      setMood('Moderate');
    } else {
      setMood('Stressed');
    }

    // Set exercise suggestions based on mood
    switch (mood) {
      case 'Relaxed':
        setExerciseSuggestions([
          { name: 'Yoga', image:yoga},
          { name: 'Meditation', image: meditation },
          { name: 'Deep Breathing Exercises', image: deep_breathing },
          { name: 'Tai Chi', image: tai_chi }
        ]);
        break;
      case 'Moderate':
        setExerciseSuggestions([
          { name: 'Walking', image: walking },
          { name: 'Swimming', image: swimming },
          { name: 'Listening to Calming Music', image: music },
          { name: 'Cycling', image: cycling}
        ]);
        break;
      case 'Stressed':
        setExerciseSuggestions([
          { name: 'Jogging', image: jogging },
          { name: 'Dancing', image: dancing },
          { name: 'Stretching', image: strtching },
          { name: 'Boxing', image: boxing },
        ]);
        break;
      default:
        setExerciseSuggestions([{name: 'Exercise regularly and stay hydrated!', image: hydration}]);
        break;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="stressContainer">
        <h1>Stress Assessment & Mood Exercise Suggestions</h1>
        <div id="questionnaire">
          <h2>Stress Assessment Questionnaire</h2>
          <p>How often do you feel stressed?</p>
          <input type="range" min="1" max="10" value={stressLevel} onChange={(e) => setStressLevel(e.target.value)} />
          <p>How well do you sleep?</p>
          <select value={sleepQuality} onChange={(e) => setSleepQuality(e.target.value)}>
            <option value="poor">Poor</option>
            <option value="fair">Fair</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
          </select>
          <p>How often do you engage in physical activity?</p>
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="none">None</option>
            <option value="rarely">Rarely</option>
            <option value="sometimes">Sometimes</option>
            <option value="regularly">Regularly</option>
          </select>
          <p>Do you have a balanced diet?</p>
          <select value={dietBalance} onChange={(e) => setDietBalance(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <p>How well do you manage your time?</p>
          <select value={timeManagement} onChange={(e) => setTimeManagement(e.target.value)}>
            <option value="poor">Poor</option>
            <option value="fair">Fair</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
          </select>
          <button onClick={assessMood}>Assess Mood</button>
        </div>
        <div id="moodResult" style={{ display: mood ? 'block' : 'none' }}>
          <h2>Your Mood: {mood}</h2>
          <h3>Exercise Suggestions:</h3>
          <div className="exerciseImages">
            {exerciseSuggestions.map((exercise, index) => (
              <div key={index} className="exerciseCard">
                <img src={exercise.image} alt={exercise.name} />
                <p>{exercise.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;