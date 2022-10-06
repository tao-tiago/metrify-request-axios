import { AxiosInstance } from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    meta?: {
      unitTime: string;
      beginTime: number;
      finishTime: number;
      durationTime: number;
    };
  }
}

export default (instance: AxiosInstance) => {

  // Add a request interceptor
  instance.interceptors.request.use((config) => {

    const meta = {
      unitTime: "milliseconds",
      beginTime: new Date().getTime()
    }

    Object.assign(config, { meta });

    return config;
  }, (error) => Promise.reject(error));

  // Add a response interceptor
  instance.interceptors.response.use((response) => {

    const beginTime = response.config.meta.beginTime;
    const finishTime = new Date().getTime();
    const durationTime = finishTime - beginTime;

    Object.assign(response.config.meta, { finishTime, durationTime });

    return response;
  }, (error) => Promise.reject(error));
};

