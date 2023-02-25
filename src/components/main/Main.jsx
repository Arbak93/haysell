import React from "react";
import { Animation } from "../section1/index";
import './stayle.scss';
import { Imgs } from '../section2';
import SimpleAccordion from "../section3";
import {Carousels } from "../section4";
import { Phons } from '../section5';
import { Scool } from '../section6';
import { Blog } from "../Blog";
import { Photo } from '../slide/photo';




export  const Main = () => {


  return <div className="containers">
      <Animation/>
      <Imgs/>
      <SimpleAccordion/>
       <Carousels/>
       <Photo/>
       <Phons/>
       <Scool/>
       <Blog/>
  </div>

}


