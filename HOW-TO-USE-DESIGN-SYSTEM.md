# Инструкция по применению дизайн-системы

Пошаговое руководство для проверки и приведения страниц сайта в соответствие с дизайн-системой главной страницы.

---

## 📋 Перед началом работы

Откройте эти документы в отдельных вкладках:
1. [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) — для справки по компонентам
2. [COMPONENTS-REFERENCE.md](COMPONENTS-REFERENCE.md) — для копирования кода
3. [PATTERNS-GUIDE.md](PATTERNS-GUIDE.md) — для проверки ошибок

---

## 🔍 Проверка существующей страницы

### Шаг 1: Структурная проверка

#### Header
- [ ] Есть `<header class="site-header">`?
- [ ] Внутри есть `<div class="container header-row">`?
- [ ] Brand имеет структуру `brand-title` + `brand-subtitle`?
- [ ] Навигация в `<nav class="site-nav" aria-label="...">`?
- [ ] Активная страница помечена `aria-current="page"`?

#### Main
- [ ] Контент обернут в `<main>`?
- [ ] Каждая смысловая часть в `<section class="section">`?

#### Footer
- [ ] Есть `<footer class="site-footer">`?
- [ ] Внутри `<div class="container footer-grid">`?
- [ ] Три колонки: описание, навигация, контакты?

### Шаг 2: Проверка секций

Для каждой `<section class="section">`:

- [ ] Секция содержит `<div class="container">`?
- [ ] Есть `<div class="section-header">`?
  - [ ] С `<span class="section-tag">`?
  - [ ] С `<h2>`?
  - [ ] С `<p class="section-note">`?
- [ ] Grid-класс вложен ВНУТРИ container? (не объединен)

**Если НЕТ section-header:**
```html
<!-- Добавить перед контентом секции -->
<div class="section-header">
    <div>
        <span class="section-tag">Метка секции</span>
        <h2>Заголовок секции</h2>
    </div>
    <p class="section-note">Пояснительная заметка</p>
</div>
```

**Если grid объединен с container:**
```html
<!-- БЫЛО -->
<div class="container competency-grid">
    <!-- карточки -->
</div>

<!-- ДОЛЖНО БЫТЬ -->
<div class="container">
    <div class="competency-grid">
        <!-- карточки -->
    </div>
</div>
```

### Шаг 3: Проверка карточек

Для каждой карточки проверьте:

#### Competency Card
- [ ] Обернута в `<article class="competency-card">`?
- [ ] Есть `<span class="icon-badge" aria-hidden="true">`?
- [ ] Внутри icon-badge правильный SVG с атрибутами?
- [ ] Есть `<h3>` заголовок?
- [ ] Есть описание в `<p>`?
- [ ] Ссылка использует `class="competency-link"` или `class="button button-secondary"`?

#### Advantage Card
- [ ] Обернута в `<article class="advantage-card">`?
- [ ] Есть icon-badge?
- [ ] Есть `<h3>` и `<p>`?

#### Project/Article Card
- [ ] Есть контейнер изображения (`project-photo-card` или `article-photo-card`)?
- [ ] IMAGE PROMPT комментарий перед изображением?
- [ ] Изображение имеет width, height, alt, loading, decoding?
- [ ] Для article-card есть `<div class="article-card-body">`?
- [ ] Есть `<span class="card-kicker">` с меткой?
- [ ] Кнопка использует `class="button button-secondary"`?

### Шаг 4: Проверка изображений

Для КАЖДОГО изображения:

```html
<!-- Должна быть эта структура -->

<!-- IMAGE PROMPT:
реалистичное описание сцены, cinematic lighting, high detail
-->
<div class="[тип]-photo-card">
    <img src="images/filename.jpg" 
         alt="Детальное описание на русском"
         width="1120" height="720" 
         loading="lazy" 
         decoding="async">
</div>
```

Проверьте:
- [ ] Есть IMAGE PROMPT комментарий?
- [ ] Изображение в правильном контейнере?
- [ ] Указан width?
- [ ] Указан height?
- [ ] Указан alt (детальный, на русском)?
- [ ] Есть loading="lazy" (кроме hero)?
- [ ] Есть decoding="async"?

### Шаг 5: Проверка кнопок и ссылок

- [ ] Основные CTA используют `class="button button-primary"`?
- [ ] Вторичные используют `class="button button-secondary"`?
- [ ] Ссылки в competency-card используют `class="competency-link"`?
- [ ] Нет "голых" ссылок без стилизации?

### Шаг 6: Проверка цветов и стилей

- [ ] Используются только брендовые цвета из палитры?
- [ ] Border-radius соответствует системе (10/12/16/22/999px)?
- [ ] Нет случайных значений отступов?

---

## ✏️ Создание новой страницы

