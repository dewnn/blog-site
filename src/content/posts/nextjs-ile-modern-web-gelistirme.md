---
id: '1'
title: 'Next.js ile Modern Web Geliştirme'
excerpt: 'Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework. Bu yazıda Next.js''in temel özelliklerini inceleyeceğiz.'
date: '2023-12-28'
author: 'dewn'
---

# Next.js ile Modern Web Geliştirme

Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework. Bu yazıda Next.js'in temel özelliklerini inceleyeceğiz.

## Routing Sistemi

Next.js'in en önemli özelliklerinden biri, sayfa bazlı routing sistemidir. Bu sistem sayesinde, klasör yapısı üzerinden otomatik olarak rotalar oluşturulur.

```typescript
// app/page.tsx
export default function Home() {
  return <h1>Ana Sayfa</h1>
}

// app/blog/page.tsx
export default function Blog() {
  return <h1>Blog Sayfası</h1>
}
```

## Server Side Rendering ve Static Site Generation

Next.js'in sunduğu **Server Side Rendering (SSR)** ve **Static Site Generation (SSG)** özellikleri, uygulamanızın performansını önemli ölçüde artırır.

### SSR Örneği

```typescript
// Bu fonksiyon sunucu tarafında çalışır
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data }
  }
}
```

## API Rotaları

Next.js ile API rotaları oluşturmak da oldukça kolaydır. `api` klasörü altında oluşturduğunuz dosyalar otomatik olarak API endpoint'lerine dönüşür. 