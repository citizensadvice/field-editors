# citizensadvice/field-editor

Contentful upstream [README.md](https://github.com/contentful/field-editors/blob/master/README.md)

## Changes

### References package (`packages/reference`)

- contains:
  - custom card footer that has similar code to the one in [contentful-show-audience](https://github.com/citizensadvice/contentful-show-audience) app
- depends on:
  - no customised deps

### Rich-text package (`packages/rich-text`)

- contains:
  - no customisation of the code
- depends on:
  - the customised references package

---

## Repositories dependant on citizensadvice/field-editor

### [Contentful Rich Text](https://github.com/citizensadvice/contentful-rich-text) (app)

- purpose:

  - customise the rich text field of entries by displaying audiences in linked entry cards

- contains:
  - no custom app code
  - field app set in appearance
- depends-on:
  - citizensadvice/field-editor
