
describe("meaning of the world", () => {
  it("equals to 42", () => {
    expect(42).to.equal(42)
  })

  it("equals to 42 using snapshots", () => {
    expect(42).to.matchSnapshot()
  })
})
