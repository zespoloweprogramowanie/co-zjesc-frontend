/**
 * @module pages/MyRecipesPage
 */

import React, { Component } from 'react';
import RecipeListing from '../../components/RecipeListing/RecipeListing';
import CoZjescService from '../../services/co-zjesc-service';
import SuggesterSection from '../../components/SuggesterSection/SuggesterSection';

/**
 * Component used to render recipe listing with recipes added by logged user.
 * This component handles fetching that list.
 */
class MyRecipesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
    };
  }

  componentDidMount() {
    CoZjescService
      .recipes
      .getFromCurrentUser()
      .then(recipes => this.setState({ recipes }));
  }

  render() {
    const { recipes } = this.state;

    if (recipes) {
      return (
        <RecipeListing
          title="Moje przepisy"
          recipes={recipes}
          withEditButtons
        />
      );
    }

    return (
      <SuggesterSection title="Nie dodałeś żadnych przepisów" />
    );
  }
}

export default MyRecipesPage;
