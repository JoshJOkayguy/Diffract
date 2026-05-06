import ReqMethodSelector from './ReqMethodSelector'
import ReqUrlInput from './ReqUrlInput'
import ActionButton from './ActionButton'
import ReqBodyInput from './ReqBodyInput'

function RequestWindow({id}) {
    return(
        <section className="flex flex-col px-4 py-8 gap-4" aria-labelledby={"request-heading-" + id}>
            <div className="flex flex-row items-center gap-4">
                <h2 id={"request-heading-" + id} className="text-sm font-light text-text-muted text-nowrap">REQUEST {id}</h2>
                <ReqMethodSelector id={id}></ReqMethodSelector>
            </div>
            <div className="flex flex-row gap-4">
                <ReqUrlInput id={id}></ReqUrlInput>
                <ActionButton text="Send" icon={null}></ActionButton>
            </div>
            <label htmlFor={"body-" + id} className="text-sm font-light text-text-muted">Body</label>
            <ReqBodyInput id={id}></ReqBodyInput>
        </section>
    )
}

export default RequestWindow