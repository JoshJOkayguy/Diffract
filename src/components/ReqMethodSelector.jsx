function ReqMethodSelector({id, state}) {
    return(
        <select aria-label={"Method for Request " + id} name={"request-method-" + id} className="bg-bg-surface border border-border p-2 rounded-md w-full" onChange={(e) => state(e.target.value)}>
            <option value="get">GET</option>
            <option value="post">POST</option>
        </select>
    )
}

export default ReqMethodSelector