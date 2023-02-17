import axios from 'axios';
import Swal from 'sweetalert2';

// get All Recipe
export const getRecipe = (setRecipe) => async (dispatch) => {
  try {
    // axios.get('https://izipizy-team.cyclic.app/api/v1/recipe').then((response) => {
    //   console.log(response.data);
    //   setRecipe(response.data.data);
    // });
    dispatch({ type: 'getAllRecipe', payload: 'success' });
  } catch (error) {
    console.log(error);
  }
};

// Create Recipe
export const createRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: 'createRecipe', payload: 'Recipe Created success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// Update Recipe
export const updateRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: 'updateRecipe', payload: 'Recipe Updated success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

// Delete Recipe
export const deleteRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: 'deleteRecipe', payload: 'Recipe Deleted success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};

export const getDetailRecipe = (setRecipe) => async (dispatch) => {
  try {
    // axios
    //     .get(`${process.env.REACT_APP_BACKEND}/recipe/${id}`)
    //     .then(function (response) {
    //       setRecipe(response.data.data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    dispatch({ type: 'getDetailRecipe', payload: 'Get detail recipe success' });
  } catch (error) {
    Swal.fire({
      text: error.response.data.message,
      icon: 'warning',
    });
  }
};
