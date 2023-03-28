import React from 'react'

import './projects.css'
import gpt3 from '../../assets/gpt3.png'
import Exercises from '../../assets/exercises.png'
import { ProjectCard } from '../../components'

const Projects = () => {
  return (
    <div id='projects' className='portfolio__projects section-padding'>
      <h2 className='gradient-text'>Some Things I’ve Built</h2>
      <div className='portfolio_projects-container'>
        <ProjectCard 
          title='UX_UI_GPT3' 
          src={gpt3}
          desc='React responsible single page project. It can be adapted to devices of different screen sizes, including PCs, tablets, and mobile phones, etc. The modern interactive design style provides users with multiple interactive elements, such as buttons, sliders, dropdown menus, etc., making it easy for users to interact with the program and accomplish tasks more efficiently.'
          techs={['react', 'html', 'git', 'vsCode', 'react-icons']}
          github='https://github.com/TempleCat12/project_modern_ui_ux_gpt3'
          livePreview='https://templecat12.github.io/project_modern_ui_ux_gpt3/'
        />
        <ProjectCard 
          title='GYM_EXERCISES' 
          src={Exercises}
          desc='React api project about gym exercises. You can not only  search the exercises by muscle or equipment, but also get more details abut it. And we provide an video link to the exercise you interested.Hope this website becomes your best body management tool'
          techs={['react', 'html', 'git', 'vsCode', 'react-route', 'rapidApi']}
          github='https://github.com/TempleCat12/gym_exercises'
          livePreview='https://velvety-elf-08894c.netlify.app/'
        />
        
        <a href='https://github.com/TempleCat12?tab=repositories' target='_blank'  aria-label='redirect to github'>Find More >>> </a>
      </div>
      
    </div>
  )
}

export default Projects