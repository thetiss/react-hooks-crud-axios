/*
 * @Author: hiyan
 * @Date: 2020-09-27 16:47:05
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-28 20:08:02
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "umi-request";
import TutorialHttp from "../services/TutorialHttp";

const TutorialList = () => {
  const [tutorialList, setTutorialList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentTutorial, setCurrentTutorial] = useState(
    // tutorialList[currentIndex]
    null
  );
  const [searchTitle, setSearchTitle] = useState("");
  const handleInputValueChange = (e) => {
    setSearchTitle(e.target.value);
  };
  const findTitleByTitle = async () => {
    await TutorialHttp.findTutorialByTitle(searchTitle)
      .then((response) => {
        setTutorialList(response.data.data);
        //console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    findTitleByTitle();
  }, [searchTitle]);

  const getAllTutorials = async () => {
    await TutorialHttp.getAllTutorials()
      .then((response) => {
        setTutorialList(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getAllTutorials();
  }, []);
  return (
    <div className="list row">
      {/* a search bar for finding tutorial by title   */}
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            name="searchValue"
            value={searchTitle}
            onChange={handleInputValueChange}
            placeholder="请输入标题名"
            className="form-control"
          ></input>
        </div>
        <div className="input-group-append">
          <button
            type="submit"
            onClick={findTitleByTitle}
            className="btn btn-outline-secondary"
          >
            查找
          </button>
        </div>
      </div>
      {/* a tutorials array displayed as a list  below the search bar  */}
      <div className="col-md-6">
        <h2>列表</h2>
        <ul className="list-group">
          {tutorialList.map((tutorial, index) => (
            <li
              key={tutorial.id}
              onClick={() => {
                setCurrentIndex(index);
                setCurrentTutorial(tutorial);
              }}
              className={
                "list-group-item" + (index === currentIndex ? "active" : "")
              }
            >
              "#{index}" {tutorial.title}
            </li>
          ))}
        </ul>
      </div>
      {/* a seleted tutorial containing details which is shown on the right and can be deleted,modified */}
      {currentIndex === -1 ? (
        <div></div>
      ) : (
        <div className="col-md-6">
          <h2>tutorial details</h2>
          <div>
            <label>
              <strong>Title:</strong>
            </label>{" "}
            {currentTutorial.title}
          </div>
          <div>
            <label>
              <strong>Description:</strong>
            </label>{" "}
            {currentTutorial.description}
          </div>
          <div>
            <label>
              <strong>Published:</strong>
            </label>{" "}
            {currentTutorial.published}
          </div>
          {/* 编辑功能通过路由跳转 */}
          <Link
            to={"/tutorials/" + currentTutorial.id}
            className="badge badge-warning"
          >
            编辑
          </Link>
        </div>
      )}
    </div>
  );
};
export default TutorialList;
