export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center w-full px-4 py-3 bg-terracota border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest hover:opacity-90 focus:bg-terracota active:bg-terracota focus:outline-none focus:ring-2 focus:ring-terracota focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}