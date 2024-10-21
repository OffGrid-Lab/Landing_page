// components/Header.tsx
import Link from "next/link";

export default function Header() {
    return (

        <header className="flex flex-col  ">
            <div className=" p-4 bg-white shadow-md flex items-center container mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-lg font-semibold">
                    <img src="/logo.png" alt="Logo" className="h-8" />
                </Link>

            </div>
            <div className="flex items-center justify-between p-4 bg-white shadow-md">
                <div className="flex items-center space-x-4">

                    <nav className="space-x-6">
                        <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
                            Dashboard
                        </Link>
                        <Link href="/business-cards" className="text-gray-700 hover:text-gray-900">
                            Business Cards
                        </Link>
                        <Link href="/contacts" className="text-gray-700 hover:text-gray-900">
                            Contacts
                        </Link>
                    </nav>
                </div>
          
            </div>

        </header>
    );
}
