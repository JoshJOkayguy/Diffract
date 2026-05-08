// TODO validate text as URL
function ReqUrlInput({id, placeholder}) {
    return(
        <input aria-label={"URL for Request " + id} type="text" placeholder={placeholder} className="bg-bg-surface border border-border p-2 rounded-md w-full placeholder-text-muted"></input>
    )
}

export default ReqUrlInput