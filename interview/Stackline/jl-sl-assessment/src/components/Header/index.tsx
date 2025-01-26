import stacklineLogo from '@assets/stackline_logo.svg';

const Header = () => {
    return (
        <div className="bg-[#052849] text-white py-6 px-4 shadow-md">
            <a href="https://www.stackline.com/" target="_blank">
                <img
                    className="w-32 h-auto"
                    src={stacklineLogo}
                    alt="Stackline logo"
                />
            </a>
        </div>
    );
};

export default Header;
