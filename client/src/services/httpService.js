import axios from "axios";
import { toast } from "react-toastify";
//const token = "abc123"
axios.interceptors.response.use(null, (error) => {
    const expectedError = error.response && error.response.status >= 403;
    if (expectedError) toast.error("An unexpected error occurrred.");
    return Promise.reject(error);
});
const exportedObject = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
    else: axios,
};
export default exportedObject;