### Шаг 1: Копируем базовую структуру

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Заголовок страницы | ПромАвтоматика Юг</title>
    <meta name="description" content="Описание страницы">
    <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <!-- Header: копировать из index.html -->
    <header class="site-header">
        <!-- ... -->
    </header>

    <main>
        <!-- Секции здесь -->
    </main>

    <!-- Footer: копировать из index.html -->
    <footer class="site-footer">
        <!-- ... -->
    </footer>

    <script src="assets/js/main.js"></script>
</body>
</html>
```

### Шаг 2: Добавляем секцию с заголовком

Из [COMPONENTS-REFERENCE.md](COMPONENTS-REFERENCE.md) копируем:

```html
<section class="section">
    <div class="container">
        <div class="section-header">
            <div>
                <span class="section-tag">Метка секции</span>
                <h2>Заголовок секции</h2>
            </div>
            <p class="section-note">Пояснительный текст о секции</p>
        </div>
        <!-- Grid с карточками -->
    </div>
</section>
```

### Шаг 3: Выбираем нужный тип grid и карточек

Открываем [COMPONENTS-REFERENCE.md](COMPONENTS-REFERENCE.md), находим нужный тип:

- Компетенции/услуги → `competency-grid` + `competency-card`
- Преимущества → `advantage-grid` + `advantage-card`
- Проекты → `project-preview-grid` + `project-preview-card`
- Статьи → `article-preview-grid` + `article-card`
- Регионы → `region-grid` + `region-card`
- Этапы → `timeline-grid` + `workflow-step`

Копируем весь код grid + карточки.

### Шаг 4: Заполняем контентом

1. Заменяем заголовки и тексты
2. Добавляем IMAGE PROMPT комментарии
3. Прописываем правильные пути к изображениям
4. Указываем width/height для изображений
5. Пишем детальные alt-тексты
6. Проверяем все ссылки

### Шаг 5: Проверяем по чек-листу

Используем чек-лист из раздела "Проверка существующей страницы" выше.

---

## 🔧 Автоматическое исправление

### Исправление Grid-структуры

Если на странице grid-классы объединены с container:

```powershell
PowerShell -ExecutionPolicy Bypass -File "tools/fix-grid-containers.ps1"
```

Скрипт автоматически исправит:
```html
<!-- ДО -->
<div class="container competency-grid">

<!-- ПОСЛЕ -->
<div class="container">
    <div class="competency-grid">
```

Для всех grid-классов во всех HTML файлах проекта.

---

## 📊 Проверка качества

### Визуальная проверка

1. Откройте страницу в браузере
2. Сравните с главной страницей (index.html)
3. Проверьте:
   - [ ] Карточки выровнены по центру (не прижаты к левому краю)
   - [ ] Все section-tag оранжевого цвета
   - [ ] Кнопки имеют правильные стили
   - [ ] Hover-эффекты работают на карточках
   - [ ] Изображения не "прыгают" при загрузке
   - [ ] Border-radius единообразный
   - [ ] Отступы консистентные

### Проверка HTML

```powershell
# В VS Code откройте панель проблем
Ctrl+Shift+M
```

Или используйте встроенную функцию Get Errors.

### Проверка с эталоном

Откройте рядом:
- Вашу страницу
- index.html (эталон)

Сравните визуально секции, карточки, отступы, цвета.

---

## 🎯 Приоритезация исправлений

### Критично (исправить в первую очередь)
1. Grid объединен с container → карточки прижаты влево
2. Отсутствует section-header
3. Изображения без width/height → layout shift
4. Изображения без alt → плохой SEO

### Важно (исправить во вторую очередь)
1. Отсутствует IMAGE PROMPT
2. Кнопки без стилей
3. Иконки без icon-badge
4. Неправильные border-radius
5. Случайные цвета (не из палитры)

### Желательно (улучшения)
1. Добавить aria-атрибуты
2. Улучшить alt-тексты
3. Оптимизировать изображения
4. Добавить section-note где нужно

---

## 📖 Полезные ссылки

- [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) — полная документация
- [COMPONENTS-REFERENCE.md](COMPONENTS-REFERENCE.md) — быстрый справочник
- [PATTERNS-GUIDE.md](PATTERNS-GUIDE.md) — примеры ошибок
- [DESIGN-DOCS-README.md](DESIGN-DOCS-README.md) — навигация

---

## ✅ Финальный чек-лист перед коммитом

- [ ] Все секции имеют section-header
- [ ] Grid-классы вложены в container
- [ ] Все изображения атрибутированы: width, height, alt, loading, decoding
- [ ] Все изображения имеют IMAGE PROMPT комментарий
- [ ] Кнопки используют button-классы
- [ ] Иконки в icon-badge
- [ ] Навигация имеет aria-current на активной странице
- [ ] Цвета только из брендовой палитры
- [ ] Border-radius системный
- [ ] Нет ошибок валидации HTML
- [ ] Визуально соответствует главной странице
- [ ] Адаптивность работает на всех экранах

---

**Следование дизайн-системе обеспечивает единообразие и профессиональный вид сайта! 🎨✨**
