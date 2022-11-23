
module.exports = {
	verifyJoiSchema: async(data, schema) => {
		const validSchema = await schema.validate(data);
		if ((validSchema) && (validSchema.error)) {
			throw validSchema.error;
		} else {
			console.log("This is verifyJoiSchema",validSchema.value);
			return validSchema.value;
		}
	},
};