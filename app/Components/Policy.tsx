import Image from "next/image"
import { assets } from "@/public/frontend_assets/assets"
export const Policy = () =>{
    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 mt-20 gap-5">
                <div className="flex flex-col items-center">
                    <Image className="w-14" src={assets.exchange_icon} alt={JSON.stringify(assets.exchange_icon)} />
                    <p className="font-bold text-lg text-brown-600">Easy Exchange Policy</p>

                    <p className="text-brown-50">We offer hastle free exchange policy</p>
                </div> 
                <div className="flex flex-col items-center">
                    <Image className="w-14" src={assets.quality_icon} alt={JSON.stringify(assets.quality_icon)} />
                    <p className="font-bold text-lg text-brown-600">7 days Return</p>
                    <p className="text-brown-50">We provide 7 days free return policy</p>
                </div> 
                <div className="flex flex-col items-center">
                    <Image className="w-14" src={assets.support_img} alt={JSON.stringify(assets.support_img)} />
                    <p className="font-bold text-lg text-brown-600">Best Customer Support</p>
                    <p className="text-brown-50">We provide 24/7 customer suppor</p>
                </div> 
                
            </div>
        
        </>
    )
}