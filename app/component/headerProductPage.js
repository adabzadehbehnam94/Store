import Image from "next/image";

import leaf from "@/public/icons/leafIcon.png"
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HeaderProductPage() {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div>
                        <h1>All Products</h1>
                        <p>Discover our latest collection of high-quality products.</p>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center">
                            <Image  alt="icon" width={60} height={60} src={leaf} />
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <span >home</span>
                            <MdKeyboardArrowRight size={20} color="#bbbebe" />
                            <span>shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}