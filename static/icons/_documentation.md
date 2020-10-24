
Todos os ícones SVG são reutilizados através da técnica de [SVG Sprite](https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/).

A Técnica consiste em ter um sprite com todos os ícones inseridos no ```HTML``` da aplicação uma única vez e reutilizar o mesmo em todo o restante da aplicação através de imports pelo _'ID'_ do SVG. Ex:

```html
<!-- Exemplo de componete de Sprite Global -->
<svg class="l-spriteSvg" xmlns="http://www.w3.org/2000/svg">
<!--
* Ícone inserido dentro do
* Sprite que leva o ID e o 'viewBox'
* retirado do arquivo SVG de origem
-->
  <symbol id="instagram-icon" viewBox="0 0 32 32">
   <!-- conteúdo que havia dentro do arquivo SVG -->
  </symbol>
</svg>
```

Hoje já temos o sprite adicionado de forma global atarvés de um componente que já está na estrutura geral e importando no componente ```App.js```.

Junto a ele temos um componente ```<icon />``` que recebe duas props, uma com o **_name_** do **_ID_** para o ícone necessário(que é obrigatória) de import do sprite e uma prop opcional de **_title_**.
Ex de uso do component:

```HTML
<icon name="ic-alert" title="Ícone de alerta" />
```



