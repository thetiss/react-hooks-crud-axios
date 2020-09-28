/*
 * @Author: hiyan
 * @Date: 2020-09-27 16:47:13
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-28 11:36:48
 */

import React, { useState } from "react";
import TutorialHttp from "../services/TutorialHttp";

const AddTutorial = () => {
  const initTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };
  const [tutorial, setTutorial] = useState(initTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputValueChange = (e) => {
    const { name, value } = e.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    const data = {
      title: tutorial.title,
      description: tutorial.description,
    };
    TutorialHttp.addTutorial(data)
      .then((response) => {
        setTutorial({
          id: response.data.data.id,
          title: response.data.data.title,
          description: response.data.data.description,
          published: response.data.data.published,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const initializeTutorial = () => {
    setTutorial(initTutorialState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h2>You have submitted!</h2>
          <button onClick={initializeTutorial}>New Tutorial</button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={tutorial.title}
              onChange={handleInputValueChange}
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={tutorial.description}
              onChange={handleInputValueChange}
              className="form-control"
            ></input>
            <button
              type="submit"
              onClick={saveTutorial}
              className="btn btn-success"
            >
              提交
            </button>
            <button
              type="reset"
              onClick={initializeTutorial}
              className="btn btn-secondary m-2"
            >
              重置
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddTutorial;
