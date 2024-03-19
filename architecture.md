revue-philosophique/Exchoresis
│
├── articles/
│   ├── article-1/
│   │   ├── index.js
│   │   ├── contenu.md
│   │   └── images/
│   │       └── image1.jpg
│   ├── article-2/
│   │   ├── index.js
│   │   ├── contenu.md
│   │   └── images/
│   │       └── image2.jpg
│   └── ...
│
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   └── banner.jpg
│   └── css/
│       └── styles.css
│
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── Sidebar.js
│
├── pages/
│   ├── index.js
│   ├── about.js
│   ├── contact.js
│   └── article/[slug].js
│
├── public/
│   └── favicon.ico
│
├── layout/
│   ├── MainLayout.js
│   └── ArticleLayout.js
│
└── next.config.js

Architecture API Next.js
- [ ] page.js 
  - [ ] IU unique à un itinéraire
  - [ ] exemple: app/blog/[slug]page > export default function Page ({params, searchParams}){
    return<h1>My Page<h1>
  }
  + params (facultatif)
    objet contenant les paramètres d'itinéraire dynamique depuis le segment racine jusqu'à cette page. exemple: app/shop/[slug]/page.js - URL: /shop/1 - params: {slug:"1"}
    exemple: app/shop/[...slug]/page.js - URL: /shop/1/2 - params: {slug: ["1", "2"]}
  + searchParams (facultatif)
  objet content les paramètres de recherche de l'URL actuelle
  exemple URL:/shop?a=1 - searchParams: {a:"1"}
  exemple URL: /shop?a=1&a=2 - searchParams: {a:["1", "2"]}

- [ ] layout.js
  - [ ] 