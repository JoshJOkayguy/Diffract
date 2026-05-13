// TODO validate text as URL
function ReqUrlInput({id, placeholder, state}) {
    return(
        <input aria-label={"URL for Request " + id} type="text" placeholder={placeholder} className="bg-bg-surface border border-border p-2 rounded-md w-full placeholder-text-muted" onChange={(e) => state(e.target.value)}></input>
    )
}

export default ReqUrlInput