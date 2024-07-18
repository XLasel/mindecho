export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended"
  ],
  plugins: [
    "stylelint-order",
    "stylelint-scss"
  ],
  customSyntax: "postcss-scss",
  rules: {
    "prettier/prettier": true,
    "max-nesting-depth": 3,
    "block-no-empty": true,
    "block-opening-brace-space-before": "always",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-closing-brace-newline-before": "always-multi-line",
    "order/properties-alphabetical-order": null,
    "order/properties-order": [
      {
        "properties": ["composes", "@import", "@extend", "@mixin", "@at-root", "@include"]
      },
      {
        "properties": [
          'grid-area',
        ]
      },
      {
        "properties": [
          "content",
          "position",
          "top",
          "right",
          "bottom",
          "left",
          "z-index",
          "float",
        ]
      },
      {
        "properties": [
          "display",
        ]
      },
      {
        "properties": [
          'grid-column',
          'grid-row',
          'grid',
          'grid-template-areas',
          'grid-template-columns',
          'grid-template-rows',
          'grid-gap',
          'grid-column-gap',
          'grid-row-gap',
        ]
      },
      {
        "properties": [
          "flex",
          "flex-direction",
          "justify-content",
          'align-content',
          'flex-wrap',
          "align-items",
          "align-self",
          "flex-grow",
          "flex-shrink",
          "flex-basis",
          'flex-flow',
        ]
      },
      {
        "properties": [
          "order",
        ]
      },
      {
        "properties": [
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
        "properties": [
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
        "properties": [
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
        "properties": [
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
      }
    ],
    "block-closing-brace-newline-after": [
      "always",
      {
        "ignoreAtRules": ["if", "else"]
      }
    ],
    "declaration-block-single-line-max-declarations": 0,
    "declaration-empty-line-before": [
      "always",
      {
        "except": ["after-declaration", "first-nested"],
        "ignore": ["after-comment", "inside-single-line-block"]
      }
    ],
    "rule-empty-line-before": [
      "always",
      {
        "ignore": ["after-comment"],
        "except": ["first-nested"]
      }
    ],
    "scss/at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["tailwind"]
      }
    ],
    "at-rule-empty-line-before": [
      "always",
      {
        "except": ["first-nested"],
        "ignore": ["after-comment"],
        "ignoreAtRules": ["else"]
      }
    ]
  }
};
