module.exports = RemoveDots;

function RemoveDots() {
  return {
    Components: {
      leave(component) {
        console.log("Replacing dots in schema names and references");

        let replacements = new Map();
        Object.keys(component.schemas).forEach(function (schemaKey) {
          if (schemaKey.includes(".")) {
            const newSchemaKey = schemaKey.replaceAll(".", "");

            if (component.schemas[newSchemaKey] !== undefined) {
              throw new Error(
                `Cannot rename schema "${schemaKey}" into "${newSchemaKey}" : schema "${newSchemaKey}" already exists.`
              );
            } else {
              component.schemas[newSchemaKey] = component.schemas[schemaKey];
              delete component.schemas[schemaKey];
              replacements.set(schemaKey, newSchemaKey);
            }
          }
        });

        replacements = new Map([...replacements.entries()].sort().reverse());

        let schemas = JSON.stringify(component.schemas);
        for (let [schemaKey, newSchemaKey] of replacements) {
          schemas = schemas.replaceAll(
            "schemas/" + schemaKey,
            "schemas/" + newSchemaKey
          );
        }
        component.schemas = JSON.parse(schemas);
      },
    },
  };
}
