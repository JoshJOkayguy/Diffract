function ActionButton({text, icon, onClick}) {
    return (
        <button onClick={onClick} aria-label={text} className="flex items-center gap-2 rounded-md cursor-pointer border border-border py-2 px-4 hover:bg-bg-elevated transition-all duration-100">
            <span aria-hidden="true">{icon}</span>
            {text}
        </button>
    )
}

export default ActionButton