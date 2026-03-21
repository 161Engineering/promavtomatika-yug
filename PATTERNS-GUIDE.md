# Визуальные паттерны: Правильно vs Неправильно

Наглядные примеры правильного и неправильного использования дизайн-паттернов.

---

## ❌ ✅ Grid-структура

### ❌ НЕПРАВИЛЬНО — Grid и container объединены
```html
<section class="section">
    <div class="container competency-grid">
        <article class="competency-card">
            <!-- Карточка будет прижата к левой стороне! -->
        </article>
    </div>
</section>
```
**Проблема:** Карточки прижимаются к левому краю, не центрируются

### ✅ ПРАВИЛЬНО — Grid вложен в container
```html
<section class="section">
    <div class="container">
        <div class="competency-grid">
            <article class="competency-card">
                <!-- Карточка корректно центрирована -->
            </article>
        </div>
    </div>
</section>
```
**Результат:** Карточки центрируются и имеют правильные отступы

---

## ❌ ✅ Section-header

### ❌ НЕПРАВИЛЬНО — Нет структуры заголовка
```html
<section class="section">
    <div class="container">
        <h2>Заголовок секции</h2>
        <p>Какой-то текст</p>
        <div class="competency-grid">
            <!-- карточки -->
        </div>
    </div>
</section>
```
**Проблема:** Нет единообразия, отсутствует section-tag и структура

### ✅ ПРАВИЛЬНО — Полная структура section-header
```html
<section class="section">
    <div class="container">
        <div class="section-header">
            <div>
                <span class="section-tag">Ключевые компетенции</span>
                <h2>Заголовок секции</h2>
            </div>
            <p class="section-note">Пояснительная заметка к секции</p>
        </div>
        <div class="competency-grid">
            <!-- карточки -->
        </div>
    </div>
</section>
```
**Результат:** Единообразный стиль, правильная типографика, визуальная иерархия

---

## ❌ ✅ Изображения

### ❌ НЕПРАВИЛЬНО — Неполные атрибуты
```html
<div class="project-photo-card">
    <img src="images/project.jpg">
</div>
```
**Проблемы:** 
- Нет alt-текста (плохо для SEO и accessibility)
- Нет width/height (layout shift при загрузке)
- Нет loading="lazy" (медленная загрузка страницы)
- Нет IMAGE PROMPT (непонятно, что на картинке должно быть)

### ✅ ПРАВИЛЬНО — Все необходимые атрибуты
```html
<!-- IMAGE PROMPT:
industrial automation engineer inspecting control cabinet with PLC modules, cinematic lighting, high detail
-->
<div class="project-photo-card">
    <img src="images/project-automation.jpg" 
         alt="Инженер по автоматизации проверяет шкаф управления с модулями ПЛК"
         width="1120" height="720" 
         loading="lazy" 
         decoding="async">
</div>
```
**Результат:** SEO-оптимизация, нет layout shift, быстрая загрузка, понятные промпты

---

## ❌ ✅ Кнопки

### ❌ НЕПРАВИЛЬНО — Стандартные ссылки без стилей
```html
<article class="competency-card">
    <h3>Промышленная автоматизация</h3>
    <p>Описание услуги</p>
    <a href="services/industrial-automation.html">Подробнее</a>
</article>
```
**Проблема:** Несогласованный стиль, слабая визуальная привлекательность

### ✅ ПРАВИЛЬНО — Стилизованные кнопки или специальные ссылки
```html
<article class="competency-card">
    <h3>Промышленная автоматизация</h3>
    <p>Описание услуги</p>
    <a class="competency-link" href="services/industrial-automation.html">Подробнее об услуге</a>
</article>

<!-- Или с кнопкой -->
<article class="project-preview-card">
    <h3>Название проекта</h3>
    <p>Описание</p>
    <a class="button button-secondary" href="projects.html">Смотреть проекты</a>
</article>
```
**Результат:** Единообразный стиль, четкие CTA, лучшая конверсия

---

## ❌ ✅ Иконки в карточках

### ❌ НЕПРАВИЛЬНО — Иконки без обертки
```html
<article class="competency-card">
    <svg viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="14" rx="2"></rect>
    </svg>
    <h3>Автоматизация</h3>
    <p>Описание</p>
</article>
```
**Проблема:** Нет стилизации, иконка не выделяется

### ✅ ПРАВИЛЬНО — Иконка в icon-badge
```html
<article class="competency-card">
    <span class="icon-badge" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" 
             stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="5" width="16" height="14" rx="2"></rect>
        </svg>
    </span>
    <h3>Промышленная автоматизация</h3>
    <p>Описание услуги</p>
</article>
```
**Результат:** Иконка стилизована, выделяется визуально, правильная роль (decorative)

---

## ❌ ✅ Цвета и акценты

### ❌ НЕПРАВИЛЬНО — Случайные цвета
```css
.custom-tag {
    color: #0066cc; /* Синий не из палитры */
}

.custom-button {
    background: #28a745; /* Зеленый не брендовый */
}
```
**Проблема:** Нарушает брендовую идентичность

### ✅ ПРАВИЛЬНО — Брендовые цвета
```css
.section-tag {
    color: var(--accent-dark); /* #d45c00 */
}

.button-primary {
    background: var(--accent); /* #ff7a18 */
}

.hero-industrial {
    background: var(--brand-navy); /* #1e2a38 */
}
```
**Результат:** Единообразный брендовый стиль

---

## ❌ ✅ Border Radius

### ❌ НЕПРАВИЛЬНО — Случайные значения
```css
.card-1 { border-radius: 8px; }
.card-2 { border-radius: 15px; }
.card-3 { border-radius: 20px; }
.photo-1 { border-radius: 18px; }
```
**Проблема:** Нет системности, несогласованность

