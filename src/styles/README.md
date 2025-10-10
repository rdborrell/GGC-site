# Styles Organization

This project uses a modern, organized approach to styling with a combination of:
- **Tailwind CSS** for utility classes
- **Custom theme system** for consistent design tokens
- **Component-specific styles** in index.css

## Directory Structure

```
src/
├── theme/              # Design tokens and utilities
│   ├── colors.js       # Color palette
│   ├── spacing.js      # Spacing utilities
│   ├── typography.js   # Typography styles
│   └── index.js        # Consolidated theme exports
├── styles/             # Documentation
├── index.css           # Global styles and custom CSS
└── style.js            # Legacy support (use theme/ instead)
```

## Theme System

### Colors (`theme/colors.js`)
Centralized color definitions that can be imported and used throughout the app.

```javascript
import { colors } from '../theme';
// colors.primary, colors.accent, etc.
```

### Spacing (`theme/spacing.js`)
Consistent spacing utilities for padding, margins, and container widths.

```javascript
import { spacing } from '../theme';
// spacing.paddingX, spacing.boxWidth, etc.
```

### Typography (`theme/typography.js`)
Pre-defined text styles for headings, body text, and more.

```javascript
import { typography } from '../theme';
// typography.heading1, typography.paragraph, etc.
```

### Layout Utilities (`theme/index.js`)
Flexbox and layout helper classes.

```javascript
import { layout } from '../theme';
// layout.flexCenter, layout.section, etc.
```

## Layout Components

Reusable layout components in `components/layout/`:

- **Container**: Max-width wrapper with responsive padding
- **Section**: Flexible section component with built-in styling options
- **PageLayout**: Top-level page wrapper with consistent structure

## Usage Examples

### Using Theme in Components

```javascript
import { typography, spacing } from '../theme';

const MyComponent = () => (
  <div className={spacing.padding}>
    <h1 className={typography.heading1}>Title</h1>
    <p className={typography.paragraph}>Content</p>
  </div>
);
```

### Using Layout Components

```javascript
import { Section } from './components/layout';

const MySection = () => (
  <Section id="my-section" centered={false}>
    <h2>My Section</h2>
    <p>Content here</p>
  </Section>
);
```

## Migration Notes

The old `style.js` file is maintained for backward compatibility but new code should use the `theme/` system. The theme system provides:

1. Better organization with separate concerns
2. Improved type safety and autocomplete
3. Easier maintenance and updates
4. Clearer component APIs

## Tailwind Configuration

Custom colors and fonts are configured in `tailwind.config.cjs`:
- Custom colors: primary, secondary, dimWhite, dimBlue
- Custom font: Poppins
- Custom breakpoints for responsive design
