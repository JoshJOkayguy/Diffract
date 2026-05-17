function ResponseStatus({id, response}) {
    let statusIcon = <span className="bg-diff-added rounded-full size-2.5 inline-block"></span>

    if (!response) return null

    if (response.status >= 500 && response.status <= 599) {
        statusIcon = <span className="bg-diff-removed rounded-full size-2.5 inline-block"></span>
    }
    else if (response.status >= 300 && response.status <= 499) {
        statusIcon = <span className="bg-diff-changed rounded-full size-2.5 inline-block"></span>
    }

    return (
        <p className="inline">{statusIcon} {id}: {response.status} {response.statusText} • {response.headers['x-response-time']}ms</p>
    )
}

export default ResponseStatus;