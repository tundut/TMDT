// Data product
const productsData = [
  //cg1
  {
    id: "cg1-1",
    name: "iPhone 16 Pro Max 256GB",
    category: "cg1",
    price: 78,
    image: "img/products/cg1/iphone-16-promax.jpg"
  },
  {
    id: "cg1-2",
    name: "Xiaomi 14T Pro 512GB",
    category: "cg1",
    price: 78,
    image: "img/products/cg1/xiaomi-14t-pro.jpg"
  },
  {
    id: "cg1-3",
    name: "Samsung Galaxy S25 256GB",
    category: "cg1",
    price: 78,
    image: "img/products/cg1/samsung-galaxy-s25.jpg"
  },
  {
    id: "cg1-4",
    name: "OPPO Reno10 Pro+ 256GB",
    category: "cg1",
    price: 78,
    image: "img/products/cg1/oppo-reno10-pro-plus.jpg"
  },
  {
    id: "cg1-5",
    name: "Xiaomi 14T 512GB",
    category: "cg1",
    price: 78,
    image: "img/products/cg1/xiaomi-14t.jpg"
  },
  {
    id: "cg1-6",
    name: "Samsung Galaxy S25 Ultra 256GB",
    category: "cg1",
    price: 78,
    image: "img/products/cg1/samsung-galaxy-s25-ultra.jpg"
  },
  {
    id: "cg1-7",
    name: "iPhone 15 128GB",
    category: "cg1",
    price: 78,
    image: "img/products/cg1/iphone-15.jpg"
  },
  {
    id: "cg1-8",
    name: "Samsung Galaxy S24 FE 128GB",
    category: "cg1",
    price: 78,
    image: "img/products/cg1/samsung-galaxy-s24-fe.jpg"
  },

  //cg2
  {
    id: "cg2-1",
    name: "Macbook Air M2 2024 256GB",
    category: "cg2",
    price: 78,
    image: "img/products/cg2/macbook-air-m2.jpg"
  },
  {
    id: "cg2-2",
    name: "Macbook Air M4 2025 256GB",
    category: "cg2",
    price: 78,
    image: "img/products/cg2/macbook-air-m4.jpg"
  },
  {
    id: "cg2-3",
    name: "Laptop ASUS Vivobook S 16 OLED",
    category: "cg2",
    price: 78,
    image: "img/products/cg2/asus-vivobook.jpg"
  },
  {
    id: "cg2-4",
    name: "Laptop HP Gaming Victus 15",
    category: "cg2",
    price: 78,
    image: "img/products/cg2/hp-gaming-victus.jpg"
  },
  {
    id: "cg2-5",
    name: "Laptop HP 15",
    category: "cg2",
    price: 78,
    image: "img/products/cg2/hp-15.jpg"
  },
  {
    id: "cg2-6",
    name: "Mac mini M4 2024 256GB",
    category: "cg2",
    price: 78,
    image: "img/products/cg2/mac-mini-m4.jpg"
  },
  {
    id: "cg2-7",
    name: "Laptop ASUS Gaming Vivobook",
    category: "cg2",
    price: 78,
    image: "img/products/cg2/asus-gaming-vivobook.jpg"
  },
  {
    id: "cg2-8",
    name: "Laptop Acer Gaming Aspire 7",
    category: "cg2",
    price: 78,
    image: "img/products/cg2/acer-gaming-aspire.jpg"
  },

  // cg3
  {
    id: "cg3-1",
    name: "Tai nghe Bluetooth Apple Airpods Pro 2 2023",
    category: "cg3",
    price: 78,
    image: "img/products/cg3/airpods-pro-2.jpg"
  },
  {
    id: "cg3-2",
    name: "Tai nghe Bluetooth True Wireless HUAWEI FreeClip",
    category: "cg3",
    price: 78,
    image: "img/products/cg3/huawei-freeclip.jpg"
  },
  {
    id: "cg3-3",
    name: "Tai nghe Bluetooth chụp tai Sony WH-CH520",
    category: "cg3",
    price: 78,
    image: "img/products/cg3/sony-wh-ch520.jpg"
  },
  {
    id: "cg3-4",
    name: "Tai nghe Bluetooth True Wireless JBL Tour Pro 2",
    category: "cg3",
    price: 78,
    image: "img/products/cg3/jbl-tour-pro-2.jpg"
  },
  {
    id: "cg3-5",
    name: "Tai nghe Bluetooth True Wireless HUAWEI FreeArc",
    category: "cg3",
    price: 78,
    image: "img/products/cg3/huawei-freearc.jpg"
  },
  {
    id: "cg3-6",
    name: "Tai nghe Bluetooth True Wireless JBL Live Pro 2",
    category: "cg3",
    price: 78,
    image: "img/products/cg3/jbl-live-pro-2.jpg"
  },
  {
    id: "cg3-7",
    name: "Tai nghe Bluetooth True Wireless JBL Wave Beam",
    category: "cg3",
    price: 78,
    image: "img/products/cg3/jbl-wave-beam.jpg"
  },
  {
    id: "cg3-8",
    name: "Tai nghe Bluetooth True Wireless Xiaomi Redmi Buds 6 Active",
    category: "cg3",
    price: 78,
    image: "img/products/cg3/xiaomi-redmi-buds-6-active.jpg"
  },

  // cg4
  {
    id: "cg4-1",
    name: "Đồng hồ thông minh Riversong Motive 10GT",
    category: "cg4",
    price: 78,
    image: "img/products/cg4/riversong-motive.jpg"
  },
  {
    id: "cg4-2",
    name: "Đồng hồ thông minh KAVVO Macaron 36mm",
    category: "cg4",
    price: 78,
    image: "img/products/cg4/kavvo-macaron.jpg"
  },
  {
    id: "cg4-3",
    name: "Đồng hồ thông minh Garmin Forerunner 255",
    category: "cg4",
    price: 78,
    image: "img/products/cg4/garmin-forerunner-255.jpg"
  },
  {
    id: "cg4-4",
    name: "Đồng hồ định vị trẻ em imoo Z1",
    category: "cg4",
    price: 78,
    image: "img/products/cg4/imoo-z1.jpg"
  },
  {
    id: "cg4-5",
    name: "Vòng đeo tay thông minh Xiaomi Mi Band Pro 8",
    category: "cg4",
    price: 78,
    image: "img/products/cg4/xiaomi-mi-band-8-pro.jpg"
  },
  {
    id: "cg4-6",
    name: "Đồng hồ thông minh Xiaomi Redmi Watch 4",
    category: "cg4",
    price: 78,
    image: "img/products/cg4/xiaomi-redmi-watch-4.jpg"
  },
  {
    id: "cg4-7",
    name: "Đồng hồ thông minh Garmin Forerunner 255",
    category: "cg4",
    price: 78,
    image: "img/products/cg4/garmin-forerunner-255.jpg"
  },
  {
    id: "cg4-8",
    name: "Đồng hồ thông minh Black Shark GS3",
    category: "cg4",
    price: 78,
    image: "img/products/cg4/black-shark-gs3.jpg"
  },

  // cg5
  {
    id: "cg5-1",
    name: "Robot hút bụi lau nhà Ecovacs Deebot N30 Pro Omni",
    category: "cg5",
    price: 78,
    image: "img/products/cg5/robot-hut-bui.jpg"
  },
  {
    id: "cg5-2",
    name: "Máy hút bụi cầm tay Hreame H14 Station",
    category: "cg5",
    price: 78,
    image: "img/products/cg5/may-hut-bui.jpg"
  },
  {
    id: "cg5-3",
    name: "Máy lọc không khí Xiaomi Air Purifier 4 Pro",
    category: "cg5",
    price: 78,
    image: "img/products/cg5/may-loc-khong-khi.jpg"
  },
  {
    id: "cg5-4",
    name: "Quạt thông minh Xiaomi Mi Smart Standing Fan 2 lite",
    category: "cg5",
    price: 78,
    image: "img/products/cg5/quat.jpg"
  },
  {
    id: "cg5-5",
    name: "Nồi chiên không dầu Philips NA120/00 4.2L",
    category: "cg5",
    price: 78,
    image: "img/products/cg5/noi-chien-khong-dau.jpg"
  },
  {
    id: "cg5-6",
    name: "Nồi cơm điện tử Cuckoo CR-0675F/UGUGCRVN",
    category: "cg5",
    price: 78,
    image: "img/products/cg5/noi-com-dien-tu.jpg"
  },
  {
    id: "cg5-7",
    name: "Lò vi sóng cơ không nướng SHARP R-209VN-SK 20L",
    category: "cg5",
    price: 78,
    image: "img/products/cg5/lo-vi-song.jpg"
  },
  {
    id: "cg5-8",
    name: "Ấm đun nước siêu tốc SUNHOUSE HTD1088 1.8L",
    category: "cg5",
    price: 78,
    image: "img/products/cg5/am-sieu-toc.jpg"
  },

  // cg6
  {
    id: "cg6-1",
    name: "Chuột không dây Logitech MX Master 2S",
    category: "cg6",
    price: 78,
    image: "img/products/cg6/chuot-khong-day.jpg"
  },
  {
    id: "cg6-2",
    name: "Sạc nhanh 20W Apple MHJE3ZA",
    category: "cg6",
    price: 78,
    image: "img/products/cg6/sac.jpg"
  },
  {
    id: "cg6-3",
    name: "Thiết bị phát Wifi di động 4G LTE TP-Link M7000",
    category: "cg6",
    price: 78,
    image: "img/products/cg6/thiet-bi-phat-wifi.jpg"
  },
  {
    id: "cg6-4",
    name: "Router Wifi TP-Link Archer C54 băng tần kép AC1200",
    category: "cg6",
    price: 78,
    image: "img/products/cg6/router.jpg"
  },
  {
    id: "cg6-5",
    name: "Camera DJI Osmo Pocket 3 Creator Combo",
    category: "cg6",
    price: 78,
    image: "img/products/cg6/pocket3.jpg"
  },
  {
    id: "cg6-6",
    name: "Camera IP 360 Độ 3MP 365 Selection C1",
    category: "cg6",
    price: 78,
    image: "img/products/cg6/camera.jpg"
  },
  {
    id: "cg6-7",
    name: "Thẻ nhớ SanDisk Class 10 64GB 100MB/s",
    category: "cg6",
    price: 78,
    image: "img/products/cg6/the-nho.jpg"
  },
  {
    id: "cg6-8",
    name: "Bút cảm ứng iPad Baseus Smooth Writing 2",
    category: "cg6",
    price: 78,
    image: "img/products/cg6/but-cam-ung-ipad.jpg"
  },

  // cg7
  {
    id: "cg7-1",
    name: "Màn hình MSI Pro MP225 22 inch",
    category: "cg7",
    price: 78,
    image: "img/products/cg7/man-hinh-1.jpg"
  },
  {
    id: "cg7-2",
    name: "Màn hình LG UltraWide 29WQ600 29 inch",
    category: "cg7",
    price: 78,
    image: "img/products/cg7/man-hinh-2.jpg"
  },
  {
    id: "cg7-3",
    name: "Màn hình Gaming LG UltraGear 24GS50F-B 24 inch ",
    category: "cg7",
    price: 78,
    image: "img/products/cg7/man-hinh-3.jpg"
  },
  {
    id: "cg7-4",
    name: "RAM Laptop Kingston 1.2V 8GB 3200MHz KVR32S22S8/8",
    category: "cg7",
    price: 78,
    image: "img/products/cg7/ram.jpg"
  },
  {
    id: "cg7-5",
    name: "CPU Intel Core i5 12400F",
    category: "cg7",
    price: 78,
    image: "img/products/cg7/cpu.jpg"
  },
  {
    id: "cg7-6",
    name: "Case máy tính MSI MAG FORGE 120A AIRFLOW",
    category: "cg7",
    price: 78,
    image: "img/products/cg7/case.jpg"
  },
  {
    id: "cg7-7",
    name: "Máy in Laser Brother HL-L2321D",
    category: "cg7",
    price: 78,
    image: "img/products/cg7/may-in-1.jpg"
  },
  {
    id: "cg7-8",
    name: "Máy in HP LaserJet M211d (9YF82A)",
    category: "cg7",
    price: 78,
    image: "img/products/cg7/may-in-2.jpg"
  },


  // cg8
  {
    id: "cg8-1",
    name: "Smart Tivi LG OLED 4K 55 inch (55A3PSA)",
    category: "cg8",
    price: 78,
    image: "img/products/cg8/tivi1.jpg"
  },
  {
    id: "cg8-2",
    name: "Smart Tivi NanoCell LG 4K 55 inch 55NANO76SQA",
    category: "cg8",
    price: 78,
    image: "img/products/cg8/tivi2.jpg"
  },
  {
    id: "cg8-3",
    name: "Smart Tivi Coocaa FHD 43 inch 43S3U+",
    category: "cg8",
    price: 78,
    image: "img/products/cg8/tivi3.jpg"
  },
  {
    id: "cg8-4",
    name: "Smart Tivi Coocaa HD 32 inch 32S3U+",
    category: "cg8",
    price: 78,
    image: "img/products/cg8/tivi4.jpg"
  },
  {
    id: "cg8-5",
    name: "Smart Tivi Samsung The Serif QLED 4K 65 inch 2024 (65LS01D)",
    category: "cg8",
    price: 78,
    image: "img/products/cg8/tivi5.jpg"
  },
  {
    id: "cg8-6",
    name: "Smart Tivi Samsung QLED 4K 55 inch 2024 (55Q70D)",
    category: "cg8",
    price: 78,
    image: "img/products/cg8/tivi6.jpg"
  },
  {
    id: "cg8-7",
    name: "Smart Tivi LG NanoCell 4K 43 inch 2024 (43NANO81TSA)",
    category: "cg8",
    price: 78,
    image: "img/products/cg8/tivi7.jpg"
  },
  {
    id: "cg8-8",
    name: "Smart Tivi Samsung QLED 4K 55 inch 2024 (55Q60D)",
    category: "cg8",
    price: 78,
    image: "img/products/cg8/tivi8.jpg"
  },
];


// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function hideNavbar() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // cuộn xuống & đã cuộn quá 50px → ẩn navbar
        header.classList.add('hidden');
      } else {
        // cuộn lên → hiện navbar
        header.classList.remove('hidden');
      }
      lastScrollY = currentScrollY;
    });
  };

hideNavbar();