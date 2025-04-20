import { IoSettingsOutline } from "react-icons/io5";
import Settings from "./footer-components/footer-settings";
import Account from "./footer-components/footer-account";

export default function Footer() {
    const name = "Sigma Skibidi Rizz"

    return (
        <>
            <div className="justify-center w-full flex flex-col gap-6">
                <Settings icon={<IoSettingsOutline  className="w-6 h-6" />} title="Settings" />
                <Account name={name} color="violet" />
            </div>
        </>
    )
}