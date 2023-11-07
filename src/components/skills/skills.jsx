import React from 'react';
import './skills.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import reactImg from '../../assets/react.png';
import redux from '../../assets/redux.png';
import github from '../../assets/github.png';
import muiImg from '../../assets/mui.png';
import bootstrapImg from '../../assets/bootstrap.png';


export const Skills = () => {
  return (
    <section className='skills'>
        <div className='container'>
        <h2 className='skills__title'>My Skills</h2>
        <div className='skills__wrapper'>
            <div className='element'>
                <img className='element__img' src={html} alt="html logotip" />
                <p className='element__title'>HTML 5</p>
            </div>
            <div className='element'>
                <img className='element__img' src={css} alt="html logotip" />
                <p className='element__title'>CSS 3</p>
            </div>
            <div className='element'>
                <img className='element__img' src={js} alt="html logotip" />
                <p className='element__title'>JAVA SCRIPT</p>
            </div>
            <div className='element'>
                <img className='element__img' src={reactImg} alt="html logotip" />
                <p className='element__title'>React JS</p>
            </div>
            <div className='element'>
                <img className='element__img' src={redux} alt="html logotip" />
                <p className='element__title'>Redux</p>
            </div>
            <div className='element'>
                <img className='element__img' src={github} alt="html logotip" />
                <p className='element__title'>Github</p>
            </div>
            <div className='element'>
                <img className='element__img' src={muiImg} alt="html logotip" />
                <p className='element__title'>Material UI</p>
            </div>
            <div className='element'>
                <img className='element__img' src={bootstrapImg} alt="html logotip" />
                <p className='element__title'>Bootstrap</p>
            </div>
        </div>
        </div>
    </section>
  )
}
