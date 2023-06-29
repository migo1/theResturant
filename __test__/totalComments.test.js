import totalComments from "../src/modules/totalComments.js";

test("commentCounter updates the text content of commentCount with the correct length", () => {
  const commentCount = { textContent: "" };
  const data = [
    { item_id: 1, username: "user1", comment: "comment1" },
    { item_id: 2, username: "user2", comment: "comment2" },
    { item_id: 3, username: "user3", comment: "comment3" },
  ];
  const expectedLength = `comments (${data.length})`;
  totalComments(commentCount, data.length);
  expect(commentCount.textContent).toBe(expectedLength);
});