### ✅ ПРАВИЛЬНО — Системные значения
```css
.button { border-radius: 12px; }
.photo-card { border-radius: 16px; }
.card { border-radius: 22px; } /* или var(--radius) */
.pill-tag { border-radius: 999px; }
```
**Результат:** Визуальная согласованность, системный дизайн

---

## ❌ ✅ Контейнеры изображений

### ❌ НЕПРАВИЛЬНО — Смешанные контейнеры
```html
<!-- Где-то используется один класс -->
<div class="photo-wrapper">
    <img src="..." alt="...">
</div>

<!-- Где-то другой -->
<div class="image-container">
    <img src="..." alt="...">
</div>

<!-- Где-то вообще без класса -->
<div>
    <img src="..." alt="...">
</div>
```
**Проблема:** Нет единообразия, сложно поддерживать стили

### ✅ ПРАВИЛЬНО — Стандартизированные контейнеры
```html
<!-- Для карточек проектов -->
<div class="project-photo-card">
    <img src="..." alt="..." width="1120" height="720">
</div>

<!-- Для статей -->
<div class="article-photo-card">
    <img src="..." alt="..." width="1120" height="720">
</div>

<!-- Для инженера -->
<div class="engineer-photo-card">
    <img src="..." alt="..." width="800" height="1000">
</div>
```
**Результат:** Правильные aspect-ratio, единообразие, системность

---

## ❌ ✅ Карточки статей

### ❌ НЕПРАВИЛЬНО — Неполная структура
```html
<article class="article-card">
    <img src="images/article.jpg" alt="...">
    <h3>Заголовок статьи</h3>
    <p>Описание</p>
    <a href="#">Читать</a>
</article>
```
**Проблема:** Нет кикера, изображение без контейнера, ссылка не стилизована

### ✅ ПРАВИЛЬНО — Полная структура с телом карточки
```html
<article class="article-card">
    <div class="article-photo-card">
        <img src="images/article-name.jpg" 
             alt="Детальное описание"
             width="1120" height="720" 
             loading="lazy" decoding="async">
    </div>
    <div class="article-card-body">
        <span class="card-kicker">Статья</span>
        <h3>Заголовок статьи</h3>
        <p>Краткое описание статьи.</p>
        <a class="button button-secondary" href="articles/article-name.html">Читать</a>
    </div>
</article>
```
**Результат:** Правильная структура, типографика, метка, стилизованная кнопка

---

## ❌ ✅ Hero-секция

### ❌ НЕПРАВИЛЬНО — Обычная светлая секция
```html
<section class="section">
    <div class="container">
        <h1>Заголовок</h1>
        <p>Текст</p>
        <a href="#">Кнопка</a>
    </div>
</section>
```
**Проблема:** Слабая визуальная иерархия, не выделяется как главная секция

### ✅ ПРАВИЛЬНО — Темная hero с grid-структурой
```html
<section class="hero hero-industrial">
    <div class="container hero-industrial-grid">
        <div class="hero-copy-panel">
            <span class="eyebrow">Надзаголовок</span>
            <h1>Главный заголовок</h1>
            <p class="lead">Лид-параграф</p>
            <ul class="hero-subpoints">
                <li>Тезис 1</li>
                <li>Тезис 2</li>
            </ul>
            <div class="actions">
                <a class="button button-primary" href="#">Основная кнопка</a>
                <a class="button button-secondary" href="#">Вторичная</a>
            </div>
        </div>
        <aside class="hero-visual-panel">
            <div class="hero-photo-card">
                <img src="..." alt="..." width="720" height="900">
            </div>
        </aside>
    </div>
</section>
```
**Результат:** Выразительная hero-секция, четкая иерархия, мощный визуал

---

## ❌ ✅ Accessibility

### ❌ НЕПРАВИЛЬНО — Без aria-атрибутов
```html
<!-- Нет указания текущей страницы -->
<nav class="site-nav">
    <ul>
        <li><a href="index.html">Главная</a></li>
        <li><a href="services.html">Услуги</a></li>
    </ul>
</nav>

<!-- Иконка без указания role -->
<svg viewBox="0 0 24 24">
    <rect x="4" y="5" width="16" height="14"></rect>
</svg>
```
**Проблема:** Плохая доступность для скринридеров

### ✅ ПРАВИЛЬНО — С aria-атрибутами
```html
<!-- Указание текущей страницы -->
<nav class="site-nav" aria-label="Основная навигация">
    <ul>
        <li><a href="index.html" aria-current="page">Главная</a></li>
        <li><a href="services.html">Услуги</a></li>
    </ul>
</nav>

<!-- Декоративная иконка -->
<span class="icon-badge" aria-hidden="true">
    <svg viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="14"></rect>
    </svg>
</span>
```
**Результат:** Лучшая доступность, SEO, соответствие стандартам

---

## 📚 Итоговые рекомендации

1. **Всегда используйте стандартные классы** из дизайн-системы
2. **Grid вложен в container**, не объединяйте классы
3. **Section-header обязателен** для каждой секции с контентом
4. **Изображения полностью атрибутированы** с IMAGE PROMPT
5. **Кнопки стилизованы** через button-классы
6. **Иконки обернуты** в icon-badge
7. **Цвета брендовые** из палитры CSS-переменных
8. **Border-radius системный** (10/12/16/22/999px)
9. **Accessibility важен** — используйте aria-атрибуты
10. **Консистентность превыше всего** — следуйте паттернам

---

**См. также:**
- [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) — полная документация
- [COMPONENTS-REFERENCE.md](COMPONENTS-REFERENCE.md) — быстрый справочник
