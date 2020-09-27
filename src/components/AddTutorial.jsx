/*
 * @Author: hiyan
 * @Date: 2020-09-27 16:47:13
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-27 18:34:48
 */

import React, { useState } from "react";
import TutorialHttp from "../services/TutorialHttp";

const AddTutorial = () => {
  const [tutorial, setTutorial] = useState(initTutorialState);
  const [submitted, setSubmitted] = useState(false);
  const initTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };

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
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const initTutorial = () => {
    setTutorial(initTutorialState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h2>You have submitted!</h2>
          <button onClick={initTutorial}>New Tutorial</button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input name="title" className="form-control"></input>
            <button onClick={saveTutorial}>提交</button>
            <button type="reset">重置</button>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input name="title" className="form-control"></input>
            <button onClick={saveTutorial}>提交</button>
            <button type="reset">重置</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddTutorial;
