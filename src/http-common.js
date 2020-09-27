/*
 * @Author: hiyan
 * @Date: 2020-09-27 16:46:48
 * @Last Modified by:   hiyan
 * @Last Modified time: 2020-09-27 16:46:48
 */

import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
});
