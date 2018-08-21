import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          <span className="bold">Ryan Jones</span> - Graphics engineer / グラフィックスエンジニア
        </h5>

        <p className="">
          I am a graphics engineer with experience in both real-time and offline techniques. My
          professional experience includes working with public engines such as Unreal Engine 4 and custom
          in-house engines. The most interesting problems for me to solve include implementing new GPU-based
          techniques, researching new theories, and helping artists express themselves in ways that were
          previously thought impossible.<br /> <br />
      
          グラフィックスエンジニア
          カリフォルニア出身。リアルタイムとノンリアルタイムのテクニックを用いられる。
          UE4とかカスタムエンジンで仕事をしました。
          好きな一番面白い問題がGPUのテクニックです。
          その上にコンセプトアートの学生だから、アートの問題を分かりました。
          2017から、東京に住んでいる。
        </p>

        <ExperienceSection />
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
