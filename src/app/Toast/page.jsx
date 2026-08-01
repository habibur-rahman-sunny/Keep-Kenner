import { ToastContainer } from "react-toastify";


const ToastPage = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            className="mt-16"
        />
    );
};

export default ToastPage;