interface ILinkButton {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const LinkButton = ({ href, className, children }: ILinkButton) => {
  return (
    <a
      href={href}
      className={`text-white text-sm sm:text-lg 2xl:text-xl bg-studio-primary hover:bg-studio-primary-dark focus:ring-4 focus:outline-none focus:ring-studio-primary-light font-bold rounded-lg px-5 py-2.5 text-center inline-flex items-center ${
        className && className
      }`}
    >
      {children}
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  );
};

export default LinkButton;
