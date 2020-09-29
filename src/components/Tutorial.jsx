/*
 * @Author: hiyan
 * @Date: 2020-09-27 16:47:19
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-29 14:54:50
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
        console.log("**********");
        console.log(request.data);
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
  // const modifyTutorial = async (id, data) => {
  //   const getIdFromProps = props.match.params.id;
  //   await TutorialHttp.modifyTutorial(id, data)
  //     .then((request) => {
  //       setCurrentTutorial(request.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  // useEffect(() => {
  //   modifyTutorial();
  // }, []);

  const deleteTutorial = async (id) => {
    const getIdFromProps = props.match.params.id;
    await TutorialHttp.deleteTutorial(id)
      .then((request) => {
        setTutorialList(request.data);
        console.log("*************");
        console.log(id);
        console.log(request.data);
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
        {/* INPUT新样式 */}
        {/* ID、TITLE、DESCRIPTION */}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              ID
            </span>
          </div>
          <input
            type="text"
            name="id"
            value={currentTutorial.id}
            onChange={handleInputValueChange}
            className="form-control"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
          </div>
          <input
            type="text"
            name="title"
            value={currentTutorial.title}
            onChange={handleInputValueChange}
            className="form-control"
          />
        </div>{" "}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Description
            </span>
          </div>
          <input
            type="text"
            name="description"
            value={currentTutorial.description}
            onChange={handleInputValueChange}
            className="form-control"
          />
        </div>
        {/* INPUT原始样式 */}
        {/* <button onClick={deleteTutorial} className="btn btn-success">
          生效
        </button>
        <button onClick={deleteTutorial} className="btn btn-secondary m-2">
          修改
        </button> */}
        <button
          onClick={deleteTutorial(currentTutorial.id)}
          className="btn btn-danger"
        >
          删除
        </button>
      </div>
      {/*结束详情展示 */}
    </div>
  );
};
export default Tutorial;
