# Basewind - Customizable Styling Library 🚀

Basewind is a modern and flexible styling library designed for React and Next.js. It provides a set of UI components with a **clean and accessible design**, and it allows users to customize styles through **CSS variables** or **Tailwind CSS**.

✅ **Works with or without Tailwind**  
✅ **Fully customizable styles using CSS variables**  
✅ **Modern UI/UX best practices applied**  
✅ **Lightweight and easy to integrate**

---

## 📦 **Installation**

To install Basewind in your project, run the following command:

```bash
npm install basewind
```

During installation, you will be asked:

1. **Do you want to use Tailwind CSS?**
   - If **YES**, Tailwind will be installed automatically, and a `tailwind.config.js` file will be generated.
   - If **NO**, the library will use its default **CSS-based styles**.

---

## 🎨 **Using Basewind in Your Project**

### **📌 Adding Styles to Your Project**

After installing Basewind, you need to import the styles into your project.

#### **React (index.css or global.css)**

```css
@import "basewind/dist/styles.css";
```

#### **Next.js (Global Layout)**

In `app/layout.tsx` (for App Router) or `_app.tsx` (for Pages Router):

```tsx
import "basewind/dist/styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## 🎨 **Customization Options**

### **🎨 Option 1: Customize Using CSS Variables**

If you're **not using Tailwind**, you can modify Basewind styles by overriding CSS variables in your global stylesheet.

```css
:root {
  --primary-btn-color: #ff5733;
  --primary-btn-color-hover: #e63946;
  --secondary-btn-color: #f1f3f5;
  --secondary-btn-color-hover: #dee2e6;
  --text-color: #ffffff;
  --border-radius-btn: 8px;
  --border-radius-input: 6px;
  --transition-speed: 0.3s;
  --primary-input-color: #1e40af;
  --primary-input-background: #f8fafc;
}
```

This will **automatically apply** the new colors and styles to all Basewind components.

---

### **🎨 Option 2: Customize Using Tailwind CSS**

If you installed Basewind with **Tailwind**, you can customize styles using Tailwind's `theme.extend` in `tailwind.config.js`.

#### **Updated Tailwind Configuration**

```js
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733", // Custom user-defined primary color
        secondary: "#33C3FF", // Custom user-defined secondary color
      },
      borderRadius: {
        btn: "8px",
        input: "6px",
      },
      transitionDuration: {
        default: "0.3s",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      const colors = theme("colors");
      const borderRadius = theme("borderRadius");
      const transitionDuration = theme("transitionDuration");

      addBase({
        ":root": {
          "--primary-btn-color": colors.primary,
          "--primary-btn-color-hover": colors.primary,
          "--secondary-btn-color": colors.secondary,
          "--secondary-btn-color-hover": colors.secondary,
          "--border-radius-btn": borderRadius.btn,
          "--border-radius-input": borderRadius.input,
          "--transition-speed": transitionDuration.default,
        },
      });
    },
  ],
} satisfies Config;
```

This method lets **users extend Basewind styles with their own Tailwind settings**.

---

## 📋 **Available Classes**

| **Element**          | **Class**        | **Description**             |
| -------------------- | ---------------- | --------------------------- |
| **Primary Button**   | `.btn-primary`   | Button with primary color   |
| **Secondary Button** | `.btn-secondary` | Button with secondary color |
| **Text Input**       | `.input`         | Styled input field          |
| **Text Area**        | `.textarea`      | Styled text area            |
| **Checkbox**         | `.checkbox`      | Styled checkbox             |
| **Radio Button**     | `.radio`         | Styled radio button         |
| **Toggle Switch**    | `.switch`        | Simple on/off switch        |

---

## 🧪 **Complete Example**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basewind Example</title>
    <link rel="stylesheet" href="basewind/dist/styles.css" />
  </head>
  <body>
    <h1>Basewind UI Components</h1>

    <button class="btn btn-primary">Primary Button</button>
    <button class="btn btn-secondary">Secondary Button</button>

    <input type="text" class="input" placeholder="Enter text here" />
    <textarea class="textarea" placeholder="Write something..."></textarea>

    <label> <input type="checkbox" class="checkbox" /> Accept Terms </label>

    <label> <input type="radio" name="option" class="radio" /> Option 1 </label>
    <label> <input type="radio" name="option" class="radio" /> Option 2 </label>

    <label class="switch">
      <input type="checkbox" />
    </label>
  </body>
</html>
```

---

## 🚀 **Contributions**

Want to improve Basewind? Feel free to open a **Pull Request** or report issues on [GitHub](https://github.com/your-repository).

---

## 📜 **License**

This project is licensed under the **MIT license**, meaning you can use and modify it freely.

---

**Now you have a powerful and customizable UI library for your projects! 🚀🔥**  
For questions or suggestions, feel free to ask!
