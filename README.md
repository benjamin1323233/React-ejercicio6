# Administrador de Colores 🎨

Este proyecto es una aplicación web creada con React y Bootstrap que permite al usuario seleccionar un color, asignarle un nombre personalizado y visualizarlo en una grilla. Además, las selecciones se almacenan en `localStorage`, por lo que se conservan entre recargas.

## ✨ Características

- Selección de colores mediante un input tipo `color`.
- Asignación de un nombre personalizado a cada color.
- Visualización de cada color en una tarjeta con su nombre.
- Botón para eliminar individualmente colores agregados.
- Persistencia automática con `localStorage`.
- Diseño responsivo utilizando `react-bootstrap`.

## 📦 Tecnologías utilizadas

- [React](https://react.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## ⚙️ Cómo funciona

1. El usuario elige un color y le asigna un nombre.
2. Al hacer clic en "Guardar", la tarjeta con el color y nombre se agrega a la lista.
3. Cada tarjeta incluye un botón "Borrar" que permite eliminarla.
4. Todos los colores guardados se almacenan en `localStorage`.
5. Al recargar la página, los colores previamente guardados se vuelven a cargar automáticamente.

## 🧠 Detalles técnicos

- El componente `FormColores` maneja el estado de los colores y sus nombres.
- Se utiliza un `useEffect` para sincronizar el estado con `localStorage` cada vez que cambia la lista.
- Las tarjetas de colores se renderizan mediante el componente `ItemGrilla`, que recibe props con la información de cada color.
- La lógica evita el uso de clases con propiedades privadas para garantizar la compatibilidad con `localStorage`.

## 👨‍💻 Autor

Creado por **José Benjamín Quirós**.

---

