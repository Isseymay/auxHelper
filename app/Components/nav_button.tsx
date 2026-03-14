export default function Button({ children }: { children: React.ReactNode}){
    const styles = "inline-flex items-center justify-center transition-colors bg-white text-black rounded-full hover:bg-gray-400 cursor-pointer pt-[1em] pb-[1em] pr-[2.5em] pl-[2.5em]";

    return(
        <button className={`${styles}`}>
            {children}
        </button>
    );
}