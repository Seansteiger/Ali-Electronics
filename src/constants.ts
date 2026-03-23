import { 
  Tv, 
  Bed, 
  Wind, 
  ShoppingBag, 
  Smartphone, 
  Speaker, 
  Microwave,
  Home
} from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: 'electronics' | 'blankets' | 'curtains' | 'appliances';
  price: string;
  oldPrice?: string;
  description: string;
  image: string;
  specs?: Record<string, string>;
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'tv-1',
    name: 'Ultra-Slim 65" Neo QLED 4K Smart TV',
    category: 'electronics',
    price: 'R 14,999.00',
    oldPrice: 'R 18,499.00',
    tag: 'Premium Series',
    description: 'Experience breath-taking color and cinematic depth. Our flagship Neo QLED technology brings the cinema directly to your living room with unmatched contrast and AI-driven 4K upscaling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkEMV539Xxhy_jLeuaWf41d2paUyeRkrA1GlX36NzhjAOdWMw00ilk0MRiZl_iH0DLYvp5tBFp32E6mGuUYPzwGwcmy7O0po6NOza6d3669OgcePuvN4kDiyBG3iu8ECvTHUfTp8Y_c_PXir89mtNQoexR1qMMUW-5_6mwPRBQLWd49cB3DGQdiml4iQlKcLtEFjRkYqRUn1sVKr7J0KSZljIGexaWIw8etO5hDOhLv6qMvC3kLwWB2aDiHsOwG8Q2tizQhD6TFwA',
    specs: {
      'Screen Size': '65 Inches',
      'Resolution': '3,840 x 2,160',
      'Panel Type': 'Neo QLED',
      'Sound Output': '60W',
      'Speaker Type': '4.2.2CH',
      'Dolby Atmos': 'Supported',
      'HDMI Ports': '4 (HDMI 2.1)',
      'USB Ports': '2',
      'Wireless': 'Wi-Fi 6, BT 5.2'
    }
  },
  {
    id: 'blanket-1',
    name: 'Premium Egyptian Cotton Blanket',
    category: 'blankets',
    price: 'R 1,299.00',
    description: 'Soft weighted luxury blanket draped over a velvet chair. High density and ultra-soft comfort.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABbK_t6xZy8bD9U2rEV-AOOuOY9ouOFW04_kFDY5_1SSzBKZDf22rrQaDcfIUoSuRcbzhdn9J7wfwHjNu-AVKr81spB115EsbHgeXOxa3KPT6hn_WmY5w_4ygVvOQCOIX_8ajNuaAVi2rSWcE-jfAwfPXTUI6kg0FZO8JI8eADdDs3p-tY3XLPJ4a5ojnG3Q3a459492Gwe_3JUNxHkZdTjkEosuBzgBS62OXveVcRzYecKFZtwC-1aOnOcYLaslJFU7zO-b4cuFU'
  },
  {
    id: 'audio-1',
    name: '7.1 Surround Sound System',
    category: 'electronics',
    price: 'R 5,499.00',
    description: 'High end home theater surround sound speakers for an immersive audio experience.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe_TlvO_pjpvmq7Sl2nGmpGIs1fFTvhuaNM93ty_kkrj3IKwB8BzR_1ibYltBi5BDYE4I-DYFEQG31ajaAX61PK0C9iX19r4ZDDZ-hoMHYN3XylWVBy2T7vhqwgk4id0EakbZiPtBKZGmGj-h_zLvJrrmEJ7W0ejxBCpI18K3Y4qsFE0dKLJVSCGUPc6-vMnWzRO427PTLe-tJvVj25Amkav9hQiNMIGthc_z5vNTqapmN2ds3YzDACvVmTWIdusUcHC17Bv9GVpc'
  },
  {
    id: 'light-1',
    name: 'Ambient Smart LED Kit',
    category: 'electronics',
    price: 'R 899.00',
    description: 'Modern smart lighting strip glowing behind a bed headboard. App controlled.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPyesEONRbVWNRS52Ypk0ijdC42KBN3Z-kr-JvE2EVDsj8q0BIUV_2XCWO1LrnKnlO7Iqx9kr_NGSibM3sKUGFZV4ww1A1CrwnUfIVFV3P9eWRMXgAlgEINaQdpk1Qadqaw57d2BCqDnEPBMRklplbcmofhP31o-fJb_2WX6m1MJSLADI1Iduf8pS7_loY7YUvK5rnnsQjllECqDoyjSY_aIgzqJoJAONJSBkIhIUN_nRhVwNgH3qOWzwpuspeDOHb7wJmU7QzKcI'
  },
  {
    id: 'curtain-1',
    name: 'Emerald Velvet Blackout Curtains',
    category: 'curtains',
    price: 'R 2,150.00',
    description: 'Floor to ceiling emerald green velvet curtains. Premium block-out quality.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV7So0RdL02ZQpkyLLjDPD-yBHbkwpdjaG-2y1BAV1mHJ2A04D2NPruvPVfgwHtUwWcEjckP3xh7erp_G52PDTN6jFFzSpF2LnV5d2chJhF2mMA3Jm3eKhg73LXKhiLNDwL0n1zKn7uRiViP4vVpJkJB8gg4Dj1sAsvzBwLsLOpoON7eJE5fX_lxu4XT0P9HxyfWu9UTPJVfbYXxwBQG-OfhtXA_3aNjmsrcWVTKEXB52QAhkFLSs9W50cbrL8Fce8ySHkQbNlWfs'
  },
  {
    id: 'microwave-1',
    name: 'Samsung Digital Microwave',
    category: 'appliances',
    price: 'Contact for Price',
    tag: 'Kitchen',
    description: 'Advanced Heating Technology. Sleek modern microwave and kitchen appliances.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8JiEoApZZHrnWm7L8IP2jv4Qh_MzlvfQIl-tinjPJdDFb8f1VVu5-MRQML-LBDkIbkji6jQIMwYTXf6ovPOVg1cwiId0IGUX1k2-DPuAbDla9KV4WoVTrOe6tiaA_DcM6vttU50lBBHOFYIxaoiNAUGevo-ecqZsTBKogUhWbr06qOeAKcCvRN9f__UZ79U01tHnYe0v2bRhvWE6GkRL-y3n1wMNT0Da4fxnI_nN2Os8bDRr69IM9R-BTRQJ3Zoc9hrst4R8btg'
  },
  {
    id: 'blanket-2',
    name: 'Embossed Mink Blanket',
    category: 'blankets',
    price: 'Contact for Price',
    tag: 'Hot Sale',
    description: 'King Size • 5kg High Density. Detail of a luxurious grey embossed mink blanket.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFnJzf4iTblHPfrV2m4cmCz3QxRYgjWmTdgnJeHfY-rah1Zc8bzJw-luVMjbwoASde6a5n8xe77597UHMf8NyqFP9h3TQNmVvD5MwNkSUDoCHDNw8WcU-xeQUxxi7bDYNNF33av9NtnKEcmUqpcZPbMLNoLW40DDr0_l50EzR1P7l-1s4yg-kH043NnGYQvbuwr5XohVF_taQy2E9ZYXB1yeX3U0qtzjSyR8qE8Q1BmZzMEJiAsTI6Vi5U-ylLRZVtNqMM-W5O_3U'
  },
  {
    id: 'curtain-2',
    name: 'Block-out Curtains',
    category: 'curtains',
    price: 'Contact for Price',
    tag: 'Textiles',
    description: 'Linen Finish • Custom Sizes. Block out curtains in a modern charcoal color.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6SvnuythiSyHNgPIEviY_0mMujIjBElIx8FjuUm2euCfCOxEHNquCzSOjtq6S_e9qzb83j82-2FakYMxRn-XOHzNcebeP2xDoNs0GkXVBEdAk_3rDjUrAAY653OIzGiyll0V6YigtYjq8YtO-2ce-0h0Q4JSheN82vpavJH-cGT5Vhrhkko_LFjFnjRpHovVWY9HfYTo9xYyIbdLHDa2-0Q1GoHj1PJdBg-2geU4uLv9pgNbP8gK95UDBdoirVyqvuxHIAoKFkdA'
  }
];

