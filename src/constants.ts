import { MenuItem, Review, Location } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // BEEF BURGERS
  { id: 'b1', name: 'OG Boujee', description: 'The original smash. Double beef patty, double American cheese, house pickles, and our signature Boujee sauce on a toasted potato bun.', price: 950, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3qGW5E8a73UK2mjOFF3MIofr5o3xq-v5niBlC0QrCY1bPk26aWH5svyDkg5G62FJgKmm7B8Td_6B7jX6exkJumDvn8nfx0ljFiu2kcSiKLgbsDD8OqeHhvUfEaNh1KChH0jc4_TeBjJo8xwNNt82ITq00GVe35NTe7XsgG0H4e8-Dm-KRsiUasrY2gCqhbw1fAPjeoUqkleYDNY77f0Vw8xDSSiAgAmRcygRHMrZyHpW_nbHjlOidGjD3kBCprOzxB114KNYFuWI', category: 'beef' },
  { id: 'b2', name: 'Classic Boujee', description: 'Keeping it real. Single smash patty, melted cheese, crisp lettuce, tomato, onions, and classic mayo.', price: 750, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByF3-9HqptnupheOz_c3VHeyKUwgBnygtoJn_B5_XuVdvCSfvai4_0OGSXm-IYMaUMlMEUV7saOPcQxQ7sVya9YKvwthTeFcdA5ei78CZyeX1ccrJ9pFn9O1nKeQusmpWu4nCjjV-MFpSpKTiIY0Cc8zqGOYudfCRj4u3PEMepbFgm4sbrL-uqJq9ZX6vd_aibFfMfpqxKKLYXEIG8Dx8wqK5IswO-bbbqGL__oBkwWx9-oQl3QNY6mR8aokspNtmBUMVK2wRWY_8', category: 'beef' },
  { id: 'b3', name: 'Bun Smoke', description: 'Smoked gouda, crispy beef bacon, caramelized onions, and our Smokey Chipotle sauce. A flavor bomb.', price: 1150, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI4ckDr4mtT1U_rcF5k8mU91aLMvjf4bCwC_hNBOv2msg5BSMQzJW9OGG79xQBgNFOAyudGEO0Uic17FKLNloCZG8o1MaUYevA5YV1qHb5vvHJcZ7cgKrrcZgCBeks3BbUQH4qvRmTt4GJqcU9Tv0LM8dHMPexdHMG50hmXRhbOgNwbNMlVlyV_1snavO_Pgj4Yq-txDM0hNbVDygOphLKu4d9o5DrrDstWMX2VSOKJ-hIaUEIL_SrnI-6TZYB__N59ZUVSnh_MPs', category: 'beef' },
  { id: 'b4', name: 'Awwshroom', description: 'Smashed beef topped with a rich, creamy mushroom truffle sauce and melted Swiss cheese. Pure indulgence.', price: 1050, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjXOUCeIKZ7xdKAeiP3CTJMR_b3AOhbdZ9-97Hz6Hy6pR4jG_lNoTxsog34XPNx8tEdSeWchBaUAzUAkJNp7V8KFLEeIrJCgNk8q8_GVf-w-szJPFjvArruyL3XGwjRBJw5cHwR6OX5w9BCB1zJpQBfTDM-jCod8GDSL_DVMnrUk3ZWHID1Jgne4g7-jPUkVDheOZ8vm2WBOmnGDbDvTN1trhuvbBsY6wKW35USEzOz-6kEG4kZpCkdkpQys2zx5-U08Vz9S8HtJg', category: 'beef' },
  { id: 'b5', name: 'Hot Mess', description: 'Spicy, messy, perfect. Double beef, jalapeños, spicy cheese sauce, and crushed Flamin\' Hot Cheetos.', price: 1200, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKixUispdSx39MyR7p48HcaQeeLqWV-1BDhjhyPsAqhDFGy7YtjcgBLfRYzfOEOPk1WfF0lKVXhwdcXyUI7bFw3WCUnLFvcE2gr5KscFMY40Phfpu6cESq75vzx3Oe14q4aIfdVt75BUa5s3xHXi1um2wIK2CMAbtqlXYGeZDoauxD_HGcEr2twlK8Ia0C7asoUE69TseZwfufVyX0LFbTO6QcL6_-wVzJx6gQPgs3JIkkcCZ20Zo_MGT8kQPGHUL-QluCMgNA64E', category: 'beef', isViral: true },
  { id: 'b6', name: 'Holy Nachos', description: 'Crunchy nachos inside the burger? Yes. Smashed beef, salsa, jalapeños, and a flood of nacho cheese.', price: 1100, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn2VCjOzNLxG6klDzuw_X66tWb-o99ilOMbBL_01lr7JN_6u3oMVcIAbvX52Iho0SSoi4qjv-S4QWh_419uO4Wq1WrF4sLD94hYG8QGgXClb1sgVuXXXdoWkWHPrsHTzgvt6kR3J7euu1wNGcLaUuJlQpoO0DrCpZIgHRc0gODRc4_EAV_jOt1earkQA8bwZtBuniDKenIA-ia3cjsuY1RC_qI6M2qhrB4zxOsGlhfiG09wpUfywTmAZYgZ8oGud6y4jhkzkNPv_g', category: 'beef' },
  { id: 'b7', name: 'The Main Character', description: 'Triple patty, triple cheese, beef bacon, onion rings, and BBQ sauce. You are the star of this show.', price: 1450, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnQJJ7BGSuHPSbnCM2bSvMrAr6IgAngHcAMcWTuxAdZIbxn-npOSeOgz0eZSk5btnr_nI5pEuJAI72Gak2shLFmKS-ofmHRXMi_fOa3yLoyLTj738l2xWQ8dhYxA80wwvJ9p6zPOWc40-V-rIEVHMdIhslTVjo7vgFHb_GG-NBqBycD6Sc2r7sC3SDHoDUZ_DPAhQQkYK588_DNrNkcgi3iR71f-XrV5uya3epHHjZ4gsETkGbm_8iJSsU1nVHRxQUVzUzN3ytCzk', category: 'beef', isViral: true },
  
  // CHICKEN
  { id: 'c1', name: 'Khokha Special Chicken Fillet', description: 'Crispy fried chicken breast, spicy Khokha slaw, pickles, and our secret Khokha sauce. A local legend.', price: 850, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHb6TmZzqIvZZytkt_pgJB85oT3rldWo9AQsC_SJ9yd5xak56Ki1eU11aQFsQMrRciFrbDrO3OqfZPNCwaIyJA3Q59P_iuDG_4J0S-JZ0LYCOkcoTWvKXaGi6VYr8JVq6wZ_RsAapllw7vyhXYV1ol6S10soXGLwJ0z_qTEQKpKShzY6yWYKdaESJ-8JEr433OrHnQEtpw-Ga773Vl1lJbqGnay6ArKX9R3ioMTEUcpCYNLQwmhFWQfsEuhHqtk5a9Ne_lWCaM8k0', category: 'chicken' },

  // COMBOS
  { id: 'cb1', name: 'Hot Mess Double Meal', description: '2x Hot Mess Burgers, 2x Waffle Fries, 2x Drinks. For you and your bestie.', price: 2800, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKixUispdSx39MyR7p48HcaQeeLqWV-1BDhjhyPsAqhDFGy7YtjcgBLfRYzfOEOPk1WfF0lKVXhwdcXyUI7bFw3WCUnLFvcE2gr5KscFMY40Phfpu6cESq75vzx3Oe14q4aIfdVt75BUa5s3xHXi1um2wIK2CMAbtqlXYGeZDoauxD_HGcEr2twlK8Ia0C7asoUE69TseZwfufVyX0LFbTO6QcL6_-wVzJx6gQPgs3JIkkcCZ20Zo_MGT8kQPGHUL-QluCMgNA64E', category: 'combos' },
  { id: 'cb2', name: 'Classic Boujee Double Meal', description: '2x Classic Boujee Burgers, 2x Waffle Fries, 2x Drinks. The standard issue.', price: 2100, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByF3-9HqptnupheOz_c3VHeyKUwgBnygtoJn_B5_XuVdvCSfvai4_0OGSXm-IYMaUMlMEUV7saOPcQxQ7sVya9YKvwthTeFcdA5ei78CZyeX1ccrJ9pFn9O1nKeQusmpWu4nCjjV-MFpSpKTiIY0Cc8zqGOYudfCRj4u3PEMepbFgm4sbrL-uqJq9ZX6vd_aibFfMfpqxKKLYXEIG8Dx8wqK5IswO-bbbqGL__oBkwWx9-oQl3QNY6mR8aokspNtmBUMVK2wRWY_8', category: 'combos' },
  { id: 'cb3', name: 'The Main Character Double Meal', description: '2x The Main Character Burgers, 2x Cheese Waffle Fries, 2x Drinks. Go big or go home.', price: 3500, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnQJJ7BGSuHPSbnCM2bSvMrAr6IgAngHcAMcWTuxAdZIbxn-npOSeOgz0eZSk5btnr_nI5pEuJAI72Gak2shLFmKS-ofmHRXMi_fOa3yLoyLTj738l2xWQ8dhYxA80wwvJ9p6zPOWc40-V-rIEVHMdIhslTVjo7vgFHb_GG-NBqBycD6Sc2r7sC3SDHoDUZ_DPAhQQkYK588_DNrNkcgi3iR71f-XrV5uya3epHHjZ4gsETkGbm_8iJSsU1nVHRxQUVzUzN3ytCzk', category: 'combos' },
  { id: 'cb4', name: 'Khokha Special Meal', description: '1x Khokha Special Chicken Fillet, 1x Waffle Fries, 1x Drink. The perfect solo run.', price: 1200, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHb6TmZzqIvZZytkt_pgJB85oT3rldWo9AQsC_SJ9yd5xak56Ki1eU11aQFsQMrRciFrbDrO3OqfZPNCwaIyJA3Q59P_iuDG_4J0S-JZ0LYCOkcoTWvKXaGi6VYr8JVq6wZ_RsAapllw7vyhXYV1ol6S10soXGLwJ0z_qTEQKpKShzY6yWYKdaESJ-8JEr433OrHnQEtpw-Ga773Vl1lJbqGnay6ArKX9R3ioMTEUcpCYNLQwmhFWQfsEuhHqtk5a9Ne_lWCaM8k0', category: 'combos' },

  // FRIES
  { id: 'f1', name: 'Waffle Fries', description: 'Crispy, golden, perfectly seasoned waffle fries.', price: 350, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_XxjH7MacuxiXv9xYmwLf3rixPgqM64IRwMFDkLs6r00aEkops6FlORcqdL8p1KbTadnIKxSVictlVbC854QtSqxBND2q11FpTX45jire5qbA7BhaQJtDMXYYZJcZaCdQElwRW0XZVAmuJlHVJIwQMAsDta1_hKKBMccBXuQI8TWKSZ3LHmu-YiQFiUt8Ei2vijf3dvKGTOn4XkuIOU8oK2sUtEglz2-T5RjNsoJ-bDHpbZ16WpWP5T9LvoC_zeERyc0PmRhczjQ', category: 'fries' },
  { id: 'f2', name: 'Garlic Waffle Fries', description: 'Waffle fries tossed in our signature Lowkey Garlic sauce and herbs.', price: 450, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCgvpViwM2gwN1S172G9Hu7GxS4FOat85apzP33uLjTLqlpuRACAJ7jdf_W_e_VQX3F6HRSFRg0tlctR6z54Bp3y1yUZm23mF0zOvpv6No6xB7NtWXAJIEtok2w9mPqgDhxqrjPdDxQ16auHVGifDQv4yATSrVhptLkDzNrktcP2H1osPWV45us7Dslh9WreTrYTdNyoZlrpDAdzsEFUWmDG0AX8PqIpHmCe-XhpHHThqL2ucsvFBp-L2ysmXtk7Xp-v7O-LRMr2s', category: 'fries' },
  { id: 'f3', name: 'Cheese Waffle Fries', description: 'Drenched in our rich, creamy, melted cheese sauce.', price: 550, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvrtyUhc0J0kkubvhyOOKml1Njjbd03rlW1pfyYXaEO70TQkssj2ILBx1fc0HGIvtlUnRRi_omVarqxcBzTiZsz3eNzSEBF04MAMHlarSPG3pyk6oIPet9Jlu5YkM9HZ-U30p78SS_jPtSNoY-8c0ps3qKtv4OhgaNz3e-laKUMxKcCHrlAv7J2vrfiXfY-PTbkXod_T_Wtc-SeL3o-Yc2Hdz01QVR82O7aJo0BOrN0ct61qPArQ-3com7H0LOuzr5oYdD7LYTKSw', category: 'fries' },
  { id: 'f4', name: 'BBQ Waffle Fries', description: 'Waffle fries drizzled with smoky BBQ sauce and topped with crispy onions.', price: 450, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjQSpNGOEyBYwX4Oc6Hga9M_w8nEHh3vI6nzRYJcmaWXmxIT54xbmwbck4QUXCOx1KcvZKD3JymKeEgu6xPxIH8Mia_LwkwvJH2waSLBIN9AOuzey42grU3v9aRTz7Vvt5OOOl0uvuFh1wOIeMHcs3oym3BjCOdm1U1LD7Xmn5Vep2VjEAicKLj0f1lVGteqMdWoWtC1USTtxbt0zkNM9SVL-s5SPyQqNNhW5gqeaICwHZ4GGARUg7Bxe3BWdWglK5TE9aOB2Ys1A', category: 'fries' },
  { id: 'f5', name: 'Nacho Cheese Waffle Fries', description: 'The ultimate loaded fries. Nacho cheese, jalapeños, and spicy salsa over waffle fries.', price: 600, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO4bK5-3I6SWfYQtl-FtNhUcVd-Prd0xGysuIQeO8xO4iy7hDBix87BtPZCwe_BQECBbQNncZryQmQTyZr1Sgm_H_wB9GNXeKAp-ljuUKhLrj0knlckAObXnFaKdwFb8NarSADmt_sf90zskvhDYgzA_Wd4VKF6tWbHxqvFDhcJSlipueY-5oRKrrq8axk5cH_mJCalh27gppQrM1cHiVEbHoOIIbNtnCdNsQrJp-zTu5z9ht_MhKpjzXtHkGpcbUriwlAHoiq8-4', category: 'fries' },

  // DRINKS
  { id: 'd1', name: 'Coke', description: 'Chilled Coca-Cola.', price: 150, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34a5dZl3o_fI3Qj8mH6j3uL1rO8P6Q_lX5gZ0tFq3u3rL6uH5o_jX8sF6qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5', category: 'drinks' },
  { id: 'd2', name: 'Sprite', description: 'Chilled Sprite.', price: 150, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34a5dZl3o_fI3Qj8mH6j3uL1rO8P6Q_lX5gZ0tFq3u3rL6uH5o_jX8sF6qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5', category: 'drinks' },
  { id: 'd3', name: 'Fanta', description: 'Chilled Fanta.', price: 150, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34a5dZl3o_fI3Qj8mH6j3uL1rO8P6Q_lX5gZ0tFq3u3rL6uH5o_jX8sF6qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5', category: 'drinks' },
  { id: 'd4', name: 'Peach Malt', description: 'Refreshing Peach Malt beverage.', price: 200, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34a5dZl3o_fI3Qj8mH6j3uL1rO8P6Q_lX5gZ0tFq3u3rL6uH5o_jX8sF6qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5', category: 'drinks' },
  { id: 'd5', name: 'Water', description: 'Bottled mineral water.', price: 100, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34a5dZl3o_fI3Qj8mH6j3uL1rO8P6Q_lX5gZ0tFq3u3rL6uH5o_jX8sF6qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5', category: 'drinks' },

  // SAUCES
  { id: 's1', name: 'Lowkey Garlic', description: 'Creamy, garlicky goodness.', price: 100, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34a5dZl3o_fI3Qj8mH6j3uL1rO8P6Q_lX5gZ0tFq3u3rL6uH5o_jX8sF6qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5', category: 'sauces' },
  { id: 's2', name: 'Dejon Mustard', description: 'Classic tangy mustard.', price: 100, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34a5dZl3o_fI3Qj8mH6j3uL1rO8P6Q_lX5gZ0tFq3u3rL6uH5o_jX8sF6qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5', category: 'sauces' },
  { id: 's3', name: 'Smokey Chipotle', description: 'Spicy and smoky.', price: 100, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34a5dZl3o_fI3Qj8mH6j3uL1rO8P6Q_lX5gZ0tFq3u3rL6uH5o_jX8sF6qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5', category: 'sauces' },
  { id: 's4', name: 'Khokha Special', description: 'Our secret signature sauce.', price: 100, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34a5dZl3o_fI3Qj8mH6j3uL1rO8P6Q_lX5gZ0tFq3u3rL6uH5o_jX8sF6qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5', category: 'sauces' },
  { id: 's5', name: 'BBQ', description: 'Sweet and tangy BBQ.', price: 100, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34a5dZl3o_fI3Qj8mH6j3uL1rO8P6Q_lX5gZ0tFq3u3rL6uH5o_jX8sF6qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5qB8sN5', category: 'sauces' },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Ali Khan',
    handle: '@alikhan_eats',
    text: 'Packed with flavor 🔥 The Hot Mess is literally the best smash burger in DHA right now. Cheese pull was insane.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=ali'
  },
  {
    id: 'r2',
    name: 'Zoya Ahmed',
    handle: '@zoyafoodie',
    text: 'Best burgers in DHA hands down. The Main Character is massive and the Waffle Fries are perfectly crispy. 10/10.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=zoya'
  },
  {
    id: 'r3',
    name: 'Hamza Tariq',
    handle: '@hamza_vlogs',
    text: 'Late night cravings sorted. The Khokha Special Chicken Fillet hits different at 1 AM. Vibe is unmatched.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=hamza'
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'l1',
    name: 'DHA Phase 5',
    address: 'CCA, DHA Phase 5, Lahore, Pakistan',
    hours: '12:00 PM - 03:00 AM',
    status: 'open'
  },
  {
    id: 'l2',
    name: 'Gulberg',
    address: 'MM Alam Road, Gulberg III, Lahore',
    hours: '12:00 PM - 03:00 AM',
    status: 'open'
  }
];
