import { GlobalContext } from "../Context/GlobalContextProvider"
import { useContext } from "react";

function useGlobal() {
    return useContext(GlobalContext);
}

export default useGlobal
