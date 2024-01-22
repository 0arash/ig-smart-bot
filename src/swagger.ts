import swaggerAutogen from "swagger-autogen";

export const generateSwagger = () => {
    const doc = {
        info: {
            version: "v0.0.1",
            title: "HIX web chat api.",
            description: "HIX web chat backend api.",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                },
            },
        },
    };

    const outputFile = "./swagger_output.json";
    const endpointsFiles = ["./src/routes/index.ts"];

    swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
};
