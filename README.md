# react-hooks-crud-web-api

# Introduction

本文旨在学会通过Axios实现web API CRUD。目的有：

1. 作为前端入门的自我上岗面试题
2. 未来博客的示例代码，同时开源
3. 将来redux，router等新技术的基础版

## Technology

In this tutorial, I will show you how to build a React Hooks CRUD Application to consume Web API with Axios, display and modify data with Router & Bootstrap.

~~~json
  "axios": "^0.20.0",

  "bootstrap": "^4.4.1",

  "react": "^16.13.1",

  "react-dom": "^16.13.1",

  "react-router-dom": "^5.1.2",
~~~

`api.py`

REST API接口要通过python脚本运行一个本地服务,才可让axios去操作。

~~~cmd
C:\Users\chenh\Desktop\react\production>python api.py
chrome
http://localhost:8008/tutorials
or 
C:\Users\chenh>curl -i http://localhost:8008/tutorials
~~~



<img src="C:\Users\chenh\Desktop\react\1 project\0 img\image-20200927195423039.png" alt="image-20200927195423039" style="zoom: 67%;" />



## Architecture(without db)

![react-hooks-crud-axios-api-example-components](https://bezkoder.com/wp-content/uploads/2020/04/react-hooks-crud-axios-api-example-components.png)

## Architecture(with Postgresql)

![react-node-express-postgresql-crud-example-architecture](https://bezkoder.com/wp-content/uploads/2020/03/react-node-express-postgresql-crud-example-architecture.png)

# Coding

## Main screenshots

![react-hooks-crud-axios-api-example-find-by-field](https://bezkoder.com/wp-content/uploads/2020/04/react-hooks-crud-axios-api-example-find-by-field.png)

## Web API lists

| Methods | Urls                           | Actions                                           |
| :------ | :----------------------------- | :------------------------------------------------ |
| GET     | /api/tutorials                 | retrieve all Tutorials                            |
| GET     | /api/tutorials/:id             | retrieve a Tutorial by `:id`                      |
| POST    | /api/tutorials                 | create new Tutorial                               |
| PUT     | /api/tutorials/:id             | update a Tutorial by `:id`                        |
| DELETE  | /api/tutorials/:id             | delete a Tutorial by `:id`                        |
| DELETE  | /api/tutorials                 | delete all Tutorials                              |
| GET     | /api/tutorials?title=[keyword] | find all Tutorials which title contains `keyword` |
|         |                                |                                                   |





## Project Structure



## Step 1 — index.js



## Step 2 — app.js



## Step 3 — http-common.js



## Step 4 — TutorialHttp.js

在本项目中`TutorialHttp.js`用于定义Rest API操作的js.

We call axios (imported as http) `get`, `post`, `put`, `delete` method corresponding to HTTP Requests: GET, POST, PUT, DELETE to make CRUD Operations.

## Step 5 — AddTutorial.jsx

feat:

1. 判断提交状态是否为true，若是，则提示"已提交"，显示`Add Tutorial`按钮用于再新增操作。若否，则展示新增turotial界面。
2. 新增操作只需在2个文本框输入title(must have)，description(optional)，功能按钮有：submit、 reset。
3. [选择用antd的modal和form组件。]
4. 

## Step 6 — TutorialList.jsx



# Conclusion

# Ref

## 1 [`参考blog & github`](https://bezkoder.com/react-hooks-crud-axios-api/)

[local code dir from github ](C:\Users\chenh\Desktop\react\demo\0 github\react-hooks-crud-web-api)

[local code dir](C:\Users\chenh\Desktop\react\demo\react-hooks-crud-web-api)

[hiyan github](https://github.com/thetiss/react-hooks-crud-web-api.git)

2 https://reactrouter.com/web/guides/quick-start

## 2 [`full stack参考blog`](https://bezkoder.com/react-node-express-postgresql/)

## 3 [`axios API`](https://www.npmjs.com/package/axios)



# RoadMap

## 0.0.1-alpha.2

1. `A` 
2. 

## 0.0.1-alpha.1

1. `A` 初始化版