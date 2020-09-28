/*
 * @Author: hiyan
 * @Date: 2020-09-27 16:47:19
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-28 20:06:31
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "umi-request";
import TutorialHttp from "../services/TutorialHttp";

const Tutorial = (props) => {
  const initTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };
  // const whatIsProps = () => {
  //   console.log(props);
  //   console.log(props.match);
  //   console.log(props.match.url);
  //   console.log(props.match.params);
  // };
  // useEffect(() => {
  //   whatIsProps();
  // }, []);
  const [currentTutorial, setCurrentTutorial] = useState(initTutorialState);
  const [tutorialList, setTutorialList] = useState();
  const getTutorialById = async (id) => {
    const getIdFromProps = props.match.params.id;
    await TutorialHttp.getTutorialById(getIdFromProps)
      .then((request) => {
        setCurrentTutorial(request.data);
        // console.log(request.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getTutorialById();
  }, []);
  // 编辑

  const [value, setValue] = useState("");
  const handleInputValueChange = (e) => {
    setValue(e.target.value);
  };
  const modifyTutorial = async (id, data) => {
    const getIdFromProps = props.match.params.id;
    await TutorialHttp.modifyTutorial(id, data)
      .then((request) => {
        setCurrentTutorial(request.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    modifyTutorial();
  }, []);
  const deleteTutorial = async (id) => {
    const getIdFromProps = props.match.params.id;
    await TutorialHttp.deleteTutorial(id)
      .then((request) => {
        setTutorialList(request.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    deleteTutorial();
  }, []);
  return (
    <div>
      <h1>...to be continue</h1>
      <div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={currentTutorial.title}
            onChange={handleInputValueChange}
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={currentTutorial.description}
            onChange={handleInputValueChange}
            className="form-control"
          ></input>
          <button
            onClick={() => {
              alert("hiyan");
            }}
            className="btn btn-success"
          >
            提交
          </button>
          <button
            type="reset"
            onClick={alert}
            className="btn btn-secondary m-2"
          >
            重置
          </button>
          <button onClick={deleteTutorial} className="badge badge-danger">
            删除
          </button>
        </div>
      </div>
    </div>
  );
};
export default Tutorial;
