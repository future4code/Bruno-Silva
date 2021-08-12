import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public static getRecipeById = async (
        id: string,
    ):Promise<Recipe> => {
        const recipe = await BaseDatabase.connection("Recipe_projeto19")
            .select()
            .where({ id });

        return recipe[0] && Recipe.toRecipeModel(recipe[0]);
    };

    public static createRecipe = async (
        recipe: Recipe
    ):Promise<void> => {
        await BaseDatabase.connection("Recipe_projeto19")
            .insert({
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                createdAt: recipe.createdAd,
                creatorId: recipe.creatorId
            });
    };
};