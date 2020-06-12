import axios from "_axios@0.19.2@axios/index"

export function request(config) {

  //实例化一个axios对象
  const axios1 = axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 5000
  });

  //axios拦截器
  //请求拦截
  axios1.interceptors.request.use(config => {

      return config
    }, err => {
      console.log(err);
    }
  );


  //响应拦截
  axios1.interceptors.response.use(res => {

      return res.data
    }, err => {
    console.log(err);
    }
  );
  return axios1(config)

}
