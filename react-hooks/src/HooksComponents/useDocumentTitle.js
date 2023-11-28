import {useEffect} from 'react'

//Rule: for Custom Hook the first word of Hook will be use starting with small letter like as camelCasing the custom hook should start with the use like above useDocumentTitle
function useDocumentTitle(countParam) {
    useEffect(() => {
        document.title = `Count ${countParam}`
    }, [countParam])
}

export default useDocumentTitle