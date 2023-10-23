import React, { useEffect } from "react";
import Chapter from "../Components/Chapter";
import "../styles/Learning.css";
import { Link, Routes, Route } from "react-router-dom";
import ChapterInfo from "./ChapterInfo";
import Test from "./Test";
import axios from "axios";
import { useState } from "react";
const Learning = () => {
  
  const [data, setData] = useState(null)
  const [chapter, setChapter] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [firstResponse, secondResponse] = await Promise.all([
          axios.get("http://localhost:8000/language/getLanguageById/11"),
          axios.get("http://localhost:8000/chapter/getAllChapter"),
        ]);
        setData(firstResponse.data);
        console.log(firstResponse.data);
        setChapter(secondResponse.data);
        console.log(secondResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const comp = chapter.data((info) => (
  //   <Route
  //     path="/chapterInfo"
  //     element={<ChapterInfo />}
  //     key={info.language_content_id}
  //     title={info.chapter_title}
  //     chapterContent={info.chapter_content}
  //     question1={info.question}
  //     question2={info.question2}
  //     question3={info.question3}
  //   />
  // ));

 
  return (
    <div className="sectionSideBar">
      <div className="learning-side">
        <div className=" learning-logo-name d-flex flex-direction text-center learning-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="40"
            fill="currentColor"
            class="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
            className="back-arow ms-3"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>

          {data && data.data[0] && data.data[0].language_name}
        </div>
        <div className="text-center">
          <img
            src={data && data.data[0] && data.data[0].language_picture}
            className="learning-course-img"
            alt="no image"
          />
        </div>
        <div className="clearfix text-align-center">
          <div className="score-level"></div>
        </div>
        <Link to="/learning/chapterInfo">
          {chapter &&
            chapter.data &&
            chapter.data.map((info) => (
              <Chapter
                key={info.language_content_id}
                title={info.chapter_title}
              />
            ))}
        </Link>
        <Link to="/learning/Test">
          <Chapter />
        </Link>
      </div>
      <div className="contain">
        if()
        <ChapterInfo />
        
        {/* {chapter &&
          chapter.data &&
          chapter.data((info) => (
            <ChapterInfo
              key={info.language_content_id}
              title={info.chapter_title}
            />))} */}
         

        {/* <Routes>
        
      
          <Route path="/chapterInfo" element={<ChapterInfo />} />
          <Route path="/Test" element={<Test />} />
        </Routes> */}
      </div>
    </div>
  );
};

export default Learning;
