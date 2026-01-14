export type ProductType = {
    productId: number;
    title: string;
    description: string;
    price: number;
    category: "phones" | "airpods" | "headsets" | "laptops" | "tv";
    image: string;
}


export const products: ProductType[] = [
    {
        "productId": 1,
        "title": "Galaxy S23 Ultra",
        "description": "Samsung flagship phone with 200MP camera and Snapdragon processor.",
        "price": 999,
        "category": "phones",
        "image": "https://m.media-amazon.com/images/I/71goZuIha-L.jpg"
    },
    {
        "productId": 2,
        "title": "iPhone 15 Pro",
        "description": "Apple's premium smartphone with A17 Bionic and titanium body.",
        "price": 1199,
        "category": "phones",
        "image": "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1759734013&width=1445"
    },
    {
        "productId": 3,
        "title": "Google Pixel 8",
        "description": "Google’s latest AI-powered smartphone with Tensor G3 chip.",
        "price": 799,
        "category": "phones",
        "image": "https://m.media-amazon.com/images/I/71r0349s3cL.jpg"
    },
    {
        "productId": 4,
        "title": "OnePlus 12",
        "description": "Powerful Android phone with 120Hz AMOLED display.",
        "price": 699,
        "category": "phones",
        "image": "https://spigen.in/cdn/shop/files/detail_web_oneplus12_ultrahybrid_01_1024x1024.jpg?v=1756704729"
    },
    {
        "productId": 5,
        "title": "Xiaomi 14 Pro",
        "description": "High-performance smartphone with Leica triple camera.",
        "price": 749,
        "category": "phones",
        "image": "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Pro-DB-709x800-1698330513.jpg"
    },
    {
        "productId": 6,
        "title": "Realme GT 5",
        "description": "5G smartphone with super-fast charging and AMOLED display.",
        "price": 499,
        "category": "phones",
        "image": "https://s.alicdn.com/@sc04/kf/H5e40bb598d2d471ea7072aa9409c58dbh.jpg"
    },
    {
        "productId": 7,
        "title": "Vivo X100 Pro",
        "description": "Premium camera phone with Zeiss optics.",
        "price": 899,
        "category": "phones",
        "image": "https://sonpixel.vn/wp-content/uploads/2024/06/vivo-x100-pro-16.webp"
    },
    {
        "productId": 8,
        "title": "Oppo Reno 11",
        "description": "Stylish phone with curved AMOLED display and portrait camera.",
        "price": 599,
        "category": "phones",
        "image": "https://qonooz.com/wp-content/uploads/2023/12/oppo_reno_11_pro_1_.png"
    },
    {
        "productId": 9,
        "title": "Motorola Edge 40",
        "description": "Slim smartphone with 144Hz pOLED display.",
        "price": 549,
        "category": "phones",
        "image": "https://sell.gameloot.in/wp-content/uploads/sites/4/2023/06/Motorola-Moto-Edge-40-8GB-RAM-256GB-Storage.jpg"
    },
    {
        "productId": 10,
        "title": "Nothing Phone 2",
        "description": "Unique smartphone with transparent design and LED glyph interface.",
        "price": 699,
        "category": "phones",
        "image": "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=20"
    },

    /* ------------ AIRPODS ------------ */

    {
        "productId": 11,
        "title": "AirPods Pro 2",
        "description": "Apple’s flagship earbuds with ANC and spatial audio.",
        "price": 249,
        "category": "airpods",
        "image": "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-airpods-pro-2nd-gen-with-magsafe-usb-c-charging-case-white-front-view.png"
    },
    {
        "productId": 12,
        "title": "AirPods 3rd Gen",
        "description": "Comfortable open-fit earbuds with great sound.",
        "price": 179,
        "category": "airpods",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlGcemosowzkslVPStaGh7EPgzBtr4Q2DHQ&s"
    },
    {
        "productId": 13,
        "title": "Samsung Galaxy Buds 2 Pro",
        "description": "Premium buds with Hi-Fi sound and ANC.",
        "price": 199,
        "category": "airpods",
        "image": "https://images.livemint.com/img/2022/10/31/original/samsung_galaxy_buds_pro_2_1667193128577.png"
    },
    {
        "productId": 14,
        "title": "Nothing Ear (2)",
        "description": "Transparent earbuds with clear sound and ANC.",
        "price": 149,
        "category": "airpods",
        "image": "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/22146392/2023/3/21/1a1fa42a-e117-478d-b031-9b0b52d8dfb41679375953803-Nothing-True-Wireless-Earbuds-9181679375953071-1.jpg"
    },
    {
        "productId": 15,
        "title": "Sony WF-1000XM5",
        "description": "Top-tier ANC earbuds with exceptional audio quality.",
        "price": 299,
        "category": "airpods",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAIrLBzd_GTev-_9YfJ3gN30s-0_ttFAdHqw&s"
    },
    {
        "productId": 16,
        "title": "JBL Tune 235NC",
        "description": "Affordable earbuds with noise cancellation and deep bass.",
        "price": 99,
        "category": "airpods",
        "image": "https://ca.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4a0495ce/01.JBL_Tune%20Beam_Product%20Image_Hero_Black.png?sw=537&sfrm=png"
    },
    {
        "productId": 17,
        "title": "Boat Airdopes 441",
        "description": "Budget-friendly earbuds with long battery life.",
        "price": 39,
        "category": "airpods",
        "image": "https://rukminim2.flixcart.com/image/300/300/khz693k0-0/headphone/n/e/m/airdopes-441-tws-ear-buds-with-iwp-technology-bluetooth-headset-original-imafxvbe35xs2hza.jpeg"
    },
    {
        "productId": 18,
        "title": "OnePlus Buds Pro 2",
        "description": "Premium earbuds tuned by Dynaudio.",
        "price": 179,
        "category": "airpods",
        "image": "https://m.media-amazon.com/images/I/71-L4JXzUPL._UF350,350_QL80_.jpg"
    },
    {
        "productId": 19,
        "title": "Realme Buds Air 5",
        "description": "Affordable TWS with strong ANC performance.",
        "price": 59,
        "category": "airpods",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1q62bjEX6OJmW6tZHhHKlalVp18OdUmtOnw&s"
    },
    {
        "productId": 20,
        "title": "Oppo Enco X2",
        "description": "Premium earbuds co-created with Dynaudio.",
        "price": 169,
        "category": "airpods",
        "image": "https://m.media-amazon.com/images/I/61pBhzkeyaL.jpg"
    },
    {
        "productId": 21,
        "title": "Sony WH-1000XM5",
        "description": "Industry-leading ANC over-ear headset.",
        "price": 399,
        "category": "headsets",
        "image": "https://in.static.webuy.com/product_images/Electronics/Headphones/4548736132580B_l.jpg"
    },
    {
        "productId": 22,
        "title": "Bose QuietComfort 45",
        "description": "Comfortable headset with amazing noise cancellation.",
        "price": 349,
        "category": "headsets",
        "image": "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45-LE_Left-Angle_1200x1022_Midnight-Blue_RGB.png/jcr:content/renditions/cq5dam.web.1920.1920.png"
    },
    {
        "productId": 23,
        "title": "JBL Quantum 800",
        "description": "Gaming headset with surround sound.",
        "price": 199,
        "category": "headsets",
        "image": "https://www.bhphotovideo.com/images/fb/jbl_jblquantum800blkam_quantum_800_wireless_over_ear_1562222.jpg"
    },
    {
        "productId": 24,
        "title": "Razer BlackShark V2",
        "description": "Esports-grade gaming headset.",
        "price": 129,
        "category": "headsets",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdcngknR-1N7QzfOdbxI53adjytDz18hn-Q&s"
    },
    {
        "productId": 25,
        "title": "Logitech G Pro X",
        "description": "Pro-level gaming headset with Blue VO!CE mic.",
        "price": 149,
        "category": "headsets",
        "image": "https://compumise.in/wp-content/uploads/2023/03/pro-headset-gallery-1-2.webp"
    },
    {
        "productId": 26,
        "title": "HyperX Cloud II",
        "description": "Legendary gaming headset with comfort design.",
        "price": 99,
        "category": "headsets",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3jnFTEfw7QxRACtNcgcqkuQYunCYoYmvSA&s"
    },
    {
        "productId": 27,
        "title": "Boat Rockerz 550",
        "description": "Affordable over-ear Bluetooth headset.",
        "price": 29,
        "category": "headsets",
        "image": "https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/246220_0_nnlgdz.png"
    },
    {
        "productId": 28,
        "title": "Sennheiser HD 450BT",
        "description": "Premium wireless headset with balanced sound.",
        "price": 149,
        "category": "headsets",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0gJuHEanLUb83mzt9uhBy2W7d8lSb50_sg&s"
    },
    {
        "productId": 29,
        "title": "Apple AirPods Max",
        "description": "High-end over-ear headphones by Apple.",
        "price": 549,
        "category": "headsets",
        "image": "https://images-cdn.ubuy.co.in/67c811aeed1a635a035ac2db-apple-airpods-max-wireless-over-ear.jpg"
    },
    {
        "productId": 30,
        "title": "Skullcandy Crusher Evo",
        "description": "Bass-heavy headset with adjustable haptics.",
        "price": 199,
        "category": "headsets",
        "image": "https://m.media-amazon.com/images/I/71R7F1oAauS._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "productId": 31,
        "title": "MacBook Air M2",
        "description": "Ultra-thin laptop with Apple M2 chip.",
        "price": 1199,
        "category": "laptops",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_DZNYBhwh1hW6rsBJupPDleDImW2ip-ALQ&s"
    },
    {
        "productId": 32,
        "title": "Dell XPS 13",
        "description": "Compact premium laptop with InfinityEdge display.",
        "price": 999,
        "category": "laptops",
        "image": "https://exceldisc.com/_next/image?url=https%3A%2F%2Fapiv2.exceldisc.com%2Fmedia%2F39817%2Fdell-xps-13-plus-9320.webp&w=3840&q=75"
    },
    {
        "productId": 33,
        "title": "HP Spectre x360",
        "description": "2-in-1 laptop with touchscreen and premium build.",
        "price": 1299,
        "category": "laptops",
        "image": "https://m.media-amazon.com/images/I/51mJwi0IuGL.jpg"
    },
    {
        "productId": 34,
        "title": "Lenovo ThinkPad X1 Carbon",
        "description": "Business laptop with robust build and strong performance.",
        "price": 1399,
        "category": "laptops",
        "image": "https://millenniuminfosys.com/wp-content/uploads/2024/10/Lenovo-ThinkPad-X1-Carbon-Gen-11-Core-i7-PC.png"
    },
    {
        "productId": 35,
        "title": "Asus ROG Strix G15",
        "description": "High-performance gaming laptop with RGB.",
        "price": 1499,
        "category": "laptops",
        "image": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-55116457/asus_asus_rog_strix-g15_g513rw-r97rd6g-o_r9-6900hx_32gb_1tb_rtx3070ti_300hz_full01_kw9wlxyt.jpg"
    },
    {
        "productId": 36,
        "title": "Acer Nitro 5",
        "description": "Affordable gaming laptop with strong performance.",
        "price": 899,
        "category": "laptops",
        "image": "https://images.fravega.com/f300/971882bccf1532157dfc3dcb3a89a629.jpg.webp"
    },
    {
        "productId": 37,
        "title": "MSI GF63 Thin",
        "description": "Lightweight gaming laptop with great thermals.",
        "price": 799,
        "category": "laptops",
        "image": "https://asset.msi.com/resize/image/global/product/product_0_20180523133308_5b04fd14a6b12.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
    },
    {
        "productId": 38,
        "title": "Samsung Galaxy Book 3",
        "description": "Slim laptop with AMOLED display and fast performance.",
        "price": 1099,
        "category": "laptops",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/435674094/VD/WA/XR/78380921/refurbished-samsung-galaxy-book2-intel-12th-gen-core-i5-laptop-500x500.jpg"
    },
    {
        "productId": 39,
        "title": "LG Gram 14",
        "description": "Ultra-light productivity laptop.",
        "price": 1199,
        "category": "laptops",
        "image": "https://www.lg.com/content/dam/channel/wcms/uk/images/laptops/14Z90R-K_AA78A1_EEUK_UK_C/gallery/dz-7.jpg"
    },
    {
        "productId": 40,
        "title": "Microsoft Surface Laptop 5",
        "description": "Elegant laptop with touch display and premium design.",
        "price": 1399,
        "category": "laptops",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KIL1RBrJBKXP4yWWROuHP35vqeyxlomlEw&s"
    },
    {
        "productId": 41,
        "title": "Samsung QLED Q70",
        "description": "4K smart QLED TV with vibrant colors.",
        "price": 799,
        "category": "tv",
        "image": "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:460/samsung/494410282/5/S4O8X_CjiF-y7mGJUc56-L-SAMSUNG-65Q70D-LED-TV-494410282-i-6-1200Wx1200H.jpeg"
    },
    {
        "productId": 42,
        "title": "LG OLED C3",
        "description": "Premium OLED TV with infinite contrast.",
        "price": 1499,
        "category": "tv",
        "image": "https://www.lg.com/content/dam/channel/wcms/in/images/tv/feature/oled2023/TV-OLED-C3-18-SC9-Soundbar-Mobile.jpg"
    },
    {
        "productId": 43,
        "title": "Sony Bravia X90K",
        "description": "4K LED TV with full-array local dimming.",
        "price": 1299,
        "category": "tv",
        "image": "https://www.sony-asia.com/image/b7eff4f2d53110d70e0328607c43ddd2?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9"
    },
    {
        "productId": 44,
        "title": "TCL 6-Series",
        "description": "High-value 4K mini-LED smart TV.",
        "price": 699,
        "category": "tv",
        "image": "https://electronicparadise.in/cdn/shop/files/TCL654KUHD.jpg?v=1702715385&width=1406"
    },
    {
        "productId": 45,
        "title": "Hisense U7K",
        "description": "Feature-rich 4K ULED TV.",
        "price": 599,
        "category": "tv",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkGq2MlKgY_7hFl6iyDz-kLTtMIvoOAsF2g&s"
    },
    {
        "productId": 46,
        "title": "Xiaomi Mi TV 5X",
        "description": "Affordable 4K TV with Dolby Vision.",
        "price": 499,
        "category": "tv",
        "image": "https://i03.appmifile.com/99_item_in/19/11/2024/52c446b2235854ec15cdb27188c17390.png"
    },
    {
        "productId": 47,
        "title": "OnePlus TV Q1",
        "description": "Premium 4K QLED TV with deep colors.",
        "price": 899,
        "category": "tv",
        "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/OnePlus_TV.jpeg"
    },
    {
        "productId": 48,
        "title": "Vu Premium 4K",
        "description": "Budget-friendly 4K smart TV.",
        "price": 399,
        "category": "tv",
        "image": "https://5.imimg.com/data5/SELLER/Default/2022/8/DD/GA/FN/130537819/61rgmmplqrl-sl1500-.jpg"
    },
    {
        "productId": 49,
        "title": "Amazon Fire TV Omni",
        "description": "Smart TV with built-in Fire OS.",
        "price": 349,
        "category": "tv",
        "image": "https://m.media-amazon.com/images/G/01/kindle/journeys/LkGitQZYEV2doKnutaIuNBPA9u5b2uDYOhBuBOBpPY43D/NjE1YmM0OGEt._CB594206091_.png"
    },
    {
        "productId": 50,
        "title": "Redmi Smart TV X55",
        "description": "Value-for-money 4K TV with HDR support.",
        "price": 449,
        "category": "tv",
        "image": "https://i0.wp.com/sivmor.com/wp-content/uploads/2024/01/2.jpg?fit=500%2C500&ssl=1"
    }
];

