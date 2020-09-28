/*
 * @Author: hiyan
 * @Date: 2020-09-27 16:46:39
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-09-28 14:15:35
 */

import http from "../http-common";

// Tutorial.service用于操作tutorial访问数据
// 返回所有
const getAllTutorials = () => {
  return http.get("/tutorials");
};

// 根据Id,查找
const getTutorialById = (id) => {
  return http.get(`/tutorials/${id}`);
};

// 新增
const addTutorial = (data) => {
  return http.post("/tutorials", data);
};

// 修改
const modifyTutorial = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

// 删除
const deleteTutorial = (id) => {
  return http.delete(`/tutorials/${id}`);
};

// 批量删除
const deleteMassTutorial = (ids) => {
  return http.delete("/tutorials");
};

// 根据字段title查找
const findTutorialByTitle = (title) => {
  return http.get(`/query?title=${title}`);
};

export default {
  getAllTutorials,
  getTutorialById,
  addTutorial,
  modifyTutorial,
  deleteTutorial,
  deleteMassTutorial,
  findTutorialByTitle,
};
