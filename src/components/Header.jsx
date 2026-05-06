import {FileDiff, Plus} from 'lucide-react'
import ActionButton from './ActionButton.jsx'

function Header() {
    return (
        <header className="bg-bg-surface border-b border-border py-4 px-8 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-4">
                <FileDiff aria-hidden="true" className="bg-accent rounded-md p-1"></FileDiff>
                <h1 className="font-bold text-2xl">Diffract</h1>
            </div>

            <div className="flex flex-row gap-4">
                <ActionButton text="New" icon={<Plus size={15}></Plus>}></ActionButton>
            </div>
        </header>
        
    )
}

export default Header