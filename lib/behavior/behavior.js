Astro.Behavior.create({
	name: 'timestamp',
	options: {
		hasCreatedField: true,
		createdFieldName: 'createdAt',
		hasUpdatedField: true,
		updatedFieldName: 'updatedAt'
	},
	createClassDefinition: function() {
		let behavior = this;

		let definition = {
			fields: {},
			events: {
				beforeInsert: function timestampBeforeInsert(e) {
					var doc = e.currentTarget;
					var Class = doc.constructor;
					behavior.setCreationDate(doc);
				},
				beforeUpdate: function timestampBeforeUpdate(e) {
					var doc = e.currentTarget;
					var Class = doc.constructor;
					behavior.setModificationDate(doc);
				}
			}
		};

		if (this.options.hasCreatedField) {
			// Add a field for storing a creation date.
			definition.fields[this.options.createdFieldName] = {
				type: Date,
				immutable: true,
				default: null
			};
		}

		if (this.options.hasUpdatedField) {
			// Add a field for storing an update date.
			definition.fields[this.options.updatedFieldName] = {
				type: Date,
				optional: true,
				default: null
			};
		}

		return definition;
	},
	setCreationDate: function(doc) {
		// Get current date.
		let date = new Date();

		// If the "hasCreatedField" option is set.
		if (this.options.hasCreatedField) {
			// Set value for created field.
			doc[this.options.createdFieldName] = date;
		}

		if (this.options.hasUpdatedField) {
			// Set value for the "updatedAt" field.
			doc[this.options.updatedFieldName] = date;
		}
	},
	setModificationDate: function(doc) {
		// Get current date.
		let date = new Date();

		// If the "hasUpdatedField" option is set.
		if (this.options.hasUpdatedField) {
			// Set value for the "updatedAt" field.
			doc[this.options.updatedFieldName] = date;
		}
	}
});