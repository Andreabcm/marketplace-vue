# TELANTO Academic Business Cloud (SPA)

## Prueba Técnica
### Contexto
TELANTO es una plataforma de colaboración entre el mundo académico y el mundo empresarial.
El objetivo es que los estudiantes participen en proyectos del mundo real, de modo que adquieran experiencia mientras aún se están formando.
Estos proyectos son diseñados por la empresa. 

De modo que un profesor de universidad, adapta este reto, de acuerdo a las expectativas de la empresa relacionado también al temario impartido en su curso.

Uno de los apartados que ahora nos toca evolucionar, es el apartado de **"Learning"**, cuyo objetivo es dar formación relacionada a la mejora de los matches entre curso / reto, 
mediante formación intensiva a través de master classes.

### Objetivo
Crear un marketplace de master classes.

Mostrar una lista de cursos con el título, summary, foto, tal como se muestra en los tiles del pdf
[learning-design.pdf](./learning-design.pdf)

### Criterios de Evaluación
#### Maqueta
- Estructura de maquetación (presentational components y container components)
- Aplicar CSS usando BEM
- No hace falta que el diseño esté maquetado al 100%, nos importa mas el tipo de CSS aplicado para el layout, que por ejemplo los colores la  sombras.
- Que sea responsive, que se adapte al tamaño de pantallas móviles (no hace falta que el diseño para móvil sea diferente)
- Las imágenes se encuentran en la carpeta (src/assets/)



#### Tests
- Crear los tests E2E (cypress) para validar que la información se muestra correctamente.
- Crear los tests unitarios para el caso de uso "Visualizar Cursos".
- Importante que los tests unitarios, usen Testing Library.
- Testear unitariamente creando abstracción de los sistemas externos con Jest Mock (por ejemplo una API)
- Crear Object Factories si es necesario.
- Usar el patrón Page Object si es necesario.

#### Implementación
- Usar Composition API de Vue 3
- Crear una Fake API, simulando el comportamiento usando Promises y extrayendo contenido de un JSON estático (En producción se usará una API)
- Usar Composable Functions. Mas información: https://labs.thisdot.co/blog/custom-composable-methods-with-vue-3

### Entrega
1. Crear un fork del proyecto
2. Trabajarlo en un repositorio personal.
3. Entregar el repositorio personal o un zip.

----------------------------------------------------------------------------

## 🛠️ Project setup

- Node 14.17.0 (LTS)
- Yarn

```bash
# install project dependencies using yarn
yarn install
```

### ⌨️ Compiles and hot-reloads for development
```bash
# serve with hot reload at localhost:8080
yarn serve
```

### 🖥️ Compiles and minifies for production
```bash
# build for production and launch server
yarn build

# Launch generated files in local server at localhost:5000
npm install -g serve
yarn start
```

## ✅ Lints and fixes files
### Run Lint
```bash
yarn lint
```
### Lint fix automatically
```bash
yarn lintfix
```

### Run your unit tests
```bash
yarn test:unit
```
### Run your end-to-end tests
```bash
yarn test:e2e
```


<br>
