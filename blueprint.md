
# Blueprint: Admin Panel de Reservas para IAMOTELES

## Visión General

Este documento describe el plan de desarrollo para la implementación de un panel de administración avanzado dentro de la aplicación IAMOTELES. El objetivo es permitir a los administradores gestionar de forma eficiente el ciclo de vida de las reservas de las habitaciones, desde su disponibilidad hasta su finalización, a través de una interfaz visual intuitiva y en tiempo real.

## Arquitectura y Diseño

La aplicación está construida con React, TypeScript y Vite, utilizando Tailwind CSS para el estilizado. La persistencia de datos y la sincronización en tiempo real se manejan a través de Firebase (Realtime Database y posiblemente Firestore).

El diseño se basa en componentes reutilizables de React para cada elemento de la interfaz, como los botones de estado y los modales, asegurando un código limpio y mantenible.

### Principales Funcionalidades Implementadas

*   Visualización del estado de las habitaciones.
*   Componentes de botón para cada estado (`Disponible`, `Pendiente`, `Reservada`, etc.).
*   Integración inicial con Firebase para la obtención de datos.

### Diseño Visual y Estilos

El diseño seguirá una estética moderna y audaz, utilizando:

*   **Colores de Estado:**
    *   `Disponible`: Verde (#22c55e)
    *   `Pendiente`: Púrpura (#a855f7)
    *   `Reservada`: Rojo/Rosa (#ef4444)
    *   `Ingresada`: Naranja (#f97316)
    *   `Eliminada`: Gris (#6b7280)
    *   `Mantenimiento`: Azul claro (#3b82f6)
*   **Componentes:** Tarjetas para cada habitación con su imagen y botones de acción.
*   **Modales:** Ventanas emergentes para mostrar información detallada sin salir de la vista principal.
*   **Iconografía:** Uso de iconos para acciones comunes (ej. calendario para historial).

## Plan de Desarrollo Actual: Gestión de Estados de Reserva

El objetivo actual es implementar la lógica de negocio completa para el cambio de estado de las habitaciones, específicamente de **"Pendiente" a "Reservada"**, y sentar las bases para los demás estados.

### Pasos de Implementación

1.  **Crear el Modal de Historial de Reservas (`HistorialReservasModal.tsx`):**
    *   Este modal se activará con un botón de "historial" (icono de calendario) en la tarjeta de cada habitación.
    *   Mostrará una lista de todas las reservas pasadas y presentes para esa habitación, obtenidas de Firebase Realtime Database.
    *   Cada entrada en el historial mostrará: Fecha/Hora, estado actual y botones de acción para cambiar el estado.

2.  **Implementar la Lógica para Cambiar de "Pendiente" a "Reservada":**
    *   Al hacer clic en el botón "Reservar" dentro del modal para una reserva pendiente:
        *   Se realizará una copia del registro de la reserva en una nueva entrada o colección en la base de datos llamada `reservas-admin` para fines de auditoría y gestión.
        *   Se actualizará el estado del registro original de la reserva a "Reservada".
        *   La interfaz de usuario (el botón y el texto del estado) se actualizará en tiempo real para reflejar el cambio de color a rosado/rojo.
        *   Se mostrará una confirmación al usuario administrador.

3.  **Conexión a la Base de Datos:**
    *   Se utilizará la configuración existente en `src/firebase.ts` para todas las operaciones con la base de datos.
    *   El acceso a la base de datos se realizará siguiendo las reglas de seguridad de Firebase y las mejores prácticas del SDK cliente.

4.  **Implementar Notificación (Futuro):**
    *   Se diseñará un sistema (posiblemente con Firebase Functions) para que se envíe una notificación (push, email o en la app) al personal 30 minutos antes de la hora de check-in de una reserva confirmada, para preparar la habitación.

5.  **Refactorizar y Generalizar:**
    *   Se creará una función genérica o un hook de React (`useReservationState`) para manejar la lógica de cambio de estado, que pueda ser reutilizada para todas las transiciones de estado (Ingresada, Finalizada, etc.).
