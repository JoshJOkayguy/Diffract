function ResponseStatus({id, response}) {
    let statusIcon = <span className="bg-diff-added rounded-full size-2.5 inline-block"></span>

    if (!response || response.status != 200) {
        statusIcon = <span className="bg-diff-removed rounded-full size-2.5 inline-block"></span>
    }

    return (
        <p className="inline">{statusIcon} {id}: {response.status} {response.statusText} • {response.headers['x-response-time']}ms</p>
    )
}

export default ResponseStatus;