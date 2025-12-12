# Simple Sauce Demo Automation

Este proyecto automatiza el flujo de login y validación de la página de productos utilizando:

- Playwright
- Cucumber
- TypeScript

---

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Fiorella1893/retro-automatizacion.git
cd retro-automatizacion
```

2. Instalar dependencias:
```bash
npm install
npx playwright install
```

> `npx playwright install` asegura que los navegadores necesarios estén instalados para ejecutar las pruebas.

---

## Ejecutar pruebas

Para correr las pruebas:
```bash
npm test
```

> Esto ejecutará todos los tests definidos en el proyecto.

---

## Estructura del proyecto

- `features/` → Archivos `.feature` con los escenarios de prueba.  
- `src/pages/` → Páginas implementadas usando Page Object Model (POM).  
- `src/steps/` → Steps en español que implementan los escenarios de prueba.  
- `src/support/` → Hooks, configuración y utilidades compartidas.

---

## Autor

Fiorella I.

