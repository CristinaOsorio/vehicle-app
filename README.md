# Proyecto de Frontend - Gestión de Vehículos

Este proyecto de frontend está desarrollado en **Angular** y **Tailwind CSS**. Permite gestionar una lista de vehículos, incluyendo la visualización, creación, actualización y baja de los mismos.

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

-   Node.js (v17 o superior)
-   Angular CLI (v18 o superior)

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/CristinaOsorio/vehicle-app
```

### Navegar al directorio del proyecto

```bash
cd vehicle-app
```

### Instalar `nvm` (Node Version Manager) [Opcional]

Si prefieres usar `nvm` para gestionar versiones de Node.js, sigue las instrucciones en la [documentación oficial de nvm](https://github.com/nvm-sh/nvm#installing-and-updating) para instalarlo.

Luego, instala la versión recomendada de Node.js especificada en el archivo `.nvmrc`:

```bash
nvm install
```

Asegúrate de usar la versión correcta con:

```bash
nvm use
```

**Nota:** Si no utilizas `nvm`, asegúrate de tener la versión recomendada de Node.js instalada. La versión requerida está especificada en el archivo `.nvmrc`.

### Instalar las dependencias

```bash
npm install
```

## Configuración

Asegúrate de que las variables de entorno, como las URLs de las APIs de backend, estén configuradas correctamente en el archivo `environment.ts` (para desarrollo) o `environment.prod.ts` (para producción) dentro de la carpeta `src/environments`.

Ejemplo de configuración en `environment.ts`:

```ts
export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api', // URL de la API del backend
};
```

## Scripts Disponibles

-   `ng serve`: Ejecuta la aplicación en modo de desarrollo. La aplicación estará disponible en [http://localhost:4200](http://localhost:4200).
-   `ng build`: Compila la aplicación para producción. Los archivos de salida se generarán en la carpeta `dist/`.

## Estructura del Proyecto

## Estructura del Proyecto

-   **src/app/core/**: Utilidades utilizadas en toda la aplicación.

    -   **custom-validators/**: Validadores personalizados para formularios, que permiten agregar reglas de validación específicas.
    -   **enums/**: Enumeraciones que definen constantes y opciones utilizadas en diferentes partes de la aplicación.
    -   **handles/**: Manejadores para controlar y gestionar la lógica.
    -   **interfaces/**: Definiciones de interfaces que establecen las estructuras de los datos utilizados en la aplicación.
    -   **pipes/**: Transformaciones de datos personalizadas que se pueden aplicar en las vistas.
    -   **services/**: Servicios que encapsulan la lógica para la comunicación con APIs y manejo de datos.

-   **src/app/features/**: Agrupación de funcionalidades específicas de la aplicación, incluyendo componentes y servicios relacionados con vehículos.

    -   **vehicles/**: Módulo principal que gestiona la funcionalidad relacionada con los vehículos.
        -   **components/**: Componentes específicos para la gestión de vehículos.
            -   **confirm-inactive-vehicle/**: Componente modal para confirmar la baja de un vehículo.
            -   **modal-edit-vehicle/**: Componente modal para editar los detalles de un vehículo.
        -   **create-vehicle/**: Componente para la creación de nuevos vehículos.
        -   **vehicle-list/**: Componente que muestra la lista de vehículos registrados.

-   **src/app/shared/**: Contiene componentes y utilidades comunes que son reutilizables en toda la aplicación.

    -   **footer/**: Componente que representa el pie de página de la aplicación.
    -   **navbar/**: Componente de la barra de navegación superior.

-   **src/environments/**: Archivos de configuración del entorno que definen las URLs y otros parámetros específicos para diferentes entornos (desarrollo, producción, etc.).

-   **tailwind.config.js**: Archivo de configuración para Tailwind CSS, donde se pueden definir personalizaciones y extensiones del framework de estilos.

## Principales Componentes

-   **VehicleListComponent**: Muestra la lista de vehículos y permite la gestión de cada uno.
-   **CreateVehicleComponent**: Componente para crear nuevos vehículos.
-   **ModalEditVehicle**: Componente modal para editar los detalles de un vehículo existente.
-   **ConfirmModalComponent**: Componente de modal de confirmación para dar de baja un vehículo.
-   **VehicleService**: Servicio para interactuar con la API de vehículos.

## Dependencias

-   **Angular**: Framework de frontend.
-   **Tailwind CSS**: Framework de estilos para diseño responsivo.

## Funcionalidades

-   **Lista de vehículos**: Visualización de todos los vehículos registrados.
-   **Formulario de creación**: Formulario para agregar datos de un vehículo.
-   **Modal de Edición de vehículos**: Edición de los detalles de un vehículo existente
-   **Modal de confirmación de baja**: Confirmación para dar de baja un vehículo.
-   **Validaciones**: Las validaciones se realizan en tiempo real y al enviar el formulario.
-   **Interacción con backend**: La aplicación se comunica con el backend para obtener y enviar el formulario
