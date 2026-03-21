# Дизайн-система главной страницы ПромАвтоматика Юг

Этот документ описывает ключевые паттерны дизайна, структуру и компоненты главной страницы (index.html), которые должны использоваться для единообразия на всех страницах сайта.

---

## 🎨 Цветовая палитра

### Основные цвета
```css
--brand-navy: #1e2a38           /* Темно-синий брендовый */
--brand-navy-deep: #111820      /* Глубокий темно-синий */
--brand-graphite: #3f4a54       /* Графитовый */
--accent: #ff7a18               /* Оранжевый акцент */
--accent-hover: #ff8f3c         /* Оранжевый при наведении */
--accent-dark: #d45c00          /* Темный оранжевый */
```

### Нейтральные цвета
```css
--bg: #ffffff                   /* Фон */
--surface: #f3f5f7              /* Поверхность */
--text: #1f2731                 /* Основной текст */
--muted: #586574                /* Приглушенный текст */
--line: #d6dde4                 /* Линии/границы */
```

### Применение
- **Акцентный оранжевый**: кнопки, ссылки, иконки, section-tag
- **Темно-синий**: футер, темные секции, hero-фоны
- **Графитовый**: заголовки, вспомогательные элементы

---

## 📐 Структура страницы

### 1. Header (Шапка сайта)
```html
<header class="site-header">
    <div class="container header-row">
        <a class="brand" href="index.html">
            <span class="brand-title">ПромАвтоматика Юг</span>
            <span class="brand-subtitle">Подзаголовок компании</span>
        </a>
        <button class="menu-toggle" type="button">Меню</button>
        <nav class="site-nav" id="site-nav">
            <ul>
                <li><a href="index.html" aria-current="page">Главная</a></li>
                <!-- остальные пункты меню -->
            </ul>
        </nav>
    </div>
</header>
```

**Особенности:**
- Sticky header с backdrop-filter
- Класс `header-row` для layout (flex, space-between)
- `aria-current="page"` на активном пункте меню
- Адаптивное меню с `menu-toggle`

### 2. Main Content (Основной контент)
Всегда обернут в `<main>`, содержит секции

### 3. Footer (Подвал)
```html
<footer class="site-footer">
    <div class="container footer-grid">
        <div><!-- О компании --></div>
        <nav class="footer-nav"><!-- Навигация --></nav>
        <div class="contact-list"><!-- Контакты --></div>
    </div>
</footer>
```

**Особенности:**
- Темный фон (brand-navy)
- Трехколоночная сетка `footer-grid`
- Белый/светлый текст

---

## 🏗️ Паттерны секций

### Стандартная секция с заголовком

```html
<section class="section">
    <div class="container">
        <div class="section-header">
            <div>
                <span class="section-tag">Метка секции</span>
                <h2>Заголовок секции</h2>
            </div>
            <p class="section-note">Пояснительная заметка к секции</p>
        </div>
        <!-- Контент секции (grid/cards) -->
    </div>
</section>
```

**Ключевые элементы:**
- `.section` — обертка секции (padding 42px 0)
- `.section-header` — заголовочный блок секции
- `.section-tag` — малый заголовок uppercase (оранжевый)
- `.section-note` — пояснительный текст (muted цвет)

### Hero-секция (Главная страница)

```html
<section class="hero hero-industrial">
    <div class="container hero-industrial-grid">
        <div class="hero-copy-panel">
            <span class="eyebrow">Надзаголовок</span>
            <h1>Главный заголовок</h1>
            <p class="lead">Лид-параграф</p>
            <ul class="hero-subpoints"><!-- Ключевые тезисы --></ul>
            <div class="actions">
                <a class="button button-primary" href="#">Основная кнопка</a>
                <a class="button button-secondary" href="#">Вторичная кнопка</a>
            </div>
            <div class="hero-kpis"><!-- KPI метрики --></div>
            <div class="hero-detail"><!-- Детальная информация --></div>
        </div>
        <aside class="hero-visual-panel">
            <div class="hero-photo-card">
                <img src="images/..." alt="..." width="720" height="900">
            </div>
            <ul class="signal-grid"><!-- Теги/метки --></ul>
            <aside class="hero-summary"><!-- Резюме --></aside>
        </aside>
    </div>
</section>
```

**Особенности:**
- Темный фон с градиентами
- Двухколоночная grid-структура (1.12fr / 0.88fr)
- Полупрозрачные панели с backdrop-filter
- KPI-метрики в grid 4 колонки
- Белый/светлый текст

---

## 🎴 Типы карточек

### 1. Competency Card (Карточка компетенции)
```html
<article class="competency-card">
    <span class="icon-badge" aria-hidden="true">
        <svg viewBox="0 0 24 24"><!-- SVG иконка --></svg>
    </span>
    <h3>Название компетенции</h3>
    <p>Описание компетенции</p>
    <a class="competency-link" href="#">Подробнее</a>
</article>
```

