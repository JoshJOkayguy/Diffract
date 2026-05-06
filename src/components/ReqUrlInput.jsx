// TODO validate text as URL
function ReqUrlInput({id}) {
    return(
        <input aria-label={"URL for Request " + id} type="text" className="bg-bg-surface border border-border p-2 rounded-md w-full"></input>
    )
}

export default ReqUrlInput