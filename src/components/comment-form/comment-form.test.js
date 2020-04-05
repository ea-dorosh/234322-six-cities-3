import React from "react";
import renderer from "react-test-renderer";
import {CommentForm} from "./comment-form.jsx";

it(`Should CommentForm render correctly`, () => {
  const tree = renderer
    .create(
        <CommentForm
          loadingStatus={`string`}
          id={1}
          onReviewSubmit={()=>{}}
          onLoadingStatusClear={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
