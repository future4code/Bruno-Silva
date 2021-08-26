import { UserBusiness } from "../src/business/UserBusiness";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { HashGeneratorMock } from "./mocks/HashGeneratorMock";
import { TokenGeneratorMock } from "./mocks/TokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";
import { UserDatabase } from "../src/data/UserDatabase";
import { User, USER_ROLES } from "../src/model/User";
import { userMockAdmin } from "./mocks/UserMock";

const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new HashGeneratorMock(),
    new TokenGeneratorMock(),
    new UserDatabaseMock() as UserDatabase
)

describe("Testando o signup", () => {

    test("Deve retornar erro quando nome está vazio", async () => {
        expect.assertions(2);
        try {

            await userBusinessMock.signup(
                "",
                "joao@email.com",
                "blius",
                "normal"
            );

        } catch (error) {
            expect(error.message).toEqual("Missing input");
            expect(error.statusCode).toBe(422);
        }
    });

    it("Deve retornar erro quando o email não tem arroba", async () => {
        expect.assertions(2);

        try {
            await userBusinessMock.signup(
                "João",
                "joao.email.com",
                "blius",
                "normal"
            );


        } catch (error) {
            expect(error.message).toEqual("Invalid email");
            expect(error.statusCode).toBe(422);
        }

    });

    test("Deve retornar erro ao receber senha com 5 caracteres ou menos", async () => {
        expect.assertions(2);
        try {
            await userBusinessMock.signup(
                "João",
                "joao@email.com",
                "blius",
                "normal"
            );

        } catch (error) {
            expect(error.statusCode).toBe(422);
            expect(error.message).toEqual("Invalid password")
        }
    });

    test("Deve retornar erro ao não receber user role normal ou admin", async () => {
        expect.assertions(2);
        try {

            await userBusinessMock.signup(
                "João",
                "joao@email.com",
                "blius123",
                "GUEST"
            );

        } catch (error) {
            expect(error.statusCode).toBe(422);
            expect(error.message).toEqual("Invalid user role");
        }
    });

    test("Sucesso no cadastro", async () => {
        expect.assertions(1);

        const { accessToken } = await userBusinessMock
            .signup("João",
                "joao@email.com",
                "blius123",
                "ADMIN");

        expect(accessToken).toEqual("token_mock");

    });

});

describe("Testando o login", () => {

    test("Deve retornar erro ao não encontrar usuário no banco", async () => {
        expect.assertions(2);
        try {

            await userBusinessMock.login("joao@email.com", "12345678");

        } catch (error) {
            expect(error.statusCode).toBe(401);
            expect(error.message).toEqual("Invalid credentials");

        }
    });

    test("Deve retornar erro ao receber senha incorreta de usuário", async () => {
        expect.assertions(2);

        try {

            await userBusinessMock.login("astrodev@gmail.com", "12345678");

        } catch (error) {
            expect(error.statusCode).toBe(401);
            expect(error.message).toEqual("Invalid credentials");

        }
    });

    test("Deve retornar token de acesso quando os dados estão corretos", async () => {
        expect.assertions(1);

        const { accessToken } = await userBusinessMock.login("astrodev@gmail.com", "astrodev123");
        expect(accessToken).toEqual("token_mock");

    });
})

describe("Testando findUserById", () => {
    test("Deve retornar erro correto se o usuário pesquisado não existir", async () => {
        expect.assertions(2);

        try {
            await userBusinessMock.findUserById("id errado");
        } catch (error) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("User not found");
        };
    });

    test("Deve retornar informações do usuário se usuário válido", async () => {
        expect.assertions(2);
        try {
            const result = await userBusinessMock.findUserById("id_mock_admin");

            expect(result).toHaveBeenCalledWith("id_mock_admin");
            expect(result).toEqual(userMockAdmin);
        } catch (error) {
            console.log(error.message);
        };

    });
});