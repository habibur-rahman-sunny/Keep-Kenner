import FdProvider from "@/app/Context/context";

const Provider = ({children}) => {
    return (
        <div>
            <FdProvider>
                {children}
            </FdProvider>
        </div>
    );
};

export default Provider;