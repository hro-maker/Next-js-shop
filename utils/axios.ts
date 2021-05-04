import axios from "axios";

let token=""
if(process.browser){
    token=JSON.parse(localStorage.getItem("token"))
}
export  const axiosinstance=axios.create({
 baseURL:"http://localhost:7000",
 headers:{
    Authorization:`Bearer ${token}`
 }
})
// axiosinstance.interceptors.response.use(
//     (res) => {
//       return res;
//     },
//     (error) => {
//       console.log("error from axiosssssssssssssssss",error);
//       return Promise.reject(error);
//     }
//   );