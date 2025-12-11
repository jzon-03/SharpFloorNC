# NC Editor Component

A sophisticated G-Code editor built with Angular and PrismJS for syntax highlighting.

## Features

### 🎨 Syntax Highlighting
- Real-time G-Code syntax highlighting using PrismJS
- Color-coded tokens:
  - **Comments** (`;`) - Green italic
  - **Addresses** (G, M, X, Y, Z codes) - Blue bold
  - **Numbers** - Light green
  - **Operators** (+, -, *, /) - White
  - **Punctuation** - Light gray

### ⚙️ Editor Features
- **Line Numbers** - Automatically updated line numbering
- **Code Statistics** - Real-time display of lines, characters, and file size
- **Responsive Design** - Works on desktop and mobile devices
- **Dark Theme** - Professional dark coding theme

### 📁 File Operations
- **Load Files** - Import .nc, .cnc, .gcode, or .txt files
- **Download Code** - Save your G-Code as .nc files
- **Clear Editor** - Quick clear function

### 📚 Sample Programs
- **Pocket Milling** - Complete pocket milling program
- **Drilling Cycle** - Multi-hole drilling program with G81 cycle
- **Contour Milling** - Arc interpolation example with G2/G3

### 📖 Built-in Reference
- **G-Code Reference** - Quick reference for common G-codes
- **M-Code Reference** - Quick reference for common M-codes
- **Expandable Panels** - Organized help information

## Usage

1. Navigate to **Tools** → **NC Editor** tab
2. Start typing your G-Code or load a sample program
3. Use the toolbar buttons to:
   - Load sample programs from the dropdown
   - Load files from your computer
   - Download your code
   - Clear the editor
4. Expand the reference panels for G-Code help

## Technical Implementation

### Dependencies
- **PrismJS** - Syntax highlighting engine
- **Angular Material** - UI components
- **Custom G-Code Grammar** - Specialized syntax highlighting rules

### Component Structure
```
nc-editor/
├── nc-editor.component.ts     # Main component logic
├── nc-editor.component.html   # Template with editor UI
└── nc-editor.component.css    # Styling and theme
```

### Key Methods
- `highlightCode()` - Applies syntax highlighting
- `loadSample()` - Loads predefined sample programs
- `downloadCode()` - Downloads code as .nc file
- `loadFile()` - Imports files from computer
- `updateLineNumbers()` - Updates line numbering

## Supported G-Code Elements

The editor recognizes and highlights:
- **Line Numbers** (N10, N20, etc.)
- **G-Codes** (G0, G1, G2, G3, etc.)
- **M-Codes** (M3, M5, M6, M30, etc.)
- **Axis Commands** (X, Y, Z with values)
- **Feed/Speed** (F, S with values)
- **Comments** (anything after `;`)
- **Coordinates** (I, J, K arc centers)

## Future Enhancements

Potential features for future development:
- [ ] G-Code validation and error detection
- [ ] Auto-completion for G-Code commands
- [ ] Program simulation preview
- [ ] Tool path visualization
- [ ] Machine-specific post-processors
- [ ] Collaborative editing features