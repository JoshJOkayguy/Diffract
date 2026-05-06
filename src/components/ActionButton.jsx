function ActionButton({text, icon, onClick}) {
    return (
        <button onClick={onClick} className="flex items-center gap-2 rounded-md cursor-pointer border border-border py-2 px-4 hover:bg-bg-elevated transition-all duration-100">
            {icon}
            {text}
        </button>
    )
}

export default ActionButton