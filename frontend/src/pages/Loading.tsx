import { PuffLoader } from "react-spinners";

export default function LoadingPage() {
    return (
        <PuffLoader color={"#ffffff"} size={150}>
            <span className="sr-only">Loading...</span>
        </PuffLoader>
    )
}