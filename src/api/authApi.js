import axios from "axios"

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyD8xTxSGLh9yeZyJb2zA7LwAdNCcuHrjEA",
  },
})

export default authApi