**Grid:** `.competency-grid` — 3 колонки

### 2. Advantage Card (Карточка преимущества)
```html
<article class="advantage-card">
    <span class="icon-badge" aria-hidden="true">
        <svg viewBox="0 0 24 24"><!-- SVG иконка --></svg>
    </span>
    <h3>Преимущество</h3>
    <p>Описание</p>
</article>
```

**Grid:** `.advantage-grid` — 3 колонки

### 3. Project Preview Card (Превью проекта)
```html
<article class="project-preview-card">
    <div class="project-photo-card">
        <img src="images/..." alt="..." width="1120" height="720">
    </div>
    <h3>Название проекта</h3>
    <p>Описание проекта</p>
    <a class="button button-secondary" href="#">Смотреть проекты</a>
</article>
```

**Grid:** `.project-preview-grid` — 3 колонки  
**Aspect ratio:** 14:9 для фото

### 4. Article Card (Карточка статьи)
```html
<article class="article-card">
    <div class="article-photo-card">
        <img src="images/..." alt="..." width="1120" height="720">
    </div>
    <div class="article-card-body">
        <span class="card-kicker">Статья</span>
        <h3>Заголовок статьи</h3>
        <p>Краткое описание</p>
        <a class="button button-secondary" href="#">Читать</a>
    </div>
</article>
```

**Grid:** `.article-preview-grid` — 3 колонки  
**Aspect ratio:** 14:9 для фото

### 5. Workflow Step (Этап рабочего процесса)
```html
<article class="workflow-step">
    <span class="step-number">1</span>
    <h3>Название этапа</h3>
    <p>Описание этапа</p>
</article>
```

**Grid:** `.timeline-grid` — 5 колонок

### 6. Region Card (Карточка региона)
```html
<article class="region-card">
    <h3><a href="regions/region.html">Название региона</a></h3>
    <p>Описание специфики региона</p>
</article>
```

**Grid:** `.region-grid` — 3 колонки

### 7. Object Feature (Типовой объект)
```html
<a class="object-feature large" href="...">
    <div class="object-feature-media">
        <img src="images/..." alt="..." width="1120" height="720">
    </div>
    <div class="object-feature-content">
        <h3>Тип объекта</h3>
        <p>Описание</p>
    </div>
</a>
```

**Grid:** `.object-showcase-grid` — 12 колонок  
**Размеры:** `.large` (span 6), `.small` (span 4)

---

## 🔘 Кнопки и ссылки

### Кнопки
```html
<!-- Основная кнопка -->
<a class="button button-primary" href="#">Связаться</a>

<!-- Вторичная кнопка -->
<a class="button button-secondary" href="#">Наши услуги</a>
```

**Стили:**
- `button-primary`: оранжевый фон, белый текст, hover эффект
- `button-secondary`: прозрачный с границей, hover заполнение

### Специальные ссылки
```html
<!-- Ссылка в карточке компетенции -->
<a class="competency-link" href="#">Подробнее об услуге</a>
```

---

## 🖼️ Изображения

### Image Prompts
Каждое изображение должно иметь HTML-комментарий с промптом:
```html
<!-- IMAGE PROMPT:
industrial automation engineer inspecting control cabinet with PLC modules inside large industrial plant, cinematic lighting, realistic engineering photography, high detail
-->
<div class="hero-photo-card">
    <img src="images/hero-industrial-automation.jpg" 
         alt="Инженер по промышленной автоматизации у шкафа управления"
         width="720" height="900">
</div>
```

### Типы контейнеров
- `.hero-photo-card` — aspect-ratio не задан (auto), min-height: 520px
- `.engineer-photo-card` — aspect-ratio: 4/5
- `.project-photo-card` — aspect-ratio: 14/9
- `.article-photo-card` — aspect-ratio: 14/9

### Атрибуты изображений
- `width` и `height` — всегда указываются
- `alt` — детальное описание на русском
- `loading="lazy"` — для всех кроме hero
- `fetchpriority="high"` — только для hero
- `decoding="async"` — для всех изображений

---

## 📏 Сетки (Grids)

### Основные grid-классы и их структура

| Grid класс | Колонки | Использование |
|------------|---------|---------------|
| `.competency-grid` | 3 | Карточки компетенций |
| `.advantage-grid` | 3 | Карточки преимуществ |
| `.timeline-grid` | 5 | Этапы работы |
| `.project-preview-grid` | 3 | Превью проектов |
| `.article-preview-grid` | 3 | Превью статей |
| `.region-grid` | 3 | Карточки регионов |
| `.object-showcase-grid` | 12 | Типовые объекты (span 4/6) |
| `.hero-industrial-grid` | 2 | Hero-секция (1.12fr / 0.88fr) |

**Gap:** стандартно 22px между элементами

### Структура nested grid
```html
<div class="container">
    <div class="GRID-CLASS">
        <!-- карточки -->
    </div>
</div>
```

