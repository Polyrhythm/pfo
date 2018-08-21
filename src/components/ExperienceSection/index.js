import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import lightformLogo from '../../assets/images/experience/lightform.svg'
import siliconLogo from '../../assets/images/experience/silicon_studio.svg'
import spectrumLogo from '../../assets/images/experience/spectrum.webp'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={siliconLogo}
            colour='#fff'
            title='Silicon Studio'
            link='https://www.siliconstudio.co.jp/'
            timeperiod='Present'
            subtitle={`AAA in-house engine development and concept artist on demo team. C++, HLSL/GLSL are the primary languages used.`}
          />

          <ExperienceUnit
            logo={lightformLogo}
            colour='#fff'
            title='Lightform'
            link='https://www.lightform.com/'
            timeperiod=''
            subtitle={`Computer vision and hardware AR startup. I was responsible for graphics programming.`}
          />

          <ExperienceUnit
            logo={spectrumLogo}
            colour="#333"
            title='CG Spectrum Concept Art Course'
            link='https://www.cgspectrum.edu.au/online-courses/concept-art-course'
            timeperiod='Present'
            subtitle={`Enrolled in the Advanced Concept Art + Illustration program at CG Spectrum.`}
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
