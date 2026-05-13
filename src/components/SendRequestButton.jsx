import ActionButton from './ActionButton';

import axios from 'axios'

function SendRequestButton({id, method, url, body, setResState}) {
    async function sendRequest() {
        if (!url || !method) return

        // Send an axios request to the specified endpoint with the provided body
        const response = await axios({
            method: method,
            url: url,
            data: body ?? "",
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        });

        // Update the responseA and responseB state variables with the response data
        setResState(response)
    }

    return (
        <ActionButton text="Send" icon={null} onClick={sendRequest}></ActionButton>
    )
}

export default SendRequestButton;