import React from "react";
import "../styles/chapterInfo.css";
import QuestionChapterInfo from "../Components/QuestionChapterInfo";
import { Link } from "react-router-dom";
const ChapterInfo = () => {
  return (
    <div className="d-flex  flex-column chapterInfo-container">
      <div className="chapterInfo-header d-flex flex-row">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
            className="back-arow ms-3"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
        </Link>
        <h3>Introduction to course figma design</h3>
      </div>
      <div className=" text-intro d-flex flex-column justify-content-center">
        <p>
          Figma is a collaborative interface design tool that’s taking the
          design world by storm. Unlike Sketch, which runs as a standalone MacOS
          app, Figma is entirely browser-based, and therefore works not only on
          Macs, but also on PCs running Windows or Linux, and even on
          Chromebooks. It also offers a web API, and it’s free! Another big
          advantage of Figma is that it allows real-time collaboration on the
          same file. When using conventional “offline” apps like Sketch and
          Photoshop, if designers want to share their work, they typically have
          to export it to an image file, then send it via email or instant
          message. In Figma, instead of exporting static images, we can simply
          share a link to the Figma file for clients and colleagues to open in
          their browser. This in itself saves significant time and inconvenience
          in a designer’s workflow. But more importantly, it means that clients
          and colleagues can interact more richly with the work, and review the
          latest version of the file.
        </p>
        <div className="fs-3">Test Your knowlede</div>
        <QuestionChapterInfo />
        <QuestionChapterInfo />
        <QuestionChapterInfo />
        <button className=" rounded-pill button-complete">
          Course Complete
        </button>
      </div>
    </div>
  );
};

export default ChapterInfo;
