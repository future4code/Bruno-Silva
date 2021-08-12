import { Request, Response } from 'express';
import { FollowUserDatabase } from '../data/FollowUserDatabase';
import { RecipeDatabase } from '../data/RecipeDatabase';
import { Recipe } from '../entities/Recipe';
import { Authenticator } from '../services/Authenticator';

const getRecipesOfFollowedUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;

    try {
        const token = req.headers.authorization;

        if (!token) {
            errorCode = 422;
            throw new Error("Endpoint usage requires authorization! Please, try to insert a valid token");
        };

        const authData = Authenticator.getTokenData(token);
        const follows = await FollowUserDatabase.getFollowByFollowerId(authData.id);

        let recipesFromFollows: Recipe[] = [];
        for (let follow of follows) {
            const recipesByFollowed = await RecipeDatabase.getRecipesByCreatorId(follow.followedUserId);

            for (let recipe of recipesByFollowed) {
                recipesFromFollows.push(recipe);
            };
        };

        const orderedRecipes = recipesFromFollows.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return 1;
            }
            if (a.createdAt < b.createdAt) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

        res.status(200).send({ recipes: orderedRecipes });
    } catch (error) {
        res.status(errorCode).send({ message: error.message ? error.message : error.sqlMessage });
    }
};

export default getRecipesOfFollowedUsers;