⚠️ **ВАЖНО:** Grid-класс должен быть вложен в `.container`, НЕ объединен с ним!

---

## 📝 Типографика

### Заголовки
- `h1` — главный заголовок страницы (обычно в hero)
- `h2` — заголовки секций
- `h3` — заголовки карточек

### Параграфы
- `.lead` — лид-параграф (крупнее обычного)
- `.section-note` — пояснительный текст (приглушенный)
- Обычный `<p>` — основной текст

### Метки
- `.section-tag` — метка секции (uppercase, оранжевая)
- `.card-kicker` — метка карточки (uppercase, оранжевая)
- `.eyebrow` — надзаголовок в hero

### Списки
- `.hero-subpoints` — маркированный список в hero (pill-стиль)
- `.signal-grid` — теги в виде pill'ов
- `.summary-list` — список с кастомными маркерами
- `.engineer-facts` — факты об инженере
- `.check-list` — список с точками-маркерами

---

## 🎭 Особые паттерны

### Contact Actions (CTA блок с контактами)
```html
<div class="container cta-strip">
    <h2>Заголовок CTA</h2>
    <p>Описание</p>
    <div class="contact-actions">
        <a class="contact-action" href="tel:...">
            <strong>Позвонить</strong>
            <small>Описание</small>
        </a>
        <!-- еще 2-3 действия -->
    </div>
</div>
```

**Grid:** `.contact-actions` — 3 колонки

### Engineer Layout (Блок с инженером)
```html
<div class="container engineer-layout">
    <article class="engineer-panel">
        <div class="engineer-photo-card">
            <img src="..." alt="...">
        </div>
    </article>
    <article class="engineer-panel">
        <span class="section-tag">Метка</span>
        <h2>Заголовок</h2>
        <p>Текст</p>
        <ul class="engineer-facts"><!-- Факты --></ul>
        <a class="button button-secondary" href="#">Подробнее</a>
    </article>
</div>
```

**Grid:** 2 колонки

---

## 🎨 Визуальные эффекты

### Box Shadows
```css
--shadow: 0 22px 48px rgba(17, 24, 32, 0.10);
--shadow-soft: 0 16px 30px rgba(30, 42, 56, 0.08);
```

### Border Radius
- `10px` — мелкие элементы
- `12px` — средние кнопки/карточки
- `16px` — фото/изображения, KPI-блоки
- `22px` (var(--radius)) — крупные панели, карточки
- `999px` — pill-элементы (hero-subpoints, signal-grid)

### Hover эффекты
Карточки при наведении:
```css
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(30, 42, 56, 0.12);
}
```

### Backdrop Filter
Используется в hero-панелях:
```css
backdrop-filter: blur(10px);
```

---

## 📱 Адаптивность

### Breakpoints
```css
@media (max-width: 1280px)  /* Средние экраны */
@media (max-width: 1080px)  /* Планшеты */
@media (max-width: 760px)   /* Мобильные */
```

### Адаптивные grid
- На планшетах: 3 колонки → 2 колонки
- На мобильных: → 1 колонка
- Timeline-grid (5 колонок) → 1 колонка на мобильных

### Адаптивные размеры через clamp()
```css
font-size: clamp(1.5rem, 2vw, 2rem);
```

---

## ✅ Чек-лист соответствия дизайну

При создании/проверке страницы убедитесь:

- [ ] Header с классами `site-header`, `header-row`, `brand`
- [ ] Footer с классами `site-footer`, `footer-grid`
- [ ] Секции обернуты в `<section class="section">`
- [ ] Каждая секция содержит `<div class="container">`
- [ ] Grid-классы вложены ВНУТРИ `.container`, не объединены
- [ ] Section-header включает `section-tag` + `h2` + `section-note`
- [ ] Изображения имеют IMAGE PROMPT комментарий
- [ ] Изображения имеют width, height, alt
- [ ] Кнопки используют классы `button-primary` или `button-secondary`
- [ ] Карточки используют стандартные классы (competency-card, advantage-card, etc.)
- [ ] Icon-badge в карточках с SVG иконками
- [ ] Цвета соответствуют брендовым (оранжевый акцент, темно-синий)
- [ ] Border-radius соответствует системе (10/12/16/22px)
- [ ] Hover-эффекты на карточках и кнопках
- [ ] Адаптивные grid для разных экранов

---

## 📋 Примечания

1. **Консистентность**: все страницы должны использовать один и тот же набор компонентов
2. **Семантика**: правильное использование HTML5 тегов (article, aside, nav, section)
3. **Accessibility**: aria-атрибуты где необходимо (aria-label, aria-current)
4. **Performance**: loading="lazy" для изображений вне viewport
5. **SEO**: alt-тексты на русском языке с детальным описанием

---

**Версия:** 1.0  
**Дата создания:** 2026-03-21  
**Базовая страница:** index.html
