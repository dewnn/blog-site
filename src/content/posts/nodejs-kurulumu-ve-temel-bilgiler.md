---
id: '3'
title: 'Node.js Kurulumu ve Temel Bilgiler'
excerpt: 'Node.js kurulumu ve başlangıç için gerekli temel bilgileri bu yazıda bulabilirsiniz.'
date: '2023-12-29'
author: 'dewn'
---

# Node.js Kurulumu ve Temel Bilgiler

Node.js, JavaScript kodunu tarayıcı dışında çalıştırmanızı sağlayan güçlü bir runtime ortamıdır. Bu yazıda Node.js'i nasıl kuracağınızı ve temel kullanımını öğreneceksiniz.

## macOS'a Kurulum

macOS'ta Node.js'i kurmanın en kolay yolu Homebrew kullanmaktır:

```bash
# Homebrew kurulumu (eğer kurulu değilse)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js kurulumu
brew install node
```

## Windows'a Kurulum

Windows için Node.js'in resmi sitesinden installer'ı indirip kurabilirsiniz:

1. [nodejs.org](https://nodejs.org) adresine gidin
2. LTS (Long Term Support) versiyonunu indirin
3. İndirilen .msi dosyasını çalıştırın
4. Kurulum sihirbazını takip edin

## Linux'a Kurulum

Ubuntu/Debian için:

```bash
# Repository'yi ekleyin
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

# Node.js'i kurun
sudo apt-get install -y nodejs
```

## Kurulumu Doğrulama

Kurulumun başarılı olup olmadığını kontrol etmek için:

```bash
# Node.js versiyonunu kontrol edin
node --version

# npm versiyonunu kontrol edin
npm --version
```

## İlk Node.js Uygulaması

Kurulum tamamlandıktan sonra basit bir test yapabilirsiniz:

```javascript
// hello.js
console.log('Merhaba, Node.js!');

// Dosyayı çalıştırmak için:
// node hello.js
```

> Not: Node.js kurulumu ile birlikte npm (Node Package Manager) de otomatik olarak kurulur. npm, JavaScript kütüphanelerini yönetmenizi sağlar.

