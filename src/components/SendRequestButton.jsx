import ActionButton from './ActionButton';

import axios from 'axios'

function SendRequestButton({id, method, url, body, setResState}) {
    async function sendRequest() {
        if (!url || !method) return

        // Send an axios request through the local proxy to avoid CORS issues
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:3001/proxy',
            data: {
                method: method,
                url: url,
                data: body ?? "",
                headers: {
                    'Content-Type': 'application/json',
                }
            },
            validateStatus: () => true,
        });

        // TODO decide how to handle & display errors in the request and response
        // Update the responseA and responseB state variables with the response data
        setResState(response)
    }

    return (
        <ActionButton text="Send" icon={null} onClick={sendRequest}></ActionButton>
    )
}

export default SendRequestButton;