export const CATEGORIES = [
  { id: 'electronics', name: 'Electronics', icon: Tv, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrixuMOQPcCGO6WnBMZuHRaQ-VzuwyqrcvpWSMgJQbVafeSvaU_1V1e1WDPcmrXK73X7plukUwY3L4zVdcj69bLq05gBRpoO_ASQodOyr13CLBpYRsFd6U9sy046xlOEmkvx06l66201PxKm0TSTO06t5YkCyCawXMdek7SJNjtfP4y4Wvj4H4l7F1s7J8UCD2qUIoQ7gVgIwricVS6s57_bvKN8GN_cXflrektk8Ok0B3GbDXbmpaYVL6_kSMZIgs9lKplQqwEHk' },
  { id: 'blankets', name: 'Blankets', icon: Bed, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaaVtM_PFzejySzufjHDu-P1d9vf1eiL2PX5xa0Kx-HuovOzovdKRTTgo378yCFGJ8srph8eVPM_58J1AFdKMOTCPniPxet9KNIEy1_clvXFckTJbwlA7W8LZURjQrkUKwAB75wBIQIDwAqFQc-QVN70_ADqWvTxnTdbrMCZ2HFBMCBqGbLPHQspmzWUBwU5WBN3idDwfFAwE76I-9HxCs8r6Ykx-kwLaNWHWtPIYxmoTE2OPWztse-AXusElJv53MaG_sYR0T0nQ' },
  { id: 'curtains', name: 'Curtains', icon: ShoppingBag, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgXD7wOKdNZdFK-UpKG2uc9c9Td0Bk7E9n25WehMly885rlSf1l1n9KW0n0jb2KiWftm_AkxZkdxSUrN8apnOYbYrXgGshbLWXjpDWBTOi2KzaLsopZ3cdozKIZ4m9YwNYqPYl8qlqFESzr8VUE0if0cVw3SrZIkzYh8bHYgpVw2Mheev9zZZjC_ZlZSIx7IecqB4GS5tU8EyPkOgTwXGiNSQICKpYaXZ4rgVrd54cako33EzJ9ETItGSqX6QeBdoDkGcj9smozWo' },
  { id: 'fans', name: 'Fans & Cooling', icon: Wind, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXmbQvRd2talSdL6e4PNMkl1sZV9rS31aSYBvbQT0rzRYqmw8jReZUcbAfNvoMpL9ATotRvMS-jxGBNs2Fuo8HEORUbR5lfizgrPryYo0vlqAWvRDk8N930pR8_6rKLC54-ES96Uyu1zgUsgLX3BjpqPvitY3MMqlnxemm9g4ZFnhHD13sl-Z1wreSxHdWmG6ypIRNnFRTCuDAvx1gxZQy1cyyNgxYDxVGhoa4ApLpDvENRsB4Ui8J2IEcVkHY5KGqYRfP6MtWEVs' },
  { id: 'luggage', name: 'Durable Luggage', icon: ShoppingBag, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuckPorCB2RbiqImwUodpEZMSQIffJxQ4yP6OdBo8DMdO3ypyAc1Q_gsOt3dQV1JlrhfRgj2vd25QKznZx8806kK4jw7Vx215QT5vG3AIpF6KRgwAAsY4K4ATIELd-NdiMy1Q5xNVCFr_u45R_ZHbu2Yddx-fhg3sDFMpyT1ADHl3Rh77YOnbLuESSQd0NsGDYbGsXX2yjXUtLxvz3JtwPst4c9YFpqd5wsqf7Jj44qsSNOUeSOKAPA8um2urhOFObNn_KSDQvJxo' }
];

export const WHATSAPP_NUMBER = '27718387883';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
