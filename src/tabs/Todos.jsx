import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  onSubmit = text => {
    const todo = {
      id: nanoid(),
      text: text,
    };
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <Grid>
          {todos.map((todo, idx) => {
            return (
              <GridItem key={todo.id}>
                <Todo todo={todo} number={idx + 1} />
              </GridItem>
            );
          })}
        </Grid>
      </>
    );
  }
}
