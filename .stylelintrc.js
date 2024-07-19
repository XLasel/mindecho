export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-prettier",
    "stylelint-order",
  ],
  customSyntax: "postcss-scss",
  rules: {
    "prettier/prettier": [true, {
      endOfLine: "auto"
    }],
    "max-nesting-depth": 3,
    "block-no-empty": true,
    "import-notation": "string",
    "alpha-value-notation": "number",
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "declaration-empty-line-before": null,
    "no-duplicate-at-import-rules": [
      true,
      {
        "message": "Повторный импорт файла не хочешь ты"
      }
    ],
    "order/properties-alphabetical-order": null,
    "order/properties-order": [
      [{
        emptyLineBefore: "always",
        properties: ["composes", "@import", "@extend", "@mixin", "@at-root", "@include"]
      },
      {
        emptyLineBefore: "always",
        properties: ["grid-area"]
      },
      {
        emptyLineBefore: "always",
        properties: [
          "content",
          "position",
          "top",
          "right",
          "bottom",
          "left",
          "z-index",
          "float"
        ]
      },
      {
        emptyLineBefore: "always",
        properties: ["display", "gap"]
      },
      {
        emptyLineBefore: "always",
        properties: [
          "grid-column",
          "grid-row",
          "grid",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
          "grid-template",
          "grid-gap",
          "grid-column-gap",
          "grid-row-gap",
          "place-items",
          "place-self",
          "place-content"
        ]
      },
      {
        emptyLineBefore: "always",
        properties: [
          "flex",
          "flex-direction",
          "justify-content",
          "align-content",
          "flex-wrap",
          "align-items",
          "align-self",
          "flex-grow",
          "flex-shrink",
          "flex-basis",
          "flex-flow"
        ]
      },
      {
        emptyLineBefore: "always",
        properties: ["order"]
      },
      {
        emptyLineBefore: "always",
        properties: [
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left"
        ]
      },
      {
        emptyLineBefore: "always",
        properties: [
          "background",
          "background-color",
          "background-image",
          "background-position",
          "background-size",
          "background-repeat",
          "border",
          "border-top",
          "border-right",
          "border-bottom",
          "border-left",
          "border-radius",
          "box-shadow"
        ]
      },
      {
        emptyLineBefore: "always",
        properties: [
          "font-size",
          "font-weight",
          "line-height",
          "color",
          "text-align",
          "text-transform",
          "text-decoration"
        ]
      },
      {
        emptyLineBefore: "always",
        properties: [
          "filter",
          "animation",
          "animation-name",
          "animation-delay",
          "animation-duration",
          "animation-direction",
          "animation-fill-mode",
          "animation-play-state",
          "animation-iteration-count",
          "animation-timing-function",
          "transform",
          "transform-style",
          "transform-origin",
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function"
        ]
      }],
      {
        "unspecified": "bottom"
      }
    ],
    "declaration-block-single-line-max-declarations": 0,
    "rule-empty-line-before": [
      "always",
      {
        "ignore": ["after-comment"],
        "except": ["first-nested"]
      }
    ],
    "no-duplicate-selectors": [true, {
      "message": "Селекторы дублировать не хочешь ты"
    }],
    'at-rule-no-unknown': null,
    "scss/at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["/^at-/",
          "/^mixin/",
          "/^include/",
          "/^extend/",
          "/^if/",
          "/^else/",
          "/^function/",
          "/^return/",
          "/^each/",
          "/^while/",
          "tailwind"]
      }
    ],
    "at-rule-empty-line-before": ["always", {
      "message": "Перед @-правилами строку пустую оставь (кроме @import и @include)",
      "except": ["first-nested"],
      ignoreAtRules: ["import", "include", "function", "return", "if", "else"],
      ignore: ["after-comment"]
    }],
  }
};