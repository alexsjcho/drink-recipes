class CocktailAPI{
  async  getDrinksByName(name) {
      //search by name
      const apiResponse = await fetch (`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);

      //Returns a json reponse
      const cocktails = await apiResponse.json();

      return {
          cocktails
      }

    }   
}