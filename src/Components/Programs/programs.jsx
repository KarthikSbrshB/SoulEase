import React from 'react'
import './programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_4 from '../../assets/program-4.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'




const programs = () => {
  return (
    <div className='programs'>

      <div className="programs1">

        <div className="program">
          <img src={program_1} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Write Journal</p>
          </div>
        </div>

        <div className="program">
          <img src={program_2} alt="" />
          <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Stress Assessment Questionnaire</p>
          </div>
        </div>

      </div>

      <div className="programs2">
        
        <div className="program">
          <img src={program_3} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Emotion Detection</p>
          </div>
        </div>

        <div className="program">
          <img src={program_4} alt="" />
          <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Affirmations</p>
          </div>
        </div>

      </div>

    </div>


  )
}

export default programs
