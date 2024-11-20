let BASE_URL: string = "";

if (import.meta.env.DEV) {
    BASE_URL = 'http://localhost:3000/';
}

if (import.meta.env.PROD) {
    BASE_URL = "https://wap-final-project.onrender.com/";
}

export default BASE_URL;