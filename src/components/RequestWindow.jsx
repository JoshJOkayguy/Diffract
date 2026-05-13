import ReqMethodSelector from './ReqMethodSelector'
import ReqUrlInput from './ReqUrlInput'
import SendRequestButton from './SendRequestButton'
import ReqBodyInput from './ReqBodyInput'

import { useState } from 'react'

function RequestWindow({id, state}) {
    const [requestMethod, setRequestMethod] = useState('get')
    const [requestUrl, setRequestUrl] = useState(null)
    const [requestBody, setRequestBody] = useState(null)

    return(
        <section className="flex flex-col px-4 py-8 gap-4" aria-labelledby={"request-heading-" + id}>
            <div className="flex flex-row items-center gap-4">
                <h2 id={"request-heading-" + id} className="text-sm font-light text-text-muted text-nowrap">REQUEST {id}</h2>
                <ReqMethodSelector id={id} state={setRequestMethod}></ReqMethodSelector>
            </div>
            <div className="flex flex-row gap-4">
                <ReqUrlInput placeholder={"api.example.com/v1/test"} id={id} state={setRequestUrl}></ReqUrlInput>
                <SendRequestButton id={id} method={requestMethod} url={requestUrl} body={requestBody} setResState={state}></SendRequestButton>
            </div>
            <label htmlFor={"body-" + id} className="text-sm font-light text-text-muted">Body</label>
            <ReqBodyInput id={id} state={setRequestBody}></ReqBodyInput>
        </section>
    )
}

export default RequestWindow