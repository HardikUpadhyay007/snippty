"use client";
import { useAuth } from "@clerk/nextjs";
import CodeIcon from "@mui/icons-material/Code";
import Link from "next/link";

export default function Home() {
    return (
        <div className="poppins">
            <Navbar></Navbar>
            <MidSection></MidSection>
        </div>
    );
}

function Navbar() {
    return (
        <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
            <Logo></Logo>
            <Buttons></Buttons>
        </div>
    );
}

function Logo() {
    return (
        <div className="flex gap-2 items-center">
            <div className="bg-[#1CB0F6] p-[6px] rounded-md">
                <CodeIcon sx={{ fontsize: 27, color: "white" }}></CodeIcon>
            </div>
            <div className="flex gap-1 text-[19px]">
                <span className={`font-bold text-[#1CB0F6]`}>Snippty</span>
            </div>
        </div>
    );
}

function Buttons() {
    let { userId } = useAuth();
    return (
        <div className="max-sm:w-full">
            {userId ? (
                <Link href="my-code">
                    <button className="max-sm:w-full bg-[#1CB0F6] p-[8px] px-6 text-sm text-white rounded-md">
                        Go To App
                    </button>
                </Link>
            ) : (
                <div className="flex gap-2  max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
                    <button
                        className={`max-sm:w-full bg-[#1CB0F6] p-[8px] px-6 text-sm text-white rounded-sm`}
                    >
                        Sign In
                    </button>
                    <button
                        className={`text-sm border border-[#1CB0F6] text-[#1CB0F6] hover:bg-[#1CB0F6] hover:text-white p-[8px] px-6 rounded-md`}
                    >
                        Sign In
                    </button>
                </div>
            )}
        </div>
    );
}

function MidSection() {
    return (
        <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
            <h2 className="font-bold text-2xl text-center">
                Organize Your Code Snippets
                <span className="text-[#1CB0F6]"> Efficiently!</span>
            </h2>
            <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
                Snippty is a code snippet manager that helps you organize your
                code snippets efficiently. You can create, edit, and delete
                snippets with ease.Snippty is all you need to manage your code!
            </p>
            <button
                className="block px-9 py-3 text-sm font-medium text-white transition focus:outline-none"
                type="button"
            >{`Let's get started!`}</button>
        </div>
    );
}
