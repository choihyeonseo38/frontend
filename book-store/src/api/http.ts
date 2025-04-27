import axios, { AxiosRequestConfig } from 'axios';


const BASE_URL = 'http://localhost:9999';
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: DEFAULT_TIMEOUT,
        headers: {
            "content-type": "application/json",
        },
        withCredentials: true,
        ...config,
    });

    axiosInstance.interceptors.request.use(
        (config) => {
            // 여기서 요청 전에 config를 수정할 수 있음
            return config; // 요청 보내기 전에 설정을 마친 후 config를 반환
        },
        (error) => {
            return Promise.reject(error); // 요청 오류 처리
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            return response; // 정상 응답 처리
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export const httpClient = createClient();
