import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button type='submit' disabled={pending} className='w-32 h-12 py-2 px-4 bg-zinc-900 text-gray-300 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all group hover:scale-105 disabled:scale-100'>
            {
                pending ?
                    (
                        <div className="w-5 h-5 animate-spin border-b-2 border-white rounded-full"></div>
                    )
                    :
                    (
                        <>
                            Submit <FaPaperPlane className='text-sm transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />
                            {pending && "loading"}
                        </>
                    )
            }
        </button>
    )
}
