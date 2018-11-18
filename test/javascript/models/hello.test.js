import Hello from "../../../app/javascript/models/hello"

describe('#greet', () => {
  it('', () => {
    const hello = new Hello("foo")
    expect(hello.greet()).toBe("こんにちは。 foo です");
  })
})
