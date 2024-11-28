import React from 'react';
import './ProductBrands.css';

const ProductBrands = () => {
    return (
        <div className="our_brands_wrapper flex flex-col md:flex-row flex-wrap items-center justify-center gap-[70px] md:gap-[100px] p-6 3xl:p-[42px] md:max-w-[990px]">
            {/* Product 1 */}
            <a className="product-container" href="#">
                <div className="flex flex-col flex-wrap px-5 py-8 sm:p-[34px] justify-between">
                    <img
                        className="product-image w-[63%] md:w-full"
                        alt="Tedibar"
                        src="https://i.postimg.cc/9QHPzNHN/glutathione.png"
                    />
                    <img
                        className="h-7 w-7 md:h-[42px] md:w-[42px]"
                        alt="Brandsarrow"
                        src="https://www.torrentpharma.com/assets/whitearrow_b698995a15.svg"
                    />
                </div>
                <img
                    className="absolute right-0 bottom-[-16px] z-0 product-bg-image"
                    alt="CLIENT_TEDIBAR_SPOO Shampoo_MERGED (1).svg"
                    src="https://i.postimg.cc/XN9cKLXT/goa-nutrition.png"
                />
                <img
                    className="absolute right-[30px] bottom-[-2.6px] product-bg-image-2 z-10"
                    alt="Bathing bar.svg"
                    src="https://i.postimg.cc/ydpqLKf8/goa-nutu-rition-berry.png"
                />
            </a>

            {/* Product 2 */}
            <a className="product-container" href="#">
                <div className="flex flex-col flex-wrap px-5 py-8 sm:p-[34px] justify-between">
                    <img
                        className="product-image w-[65%] md:w-full"
                        alt="Shelcal"
                        src="https://i.postimg.cc/T2V36zgn/Untitled-192-x-40-px.png"
                    />
                    <img
                        className="h-7 w-7 md:h-[42px] md:w-[42px]"
                        alt="Brandsarrow"
                        src="https://www.torrentpharma.com/assets/whitearrow_b698995a15.svg"
                    />
                </div>
                <img
                    className="absolute z-10 product-bg-image-3 bottom-[13px] right-[13px]"
                    alt="shelcalImg2.png"
                    src="https://i.postimg.cc/25ssLGX0/Untitled-design-18.png"
                />
                <img
                    className="absolute product-bg-image-4 bottom-[10px] right-[82px] z-10"
                    alt="shelcalImg1.png"
                    src="https://i.postimg.cc/bNnq6G1D/goa-nutrition.png"
                />
            </a>

            {/* Additional products can be added similarly */}
        </div>
    );
};

export default ProductBrands;