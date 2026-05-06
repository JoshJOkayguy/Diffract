function ReqBodyInput({id}) {
    return(
        <textarea id={"body-" + id} aria-label={"Body for Request"  + id} className="bg-bg-surface border border-border p-2 rounded-md w-full h-24 resize-none"></textarea>
    )
}

export default ReqBodyInput;
