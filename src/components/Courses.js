import React from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';

import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';
import NotFound from './NotFound';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
      
    </div>
      <Route exact path='/courses' render={() => <Redirect to={`${match.path}/html`} />} />
      <Switch>
        <Route path={`${match.path}/html`} render={() => <CourseContainer data={HTMLCourses}/>}/>
        <Route path={`${match.path}/css`} render={() => <CourseContainer data={CSSCourses}/>}/>
        <Route path={`${match.path}/javascript`} render={() => <CourseContainer data={JSCourses}/>}/>
        <Route component={NotFound} />
      </Switch>
    {/* Write routes here... */}
  </div>
);

export default Courses;