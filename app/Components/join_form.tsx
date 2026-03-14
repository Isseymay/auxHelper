export default function JoinForm(){



    return(
        <form className="h-full"> 
            <div className="flex h-full flex-col rounded-lg bg-gray-50 px-12 pb-4 pt-8 items-center justify-center">
                <h1 className="join-heading mb-3 text-2xl text-black">
                    Enter Room Code
                </h1>
                <div className="relative">
                    <input className="block rounded-md text-black border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
                    id="code"
                    name="code"
                    placeholder="e.g. 123456"
                    required/>
                </div>
                    <button type="submit" className="text-black">
                        Log in    
                    </button>
                </div>
        </form>




    )
}