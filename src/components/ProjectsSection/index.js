import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import physicalLogo from '../../assets/images/projects/vvvvery_physical.png'
import nodeLogo from '../../assets/images/projects/node.png'
import cameraLogo from '../../assets/images/projects/camera.svg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={physicalLogo}
            colour="#FFFFFF"
            title="VVVV physically-based pathtracer"
            link="https://github.com/Polyrhythm/vvvvery_physical"
            timeperiod="2017"
            subtitle="A GPU, physically-based pathtracer integrated with VVVV software for use by multimedia artists.
              The main focus is fast iteration and rendering beautiful images of procedurally-generated geometry."
          />
          <ExperienceUnit
            logo={nodeLogo}
            colour="#312F31"
            title="NODE Forum speaker"
            link="https://youtu.be/BKHbEWaHjcw?t=1h58m19s"
            timeperiod="2017"
            subtitle="I attended NODE forum (https://nodeforum.org/), a VVVV conference,
               to present my pathtracer and speak about how realtime rendering
               and offline rendering can co-exist. 英語で。"
          />
          <ExperienceUnit
              logo={cameraLogo}
              colour="#fff"
              title="Film photography"
              link="https://polyrhythm.github.io/photography/"
              timeperiod="2017-2018"
              subtitle={<div>I am an active film photographer mostly taking street photography around Tokyo. A blog post I did
                can be found <a href="https://www.35mmc.com/16/11/2017/5-frames-42-nikon-fe2-ryan-jones/" target="_blank">here.</a></div>}
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
