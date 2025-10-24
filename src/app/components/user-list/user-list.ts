import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})
export class UserListComponent implements OnInit {
  @Input() searchTerm = '';
  products: Product[] = [];
  filtered: Product[] = [];

  ngOnInit() {
    this.products = [
  {
    name: 'Classic Leather Tote',
    price: '$189',
    image: 'https://i.pinimg.com/originals/9d/4f/8e/9d4f8ef55b4fbc4828a76616316fd0ac.jpg',
    description: 'Elegant everyday tote made from genuine Italian leather.'
  },
  {
    name: 'Mini Crossbody',
    price: '$99',
    image: 'https://i.pinimg.com/474x/27/7d/af/277dafd289713075af42841131776db0.jpg',
    description: 'Compact and chic crossbody for your essentials.'
  },
  {
    name: 'Structured Handbag',
    price: '$149',
    image: 'https://avatars.mds.yandex.net/i?id=7265e16ce1e96546739b3d3f947d77199b0989ed-10805535-images-thumbs&n=13',
    description: 'Perfect for business or casual looks, with metal details.'
  },
  {
    name: 'Canvas Shopper',
    price: '$79',
    image: 'https://i.pinimg.com/736x/87/0a/54/870a54d299e7f2928e35b63256ad4ab2.jpg',
    description: 'Lightweight canvas bag for daily errands or beach trips.'
  },
  {
    name: 'Evening Clutch',
    price: '$129',
    image: 'https://i.ebayimg.com/images/g/YscAAOSwqF9kQhGU/s-l1200.jpg',
    description: 'Stylish clutch with golden chain, ideal for night events.'
  },
  {
    name: 'Travel Backpack',
    price: '$159',
    image: 'https://avatars.mds.yandex.net/i?id=7686cf46a51cebb366bf8e79ed1ac71b8bfd82b6-5234915-images-thumbs&n=13',
    description: 'Spacious leather backpack designed for comfort & utility.'
  },
  {
    name: 'Luxury Croco Bag',
    price: '$249',
    image: 'https://sc04.alicdn.com/kf/Hcc8c16425f7e49deb3da2d641f503935k/OEM-ODM-Custom-Luxury-Women-Genuine-Crocodile-Skin-Croco-Leather-Lady-Bamboo-Handle-Shoulder-Strap-Designer-Flap-Bag-Handbag.jpg',
    description: 'Textured croco-leather bag that elevates any outfit.'
  },
  {
    name: 'Soft Hobo Bag',
    price: '$109',
    image: 'https://static.ecco.ru/images/eshop/img/other/small/9107967_90099_8.jpg?v=2',
    description: 'Spacious hobo-style bag for daily comfort.'
  },
  {
    name: 'City Laptop Tote',
    price: '$179',
    image: 'https://avatars.mds.yandex.net/i?id=0bdfa6138cded46ce31345321ff69e7e7b163956-5591092-images-thumbs&n=13',
    description: 'Large tote that fits a laptop and daily essentials.'
  },
  {
    name: 'Bucket Bag',
    price: '$129',
    image: 'https://i.pinimg.com/originals/c8/0e/f8/c80ef8b1d30ac4eab0aa4d09a8f24320.jpg',
    description: 'Minimalistic bucket bag with drawstring closure.'
  },
  {
    name: 'Weekend Duffle',
    price: '$199',
    image: 'https://claytonandcrume.com/cdn/shop/files/BrindleNPDuffle_hero_E12.jpg',
    description: 'Perfect travel duffle with roomy compartments.'
  },
  {
    name: 'Petite Chain Bag',
    price: '$115',
    image: 'https://avatars.mds.yandex.net/i?id=be9f72508c16f99d3f3f652193df9f78933115ee-12643871-images-thumbs&n=13',
    description: 'Small yet elegant bag with metallic chain strap.'
  },
  {
    name: 'Modern Shopper XL',
    price: '$189',
    image: 'https://avatars.mds.yandex.net/i?id=4f33c657f8efd1197804cac5269fe33795ae508e-3593759-images-thumbs&n=13',
    description: 'Oversized shopper for work or leisure.'
  },
  {
    name: 'Elegant Belt Bag',
    price: '$89',
    image: 'https://i.pinimg.com/474x/07/be/0b/07be0b16faa18992bb325e256be7d9fb.jpg',
    description: 'Trendy belt bag — compact and hands-free.'
  },
  {
    name: 'Vintage Satchel',
    price: '$139',
    image: 'https://i.pinimg.com/originals/5e/d5/4c/5ed54c79b2a4c8e16bba3a022b00b60f.jpg',
    description: 'Retro-style satchel with adjustable strap.'
  }
];

    this.filtered = this.products;
  }
  ngOnChanges() {
    this.filterProducts();
  }

  private filterProducts() {
    const query = this.searchTerm.trim().toLowerCase();
    this.filtered = this.products.filter(p => p.name.toLowerCase().includes(query));
  }
}
