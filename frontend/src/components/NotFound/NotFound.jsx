const NotFound = () => {
    return (
        <div className="flex justify-center items-center mt-[15%]">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">Опаньки!</h1>
                <p className="text-2xl text-gray-600 mb-8">Невозможно найти нужную страницу.</p>
                <div className="flex justify-center items-center">
                    <div className="h-10 w-10 bg-slate-600 rounded-full animate-ping mx-3"></div>
                    <div className="h-10 w-10 bg-slate-600 rounded-full animate-ping mx-3"></div>
                    <div className="h-10 w-10 bg-slate-600 rounded-full animate-ping mx-3"></div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
