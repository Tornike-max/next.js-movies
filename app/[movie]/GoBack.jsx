'use client'


function GoBack() {
    return (
        <button onClick={() => document.location.href = "/"} className="py-2 px-3 bg-slate-500 transition-colors duration-200 rounded-md hover:bg-slate-400">
            Go Back
        </button>
    )
}

export default GoBack
