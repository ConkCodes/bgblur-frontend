
function Nav() {
    return (

        <nav className="flex bg-blue-600 text-white py-3">

            <h3 className="mr-auto text-lg p-2 pl-6 font-semibold ">Background Blur</h3>

            <div className="flex items-center text-sm font-medium">
                <div>
                    <ul className="flex">
                        <li className="p-2">Landing</li>
                        <li className="p-2">Account</li>
                        <li className="p-2">Work</li>
                        <li className="p-2">Blog</li>
                        <li className="p-2">Dropdown</li>
                    </ul>
                </div>
                <div className="p-2">
                    |
                </div>
                <div>
                    <ul className="flex">
                        <li className="p-2">Log in</li>
                        <li className="p-2 pr-6">Sign up</li>
                    </ul>
                </div>
            </div>

        </nav>

    );
}

export default Nav;
