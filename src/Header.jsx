import LWS from "../src/assets/lws-logo-en.svg"

const Header = () => {
    return (
        <div>
            <nav className="py-6 md:py-8 fixed top-0 w-full !bg-black z-50">
		<div className="container mx-auto flex items-center justify-between gap-x-6">
			{/* <!-- Logo --> */}
            
			<a href="/">
				<img className="h-[45px]" src={LWS}alt="Lws" />
			</a>
			{/* <!-- Logo Ends --> */}
		</div>
	</nav>
        </div>
    );
};

export default Header;