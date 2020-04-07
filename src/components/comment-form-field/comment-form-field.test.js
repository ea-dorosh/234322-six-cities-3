import React from "react";
import renderer from "react-test-renderer";
import CommentFormField from "./comment-form-field";

const initialState = {
  comment: ``,
  rating: null,
};

it(`Should CommentFormField render correctly`, () => {
  const tree = renderer
    .create(
        <CommentFormField
          onChange={()=>{}}
          onSubmit={()=>{}}
          values={initialState}
          error={false}
          disabled={false}
          submitDisabled={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
