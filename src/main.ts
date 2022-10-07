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

class Metric {
  private unitTime: string;
  private beginTime: number;

  init() {
    this.unitTime = "milliseconds"
    this.beginTime = new Date().getTime()
  }

  getMeta() {
    const unitTime = this.unitTime;
    const beginTime = this.beginTime;
    const finishTime = new Date().getTime();
    const durationTime = finishTime - beginTime;

    return {
      unitTime,
      beginTime,
      finishTime,
      durationTime
    }
  }
}

export default (instance: AxiosInstance) => {

  const metrics = new Metric();

  // Add a request interceptor
  instance.interceptors.request.use((config) => {

    metrics.init();

    return config;
  }, (error) => Promise.reject(error));

  // Add a response interceptor
  instance.interceptors.response.use((response) => {

    const meta = metrics.getMeta();
    Object.assign(response.config, { meta });

    return response;
  }, (error) => {

    const meta = metrics.getMeta();
    Object.assign(error.config, { meta });

    return Promise.reject(error)
  });
};

