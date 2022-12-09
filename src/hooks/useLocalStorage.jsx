import { useEffect } from "react";
import { useState } from "react";

export function useLocalStorage(intialValue, localStorageItemName) {

    const [data, setData] = useState(intialValue)

    useEffect(() => {

        localStorage.setItem(localStorageItemName, data)

    }, [data])

    return [data, setData]

}